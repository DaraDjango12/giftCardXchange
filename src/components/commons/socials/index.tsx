import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Socials: React.FC<{ className: string }> = ({ className }) => {
  return (
    <div className={`flex pt-5 ${className}`}>
      <Link
        to="/"
        className="p-1 md:p-2 cursor-pointer rounded-md border-[0.1rem] border-BrandGray600 hover:border-none hover:bg-BrandPrimary hover:text-white"
      >
        <FaFacebookSquare size="" />
      </Link>
      <Link
        to="/"
        className="p-1 md:p-2 cursor-pointer rounded-md border-[0.1rem] border-BrandGray600 hover:border-none hover:bg-BrandPrimary hover:text-white"
      >
        <FaTwitter size="" />
      </Link>
      <Link
        to="/"
        className="p-1 md:p-2 cursor-pointer rounded-md border-[0.1rem] border-BrandGray600 hover:border-none hover:bg-BrandPrimary hover:text-white"
      >
        <FaLinkedinIn />
      </Link>
      <Link
        to="/"
        className="p-1 md:p-2 cursor-pointer rounded-md border-[0.1rem] border-BrandGray600 hover:border-none hover:bg-BrandPrimary hover:text-white"
      >
        <FaInstagram />
      </Link>
    </div>
  );
};

export default Socials;
