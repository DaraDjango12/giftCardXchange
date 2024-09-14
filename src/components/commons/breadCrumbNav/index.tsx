import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { PiHouse } from "react-icons/pi";
import { Link } from "react-router-dom";

export interface BreadProps {
  page: string;
}
const BreadCrumbNav: React.FC<BreadProps> = ({ page }) => {
  return (
    <div className="hidden md:block mt-[4.6rem] mb-[3.2rem]">
      <div className="flex items-center text-[0.4rem]">
        <Link
          to="/"
          className="flex items-center gap-[4px] my-2 cursor-pointer"
        >
          <PiHouse />
          <span className="hover:text-BrandPrimary">Home</span>
          <MdKeyboardDoubleArrowRight />
        </Link>{" "}
        <span className="text-BrandPrimary cursor-pointer">{page}</span>
      </div>
    </div>
  );
};

export default BreadCrumbNav;
