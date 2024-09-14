import { complaintsDatas } from "@constants/index.types";
import {
  Dropdown,
  Flex,
  MenuProps,
  Modal,
  Table,
  TableProps,
  Tag,
  message,
} from "antd";
import React, { useEffect, useState } from "react";
import { MoreOutlined, CaretDownOutlined } from "@ant-design/icons";
import H4Heading from "@components/commons/headings/H4Heading";
import { BiMessageAltDetail, BiMoney, BiUser } from "react-icons/bi";
import {
  useDeleteComplaintMutation,
  useGetAllComplaintsQuery,
  useUpdateComplaintStatusMutation,
} from "@api/features/complaint.api";
import avatar from "@assets/images/default-avatar.svg";

const ComplaintsScreen: React.FC = () => {
  const { data: ComplaintRes } = useGetAllComplaintsQuery({});
  const [complaintsData, setComplaintsData] = useState([]);
  const [deleteComplaint, { isLoading: deleting }] = useDeleteComplaintMutation(
    {}
  );
  const [updateComplaintStatus] = useUpdateComplaintStatusMutation();

  useEffect(() => {
    ComplaintRes && setComplaintsData(ComplaintRes.data);
  }, [ComplaintRes]);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedComplaint, setSelectedComplaint] = useState<any>(null);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  const handleComplaintSelection = (complaint: any) => {
    setSelectedComplaint(complaint);
  };

  const handleViewMore = () => {
    setModalVisible(true);
    setDeleteModalVisible(false);
  };

  const handleModalClose = () => {
    setModalVisible(false);
    setDeleteModalVisible(false);
  };

  const handleDeleteModalOpen = () => {
    setDeleteModalVisible(true);
  };

  const handleDelete = async (complaintId: string) => {
    try {
      await deleteComplaint(complaintId).unwrap();
      message.success("Complaint deleted");
    } catch (error: any) {
      console.error(error);
      error.data.message && message.error(error.data.message);
    } finally {
      setDeleteModalVisible(false);
    }
  };

  const handleUpdateComplaintStatus = async (complaintType: string) => {
    try {
      await updateComplaintStatus({
        input: { status: complaintType },
        id: selectedComplaint.id,
      }).unwrap();
      message.success(`Complaint status update to ${complaintType}`);
    } catch (error: any) {
      console.error(error);
      error.data.message && message.error(error.data.message);
    } finally {
      setModalVisible(false);
    }
  };

  const status = [
    {
      key: "0",
      label: (
        <span onClick={() => handleUpdateComplaintStatus("RESOLVED")}>
          Resolved
        </span>
      ),
    },
    {
      key: "1",
      label: (
        <span onClick={() => handleUpdateComplaintStatus("INVESTIGATING")}>
          Investigating
        </span>
      ),
    },
    {
      key: "2",
      label: (
        <span onClick={() => handleUpdateComplaintStatus("REJECTED")}>
          Rejected
        </span>
      ),
    },
  ];

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <span onClick={handleViewMore}>View More</span>,
    },
    {
      type: "divider",
    },
    {
      key: "2",
      label: <span onClick={handleDeleteModalOpen}>Delete</span>,
    },
  ];

  const columns: TableProps<complaintsDatas>["columns"] = [
    {
      title: "",
      dataIndex: "profilePic",
      render: (_, record) => (
        <img
          src={`${record.reporter?.photo ? record.reporter.photo : avatar}`}
          height={30}
          width={30}
        />
      ),
      key: "profilePic",
    },
    {
      title: "Name",
      dataIndex: "fullName",
      render: (_, record) => (
        <span>
          {record.reporter.firstName} {record.reporter.lastName}
        </span>
      ),
      key: "profilePic",
    },
    {
      title: "Email",
      dataIndex: "email",
      render: (_, record) => <span>{record.reporter.email}</span>,
      key: "email",
    },
    {
      title: "Complaint Date",
      dataIndex: "createdAt",
      key: "createdAt",
    },
    {
      title: "Complaint Type",
      dataIndex: "complaintType",
      key: "complaintType",
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: (_, record) => {
        let color = "";
        record.status === "RESOLVED"
          ? (color = "green")
          : record.status == "INVESTIGATING"
          ? (color = "cyan")
          : (color = "red");
        return <Tag color={color}>{record.status}</Tag>;
      },
      key: "complaintType",
    },
    {
      title: "",
      dataIndex: "Action",
      render: (_, record) => {
        return (
          <Dropdown
            menu={{
              items,
            }}
            placement="bottom"
            className="cursor-pointer"
            trigger={["click"]}
          >
            <span onClick={() => handleComplaintSelection(record)}>
              <MoreOutlined />
            </span>
          </Dropdown>
        );
      },
      key: "action",
    },
  ];

  return (
    <div className="overflow-x-auto">
      <Table columns={columns} dataSource={complaintsData} />

      <Modal open={modalVisible} onCancel={handleModalClose} footer={null}>
        {selectedComplaint && (
          <div className="flex flex-col gap-10 py-20">
            <Flex className="items-center justify-between">
              <H4Heading title="Complaint" />

              <Dropdown
                menu={{ items: status }}
                trigger={["click"]}
                className="bg-BrandPrimary p-3 rounded-md text-white"
              >
                <span>
                  Update Status <CaretDownOutlined />
                </span>
              </Dropdown>
            </Flex>

            <p className="flex gap-4 items-center">
              <BiUser className="text-3xl text-BrandPrimary" />{" "}
              {selectedComplaint.reporter.firstName}{" "}
              {selectedComplaint.reporter.lastName}
            </p>
            <p className="flex gap-4 items-center">
              <BiUser className="text-3xl text-BrandPrimary" />{" "}
              {selectedComplaint.reporter.email}
            </p>
            <p className="flex gap-4 items-center">
              <BiMoney className="text-3xl text-BrandPrimary" />
              {selectedComplaint.complaintType}
            </p>
            <p className="flex gap-4">
              <BiMessageAltDetail className="text-3xl text-BrandPrimary" />{" "}
              {selectedComplaint.description}
            </p>
          </div>
        )}
      </Modal>

      <Modal
        title="Confirm Delete"
        open={deleteModalVisible}
        onCancel={handleModalClose}
        onOk={() => handleDelete(selectedComplaint?.id)}
        okButtonProps={{ style: { backgroundColor: "red" }, loading: deleting }}
      >
        <p>Are you sure you want to delete this complaint?</p>
      </Modal>
    </div>
  );
};

export default ComplaintsScreen;
