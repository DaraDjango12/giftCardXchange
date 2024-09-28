import cover from "@assets/images/AuthSection/authCover.svg";
import AuthBtn from "@components/commons/buttons/AuthBtn";
import H2Heading from "@components/commons/headings/H2Heading";
import H3Heading from "@components/commons/headings/H3Heading";
import AuthHeader from "./AuthHeader";

const EmailVerification = () => {
  return (
    <div className="md:flex h-screen">
      <div className="w-full lg:w-[50%] h-screen bg-BrandAuth px-10 ">
        <AuthHeader />
        <div className="flex flex-col justify-center w-full pt-60 md:pt-[10rem] px-auto md:px-48">
          <div className="text-center">
            <H2Heading title="Email Verification" />
          </div>
          <p className="text-center font-light  md: lg:text-[1.8rem] text-BrandGray700 py-5">
            An email has been sent to your mail. Click on the link to verify
            your email.
          </p>
          <AuthBtn>Check email</AuthBtn>
          <p className="text-center font-light text-BrandGray700 py-5">
            Didn't receive any email?{" "}
            <span className="text-center font-light text-BrandPrimary py-5">
              Resend Verification link,
            </span>
          </p>
        </div>
      </div>
      {/* right side */}
      <div
        className="hidden h-screen lg:w-[50%] lg:flex md:justify-center items-end"
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

export default EmailVerification;
