import { logout } from "@api/data/authSlice";
import { useAppDispatch } from "@api/data/store";
import Logo from "@assets/images/logo.svg";
import CloseLogo from "@assets/logos/salama.png";
import React, { Dispatch, SetStateAction } from "react";
import { BiEditAlt, BiLogOut } from "react-icons/bi";
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
          className={`flex flex-col gap-[2rem] justify-center  ${
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
                  } text-[1.6rem] font-[600] `}
                >
                  Dashboard
                </h2>
              </div>
            )}
          </Link>

          {/* Rates */}
          <Link
            to="/admin/rates"
            className={`flex gap-2 items-center cursor-pointer pl-[3.2rem] pr-[2rem]  ${
              activeTab === "/admin/rates" &&
              "bg-BrandPrimary  rounded-r-[2rem]"
            }`}
          >
            {collapsed ? (
              <div className=" pr-[2rem] py-[1rem]">
                <IoMdInformationCircleOutline
                  size={18}
                  color={`${activeTab === "/admin/rates" ? "#fff" : "#000"} `}
                />
              </div>
            ) : (
              <div
                className={`flex gap-2 items-center cursor-pointer  py-[1rem] ${
                  activeTab === "/admin/rates" &&
                  "bg-BrandPrimary  rounded-r-[2rem]"
                }`}
              >
                {" "}
                <IoMdInformationCircleOutline
                  size={18}
                  color={`${activeTab === "/admin/rates" ? "#fff" : "#000"} `}
                />
                <h2
                  className={`${
                    activeTab === "/admin/rates" ? "text-[#fff]" : "text-[#000]"
                  } text-[1.6rem] font-[600] `}
                >
                  Gift Card Rates
                </h2>
              </div>
            )}
          </Link>

          {/* Expenses */}
          <Link
            to="/admin/expenses"
            className={`flex gap-2 items-center cursor-pointer pl-[3.2rem] pr-[2rem]  ${
              activeTab === "/admin/expenses" &&
              "bg-BrandPrimary  rounded-r-[2rem]"
            }`}
          >
            {collapsed ? (
              <div className=" pr-[2rem] py-[1rem]">
                <BiEditAlt
                  size={18}
                  color={`${
                    activeTab === "/admin/expenses" ? "#fff" : "#000"
                  } `}
                />
              </div>
            ) : (
              <div
                className={`flex gap-2 items-center cursor-pointer  py-[1rem] ${
                  activeTab === "/admin/expenses" &&
                  "bg-BrandPrimary  rounded-r-[2rem]"
                }`}
              >
                {" "}
                <BiEditAlt
                  size={18}
                  color={`${
                    activeTab === "/admin/expenses" ? "#fff" : "#000"
                  } `}
                />
                <h2
                  className={`${
                    activeTab === "/admin/expenses"
                      ? "text-[#fff]"
                      : "text-[#000]"
                  } text-[1.6rem] font-[600] `}
                >
                  All Expenses
                </h2>
              </div>
            )}
          </Link>

          {/* Request */}
          <Link
            to="/admin/request"
            className={`flex gap-2 items-center cursor-pointer pl-[3.2rem] pr-[2rem]  ${
              activeTab === "/admin/request" &&
              "bg-BrandPrimary  rounded-r-[2rem]"
            }`}
          >
            {collapsed ? (
              <div className=" pr-[2rem] py-[1rem]">
                <SlShield
                  size={18}
                  color={`${activeTab === "/admin/request" ? "#fff" : "#000"} `}
                />
              </div>
            ) : (
              <div
                className={`flex gap-2 items-center cursor-pointer  py-[1rem] ${
                  activeTab === "/admin/request" &&
                  "bg-BrandPrimary  rounded-r-[2rem]"
                }`}
              >
                {" "}
                <SlShield
                  size={18}
                  color={`${activeTab === "/admin/request" ? "#fff" : "#000"} `}
                />
                <h2
                  className={`${
                    activeTab === "/admin/request"
                      ? "text-[#fff]"
                      : "text-[#000]"
                  } text-[1.6rem] font-[600] `}
                >
                  Review Request
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
            <h2 className="text-[1.6rem]  font-semibold text-[#000]">
              Sign Out
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default SideBar;
