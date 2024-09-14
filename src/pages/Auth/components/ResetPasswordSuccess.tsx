import { Link } from "react-router-dom";
import H3Heading from "@components/commons/headings/H3Heading";
import cover from "@assets/images/AuthSection/authCover.svg";
import AuthHeader from "./AuthHeader";
import AuthBtn from "@components/commons/buttons/AuthBtn";
import H2Heading from "@components/commons/headings/H2Heading";
import greentick from "@assets/images/AuthSection/Greentick.svg";

const ResetPasswordSuccess = () => {
  return (
    <div className="md:flex h-screen ">
      <div className="w-full lg:w-[50%] bg-BrandAuth px-10">
        <AuthHeader />
        <div className=" w-full pt-28 md:pt-20  lg:pt-[2rem] px-auto md:px-44">
          <img src={greentick} alt="" className="mx-auto" />
          <div className="text-center">
            <H2Heading title="Password Updated" />
          </div>
          <p className="text-center font-light md: lg:text-[1.6rem] text-BrandGray700 py-5">
            You have successfully reset your password
          </p>

          <Link to="/signin">
            <AuthBtn>Login</AuthBtn>
          </Link>
        </div>
      </div>
      {/* right side */}
      <div
        className="hidden lg:w-[50%] lg:flex md:justify-center items-end"
        style={{
          background: `url(${cover}) no-repeat center`,
        }}
      >
        <div className="text-white text-center px-20 pb-20">
          <H3Heading title="Join the largest  community of other Scholars like you" />
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordSuccess;
