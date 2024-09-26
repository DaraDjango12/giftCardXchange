import { logout } from "@api/data/authSlice";
import { useAppDispatch } from "@api/data/store";
import CloseLogo from "@assets/images/Forum/mobile_logo.svg";
import Logo from "@assets/images/logo.svg";
import React, { Dispatch, SetStateAction } from "react";
import { BiEditAlt, BiLogOut } from "react-icons/bi";
import { BsBroadcastPin } from "react-icons/bs";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { SlShield } from "react-icons/sl";
import { Link, useNavigate } from "react-router-dom";

type SideBarProps = {
  setCollapsed: Dispatch<SetStateAction<boolean>>;
  collapsed: boolean;
  activeTab: string;
};

const SideBar: React.FC<SideBarProps> = ({
  setCollapsed,
  collapsed,
  activeTab,
}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  
  const logOutHandler = () => {
    dispatch(logout);
    navigate("/signin", { replace: true });
  };

  const handleCollapseToggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      className={`h-screen bg-[#fff] py-2 px-1 flex flex-col justify-between`}
    >
      <div>
        <Link to="/">
          <div className={`my-[2rem] px-10 cursor-pointer`}>
            <img src={collapsed ? CloseLogo : Logo} alt="Logo" />
          </div>
        </Link>

        <div
          className={`flex flex-col gap-[1.2rem] justify-center  ${
            collapsed ? "collapsed" : ""
          }`}
        >
          <div
            onClick={handleCollapseToggle}
            className="flex justify-end cursor-pointer mt-5"
          >
            <div className="border p-[0.8rem] rounded-l-xl">
              {collapsed ? (
                <FaArrowRight size={20} />
              ) : (
                <FaArrowLeft size={20} />
              )}
            </div>
          </div>

          {/* Dashboard */}
          <Link
            to="/admin"
            className={`flex gap-2 items-center cursor-pointer pl-[3.2rem] pr-[2rem]  py-[1rem] ${
              activeTab === "/admin" && "bg-BrandPrimary  rounded-r-[2rem]"
            }`}
          >
            {collapsed ? (
              <div className=" pr-[2rem] ">
                <MdDashboard
                  size={18}
                  color={`${activeTab === "/admin" ? "#fff" : "#000"} `}
                />
              </div>
            ) : (
              <div
                className={`flex gap-2 items-center cursor-pointer  ${
                  activeTab === "/admin" && "bg-BrandPrimary  rounded-r-[2rem]"
                }`}
              >
                {" "}
                <MdDashboard
                  size={18}
                  color={`${activeTab === "/admin" ? "#fff" : "#000"} `}
                />
                <h2
                  className={`${
                    activeTab === "/admin" ? "text-[#fff]" : "text-[#000]"
                  } text-[1.6rem] font-semibold `}
                >
                  Dashboard
                </h2>
              </div>
            )}
          </Link>

          {/* Users */}
          <Link
            to="/admin/users"
            className={`flex gap-2 items-center cursor-pointer pl-[3.2rem] pr-[2rem]  ${
              activeTab === "/admin/users" &&
              "bg-BrandPrimary  rounded-r-[2rem]"
            }`}
          >
            {collapsed ? (
              <div className=" pr-[2rem] py-[1rem]">
                <IoMdInformationCircleOutline
                  size={18}
                  color={`${activeTab === "/admin/users" ? "#fff" : "#000"} `}
                />
              </div>
            ) : (
              <div
                className={`flex gap-2 items-center cursor-pointer  py-[1rem] ${
                  activeTab === "/admin/users" &&
                  "bg-BrandPrimary  rounded-r-[2rem]"
                }`}
              >
                {" "}
                <IoMdInformationCircleOutline
                  size={18}
                  color={`${activeTab === "/admin/users" ? "#fff" : "#000"} `}
                />
                <h2
                  className={`${
                    activeTab === "/admin/users" ? "text-[#fff]" : "text-[#000]"
                  } text-[1.6rem] font-bold `}
                >
                  Users
                </h2>
              </div>
            )}
          </Link>

          {/* Opportunities */}
          <Link
            to="/admin/opportunities"
            className={`flex gap-2 items-center cursor-pointer pl-[3.2rem] pr-[2rem]  ${
              activeTab === "/admin/opportunities" &&
              "bg-BrandPrimary  rounded-r-[2rem]"
            }`}
          >
            {collapsed ? (
              <div className=" pr-[2rem] py-[1rem]">
                <BiEditAlt
                  size={18}
                  color={`${
                    activeTab === "/admin/opportunities" ? "#fff" : "#000"
                  } `}
                />
              </div>
            ) : (
              <div
                className={`flex gap-2 items-center cursor-pointer  py-[1rem] ${
                  activeTab === "/admin/opportunities" &&
                  "bg-BrandPrimary  rounded-r-[2rem]"
                }`}
              >
                {" "}
                <BiEditAlt
                  size={18}
                  color={`${
                    activeTab === "/admin/opportunities" ? "#fff" : "#000"
                  } `}
                />
                <h2
                  className={`${
                    activeTab === "/admin/opportunities"
                      ? "text-[#fff]"
                      : "text-[#000]"
                  } text-[1.6rem] font-bold `}
                >
                  Opportunities
                </h2>
              </div>
            )}
          </Link>

          {/* Complaints */}
          <Link
            to="/admin/complaints"
            className={`flex gap-2 items-center cursor-pointer pl-[3.2rem] pr-[2rem]  ${
              activeTab === "/admin/complaints" &&
              "bg-BrandPrimary  rounded-r-[2rem]"
            }`}
          >
            {collapsed ? (
              <div className=" pr-[2rem] py-[1rem]">
                <SlShield
                  size={18}
                  color={`${
                    activeTab === "/admin/complaints" ? "#fff" : "#000"
                  } `}
                />
              </div>
            ) : (
              <div
                className={`flex gap-2 items-center cursor-pointer  py-[1rem] ${
                  activeTab === "/admin/complaints" &&
                  "bg-BrandPrimary  rounded-r-[2rem]"
                }`}
              >
                {" "}
                <SlShield
                  size={18}
                  color={`${
                    activeTab === "/admin/complaints" ? "#fff" : "#000"
                  } `}
                />
                <h2
                  className={`${
                    activeTab === "/admin/complaints"
                      ? "text-[#fff]"
                      : "text-[#000]"
                  } text-[1.6rem] font-bold `}
                >
                  Complaints
                </h2>
              </div>
            )}
          </Link>

          {/* BroadCast */}
          <Link
            to="/admin/broadcast"
            className={`flex gap-2 items-center cursor-pointer pl-[3.2rem] pr-[2rem]  ${
              activeTab === "/admin/broadcast" &&
              "bg-BrandPrimary  rounded-r-[2rem]"
            }`}
          >
            {collapsed ? (
              <div className=" pr-[2rem] py-[1rem]">
                <BsBroadcastPin
                  size={18}
                  color={`${
                    activeTab === "/admin/broadcast" ? "#fff" : "#000"
                  } `}
                />
              </div>
            ) : (
              <div
                className={`flex gap-2 items-center cursor-pointer  py-[1rem] ${
                  activeTab === "/admin/broadcast" &&
                  "bg-BrandPrimary  rounded-r-[2rem]"
                }`}
              >
                {" "}
                <BsBroadcastPin
                  size={18}
                  color={`${
                    activeTab === "/admin/broadcast" ? "#fff" : "#000"
                  } `}
                />
                <h2
                  className={`${
                    activeTab === "/admin/broadcast"
                      ? "text-[#fff]"
                      : "text-[#000]"
                  } text-[1.6rem] font-bold `}
                >
                  BroadCast
                </h2>
              </div>
            )}
          </Link>
        </div>
      </div>

      {/* log out */}
      <div
        className={`cursor-pointer flex gap-2 items-center pl-[3.2rem] pr-[2rem]`}
        onClick={logOutHandler}
      >
        {collapsed ? (
          <BiLogOut size={18} color="#000" />
        ) : (
          <div className={`cursor-pointer flex gap-2 items-center  py-[1rem]`}>
            {" "}
            <BiLogOut size={18} color="#000" />
            <h2 className="text-[1.6rem]  font-semibold text-[#000]">Logout</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default SideBar;
