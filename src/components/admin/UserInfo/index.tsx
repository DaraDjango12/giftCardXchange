import { DashOutlined } from "@ant-design/icons";
import PrimaryBtn from "@components/commons/buttons/PrimaryBtn";
import {
  Button,
  Dropdown,
  Form,
  Input,
  Modal,
  Select,
  Table,
  TableProps,
  Tag,
  message,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import { Option } from "antd/es/mentions";
import { useEffect, useState } from "react";
import {
  useGetAllUsersQuery,
  useSendUserEmailMutation,
} from "@api/features/user.api";
import { User } from "@api/types.api";
import default_avatar from "@assets/images/default-avatar.svg";
import { Link } from "react-router-dom";
import InviteAFriend from "@components/modals/InviteAFriendModal";

interface emailTypes {
  subject: string;
  body: string;
}
const UserInfoScreen = () => {
  const { data: userRes } = useGetAllUsersQuery({});
  const [sendUserEmail, { isLoading: sending }] = useSendUserEmailMutation();
  const [userInfo, setUserInfo] = useState<User[]>();

  useEffect(() => {
    setUserInfo(userRes?.data);
  }, [userRes]);

  const [selectedUser, setSelectedUser] = useState<User>();
  const [emailModal, setEmailModal] = useState(false);
  const [openInvite, setOpenInvite] = useState<boolean>(false);

  const items = [
    {
      key: "1",
      label: <p onClick={() => setEmailModal(true)}>Send Email</p>,
    },

    {
      key: "2",
      label: <Link to={`/admin/users/${selectedUser?.id}`}>View Profile</Link>,
    },
  ];

  const columns: TableProps<User>["columns"] = [
    {
      title: "",
      dataIndex: "profilePic",
      render: (_, record) => (
        <img
          src={`${record?.photo ? record.photo : default_avatar}`}
          height={40}
          width={40}
        />
      ),
      key: "profilePic",
    },
    {
      title: "Name",
      dataIndex: "fullname",
      render: (_, record) => (
        <span>
          {record.firstName} {record.lastName}
        </span>
      ),
      key: "fullName",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      render: (_, record) => (
        <span>{record.profile?.gender ? record.profile.gender : " - "}</span>
      ),
      key: "gender",
    },
    {
      title: "Location",
      dataIndex: "countryOfResidence",
      render: (_, record) => (
        <span>
          {record.profile?.countryOfResidence
            ? record.profile.countryOfResidence
            : " - "}
        </span>
      ),
      key: "location",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (_, record) => {
        let color = "";
        record.status === "ACTIVE"
          ? (color = "green")
          : record.status === "DEACTIVED"
          ? (color = "red")
          : (color = "orange");
        return <Tag color={color}>{record.status}</Tag>;
      },
      key: "status",
    },
    {
      title: "",
      dataIndex: "action",
      render: (_, record) => {
        return (
          <Dropdown
            menu={{
              items,
            }}
            placement="bottomCenter"
            className="cursor-pointer"
            trigger={["click"]}
          >
            <DashOutlined onClick={() => setSelectedUser(record)} />
          </Dropdown>
        );
      },
      key: "action",
    },
  ];

  // const locations = userInfo
  //   .map((user: User) => user.profile)
  //   .filter(
  //     (value, index, current_value) => current_value.indexOf(value) === index
  //   );

  const handleGenderFilter = () => {};
  const handleLocationFilter = () => {};
  const handleStatusFilter = () => {};

  const emailThisUser = async (values: emailTypes) => {
    try {
      await sendUserEmail({ ...values, email: selectedUser?.email }).unwrap();
      message.success(`Email sent to ${selectedUser?.firstName} successfully.`);
    } catch (error: any) {
      console.error(error);
      error.data.message && message.error(error.data.message);
    } finally {
      setEmailModal(false);
    }
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-end my-[1.6rem] gap-[1.6rem]">
        <Select
          size="middle"
          placeholder="Gender"
          className="w-[15rem] text-justify"
          onChange={handleGenderFilter}
        >
          <Option value="All">All</Option>
          <Option value="Male">Male</Option>
          <Option value="Female">Female</Option>
        </Select>

        <Select
          size="middle"
          placeholder="Location"
          className="w-[15rem] text-justify"
          onChange={handleLocationFilter}
        >
          {/* <Option value="All">All</Option>
          {locations.map((location) => (
            <Option key={location}>{location}</Option>
          ))} */}
        </Select>

        <Select
          size="middle"
          placeholder="Status"
          className="w-[15rem] text-justify"
          onChange={handleStatusFilter}
        >
          <Option value="All">All</Option>
          <Option value="Active">Active</Option>
          <Option value="Pending">Pending</Option>
        </Select>

        <PrimaryBtn>Reload</PrimaryBtn>

        <PrimaryBtn onClick={() => setOpenInvite(true)}>
          Invite a friend
        </PrimaryBtn>
      </div>
      <Table columns={columns} dataSource={userInfo} size="small" />

      {/* Modal */}
      <Modal
        title="Message User"
        open={emailModal}
        onCancel={() => setEmailModal(false)}
        footer={null}
      >
        <Form layout="vertical" onFinish={emailThisUser}>
          <p className="py-2 px-4 bg-BrandGray300 text-BrandGray800 my-4 rounded-md">
            {selectedUser?.firstName} {selectedUser?.lastName}
          </p>

          <Form.Item
            name="subject"
            label="Subject"
            rules={[{ required: true, message: "Please input the subject!" }]}
          >
            <Input className="p-3" />
          </Form.Item>

          <Form.Item
            name="body"
            label="Message"
            rules={[
              {
                required: true,
                message: "Please input the message here!",
              },
            ]}
          >
            <TextArea rows={4} />
          </Form.Item>

          <Form.Item>
            <Button
              htmlType="submit"
              loading={sending}
              type="primary"
              className="bg-BrandPrimary"
            >
              Send Email
            </Button>
          </Form.Item>
        </Form>
      </Modal>

      {/* Invite a Friend */}
      <InviteAFriend openInvite={openInvite} setOpenInvite={setOpenInvite} />
    </div>
  );
};

export default UserInfoScreen;
