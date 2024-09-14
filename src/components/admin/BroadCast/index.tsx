import { SendOutlined } from "@ant-design/icons";
import { selectCurrentAuthUser } from "@api/data/authSlice";
import {
  useCreateBroadcastMutation,
  useDeleteBroadcastMutation,
  useGetAllBroadcastsQuery,
} from "@api/features/broadcast.api";
import { Broadcast } from "@api/types.api";
import PrimaryBtn from "@components/commons/buttons/PrimaryBtn";
import H4Heading from "@components/commons/headings/H4Heading";
import {
  Button,
  Dropdown,
  Form,
  Input,
  MenuProps,
  Modal,
  Space,
  Table,
  message,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import { useEffect, useState } from "react";
import { BiMessageAltDetail, BiUser } from "react-icons/bi";
import { BsCalendarDate } from "react-icons/bs";
import { TfiMore } from "react-icons/tfi";
import { useSelector } from "react-redux";

const BroadCastScreen = () => {
  const currentUser = useSelector(selectCurrentAuthUser);
  const [createBroadcast, { isLoading: submittingBroadcast }] =
    useCreateBroadcastMutation();
  const { data: BroadcastsRes } = useGetAllBroadcastsQuery({});
  const [deleteBroadcast, { isLoading: deleting }] =
    useDeleteBroadcastMutation();

  const [allBroadcast, setAllBroadcast] = useState([]);
  const [viewBroadCast, setViewBroadCast] = useState(false);
  const [selectedBroadCast, setSelectedBroadCast] = useState<Broadcast>();
  const [openDelModal, setOpenDelModal] = useState(false);
  const [viewSelectedBroadcast, setViewSelectedBroadcast] = useState(false);

  useEffect(() => {
    BroadcastsRes && setAllBroadcast(BroadcastsRes.data);
  }, [BroadcastsRes]);

  const broadCastMsg = async (values: { subject: string; message: string }) => {
    try {
      await createBroadcast({ ...values, authorId: currentUser.id }).unwrap();
      message.success("Message sent successfully");

      setViewBroadCast(true);
    } catch (error: any) {
      console.error(error);
      error.data.message && message.error(error.data.message);
    }
  };

  const handleDeleteBroadcast = async () => {
    const id = selectedBroadCast && selectedBroadCast.id;
    try {
      await deleteBroadcast(id).unwrap();
      message.success("Broadcast deleted successfully");
    } catch (error: any) {
      console.error(error);
      error.data.message && message.error(error.data.message);
    } finally {
      setOpenDelModal(false);
    }
  };

  const tableColumns = [
    {
      title: "Posted By",
      dataIndex: "name",
      render: (_: any, record: any) => {
        return (
          <span>{record.author.firstName + " " + record.author.lastName}</span>
        );
      },
      key: "id",
    },
    {
      title: "Subject",
      dataIndex: "subject",
      key: "id",
    },
    {
      title: "Posted On",
      dataIndex: "createdAt",
      key: "id",
    },
    {
      title: "",
      dataIndex: "action",
      render: (_: any, record: any) => {
        return (
          <Dropdown
            menu={{ items }}
            trigger={["click"]}
            className="cursor-pointer"
          >
            <Space>
              <TfiMore onClick={() => setSelectedBroadCast(record)} />
            </Space>
          </Dropdown>
        );
      },
      key: "id",
    },
  ];

  const items: MenuProps["items"] = [
    {
      label: (
        <span onClick={() => setViewSelectedBroadcast(true)}>View Details</span>
      ),
      key: "0",
    },
    {
      type: "divider",
    },
    {
      label: <span onClick={() => setOpenDelModal(true)}>Delete</span>,
      key: "1",
    },
  ];

  return (
    <>
      {viewBroadCast ? (
        <div className="w-full px-[3rem] pt-[5rem]">
          <PrimaryBtn onClick={() => setViewBroadCast(false)}>
            New BroadCast
          </PrimaryBtn>
          <Table dataSource={allBroadcast} columns={tableColumns} />
        </div>
      ) : (
        <div className="w-full px-[3rem] pt-[5rem]">
          <div className="flex justify-start mb-[2rem]">
            <PrimaryBtn onClick={() => setViewBroadCast(true)}>
              View All BroadCast
            </PrimaryBtn>
          </div>
          <Form layout="vertical" onFinish={broadCastMsg}>
            <Form.Item
              name="subject"
              label="Subject"
              rules={[{ required: true, message: "Please input the subject!" }]}
            >
              <Input className="p-3" />
            </Form.Item>

            <Form.Item
              name="message"
              label="Message"
              rules={[
                {
                  required: true,
                  message: "Please input the message here!",
                },
              ]}
            >
              <TextArea rows={5} />
            </Form.Item>

            <Form.Item className="flex justify-end">
              <Button
                htmlType="submit"
                loading={submittingBroadcast}
                type="primary"
                className="bg-BrandPrimary rounded-full flex justify-center items-center"
              >
                <SendOutlined />
              </Button>
            </Form.Item>
          </Form>
        </div>
      )}

      <Modal
        open={openDelModal}
        title="Delete Broadcast"
        onOk={handleDeleteBroadcast}
        onCancel={() => setOpenDelModal(false)}
        okButtonProps={{
          style: {
            backgroundColor: "red",
          },
          loading: deleting,
        }}
        footer={(_, { OkBtn, CancelBtn }) => (
          <>
            <CancelBtn />
            <OkBtn />
          </>
        )}
      >
        Are you sure you want to delete this broadcast?
      </Modal>

      <Modal
        open={viewSelectedBroadcast}
        onCancel={() => setViewSelectedBroadcast(false)}
        footer={null}
      >
        {selectedBroadCast && (
          <div className="flex flex-col gap-10 py-20">
            <H4Heading title={selectedBroadCast.subject} />
            <p className="flex gap-4 items-center">
              <BsCalendarDate className="text-3xl text-BrandPrimary" />{" "}
              <span className="font-bold">Posted On: </span>{" "}
              {selectedBroadCast.createdAt}
            </p>
            <p className="flex gap-4 items-center">
              <BiUser className="text-3xl text-BrandPrimary" />
              <span className="font-bold">Posted By: </span>{" "}
              {selectedBroadCast.author.firstName}{" "}
              {selectedBroadCast.author.lastName}
            </p>

            <p className="flex gap-4">
              <BiMessageAltDetail className="text-3xl text-BrandPrimary" />{" "}
              {selectedBroadCast.message}
            </p>
          </div>
        )}
      </Modal>
    </>
  );
};

export default BroadCastScreen;
