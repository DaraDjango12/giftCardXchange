import search from "@assets/images/Forum/search.svg";
import user from "@assets/images/Forum/user_dp.jpeg";
import H5Heading from "@components/commons/headings/H5Heading";
import PText from "@components/commons/headings/PText";
import Input from "@components/commons/input/Input";
import { IoMdNotificationsOutline } from "react-icons/io";

const Navbar: React.FC<{ activeTab: string }> = ({ activeTab }) => {
  return (
    <div className="pl-[28rem] w-[100%] h-[8.1rem] bg-[#fff] px-10 flex items-center">
      <div className="flex justify-end md:justify-between w-full items-center">
        <div className="hidden md:flex items-center  w-[66.5rem]">
          <h1 className="text-[20px] font-bold w-[45rem]">
            {activeTab === "/admin" ? (
              <H5Heading title="Welcome Back!" />
            ) : activeTab === "/admin/users" ? (
              <H5Heading title="Manage Users" />
            ) : activeTab === "/admin/opportunities" ? (
              <H5Heading title="Manage Opportunities" />
            ) : activeTab === "/admin/complaints" ? (
              <H5Heading title="Manage Complaints" />
            ) : activeTab === "/admin/broadcast" ? (
              <H5Heading title="Send Broadcast" />
            ) : (
              ""
            )}
          </h1>

          <div className="w-full">
            <Input
              icon={search}
              placeholder="Search Anything..."
              iconPosition="left"
            />
          </div>
        </div>

        <div className="flex items-center gap-[2.4rem] cursor-pointer ">
          <div className="relative">
            <IoMdNotificationsOutline size={25} />
            <span className="absolute -top-1 right-0 bg-red-500 rounded-full w-6 h-6 text-sm flex items-center justify-center text-white font-bold">
              5
            </span>
          </div>
          <div className="flex items-center gap-2">
            <img
              src={user}
              alt="user_dp"
              className="h-[4rem] w-[4rem] rounded-full"
            />
            <div className="hidden md;flex flex-col ">
              <H5Heading title="Mr. Schollar" />
              <PText text="Admin" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
