import { EyeOutlined } from "@ant-design/icons";
import PrimaryBtn from "@components/commons/buttons/PrimaryBtn";
import { opportunities } from "@components/opportunities/opportunities";
import { opportunity } from "@constants/index.types";
import { Select, Table, TableProps, Tag } from "antd";
import { Option } from "antd/es/mentions";
import categories from "@assets/data/categories.json";
import { Link } from "react-router-dom";
import CreateOpportunityBtn from "@components/opportunities/CreateOpportunityBtn";

const OpportunitiesScreen = () => {
  const columns: TableProps<opportunity>["columns"] = [
    {
      title: "",
      dataIndex: "author",
      render: (_, record) => (
        <img
          src={record.author.profilePic}
          width="40px"
          className="rounded-full"
        />
      ),
      key: "author",
    },
    {
      title: "Posted By",
      dataIndex: "fullname",
      render: (_, record) => (
        <span>
          {record.author.firstName} {record.author.lastName}
        </span>
      ),
      key: "fullName",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Category",
      dataIndex: "tag",
      key: "category",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (_, record) => {
        let color = "";
        record.status == "Approved"
          ? (color = "green")
          : record.status == "Pending"
          ? (color = "cyan")
          : (color = "red");
        return <Tag color={color}>{record.status}</Tag>;
      },
      key: "status",
    },
    {
      title: "Posted On",
      dataIndex: "createdAt",
      key: "Posted on",
    },
    {
      title: "",
      dataIndex: "action",
      render: (_, record) => (
        <Link
          to={`/admin/opportunities/${record.id}`}
          className="cursor-pointer"
        >
          <EyeOutlined />
        </Link>
      ),
      key: "action",
    },
  ];

  const handleCategoryFilter = () => {};

  const handleStatusFilter = () => {};

  return (
    <>
      <div className="w-full">
        <div className="flex items-center justify-between my-[1.6rem] gap-[1.6rem]">
          <CreateOpportunityBtn />
          <div className="flex items-center gap-[1.6rem] pb-[2.4rem]">
            <Select
              size="middle"
              placeholder="Category"
              className="w-[15rem] text-justify"
              onChange={handleCategoryFilter}
            >
              <Option value="All">All</Option>
              {categories.map((cat) => (
                <Option key={cat} value={cat}>
                  {cat}
                </Option>
              ))}
            </Select>

            <Select
              size="middle"
              placeholder="Status"
              className="w-[15rem] text-justify"
              onChange={handleStatusFilter}
            >
              <Option value="All">All</Option>
              <Option value="Approved">Approved</Option>
              <Option value="Pending">Pending</Option>
              <Option value="Denied">Denied</Option>
            </Select>

            <PrimaryBtn>Reload</PrimaryBtn>
          </div>
        </div>
        <Table columns={columns} dataSource={opportunities} size="small" />
      </div>
    </>
  );
};

export default OpportunitiesScreen;
