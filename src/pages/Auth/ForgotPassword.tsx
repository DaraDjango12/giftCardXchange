// import { useForgotPasswordMutation } from "@api/features/auth.api";
// import cover from "@assets/images/AuthSection/authCover.svg";
// import AuthBtn from "@components/commons/buttons/AuthBtn";
// import H2Heading from "@components/commons/headings/H2Heading";
// import H3Heading from "@components/commons/headings/H3Heading";
// import { Form, Input, message } from "antd";
// import { Link, useNavigate } from "react-router-dom";
// import AuthHeader from "./components/AuthHeader";

// type FieldType = {
//   email?: string;
// };

// const ForgotPassword = () => {
//   const [forgotPassword, { isLoading }] = useForgotPasswordMutation();
//   const navigate = useNavigate();

//   const onFinish = async (values: { email: string }) => {
//     try {
//       await forgotPassword({ ...values }).unwrap();
//       navigate("/forgot-password-success");
//     } catch (error: any) {
//       error.data.message && message.error(error.data.message);
//     }
//   };
//   return (
//     <div className="md:flex h-screen">
//       <div className="w-full lg:w-[50%] bg-BrandAuth px-10 h-screen">
//         <AuthHeader />
//         <div className="flex flex-col justify-center w-full pt-60 md:pt-40  lg:pt-[10rem] px-auto md:px-48">
//           <div className="text-center">
//             <H2Heading title="Forgot Password" />
//           </div>
//           <p className="text-center font-light  md: lg:text-[1.8rem] text-BrandGray700 py-5">
//             Enter your email. A password reset email will be sent to you
//             shortly.
//           </p>
//           <Form layout="vertical" onFinish={onFinish} autoComplete="off">
//             <Form.Item<FieldType>
//               label="Email"
//               name="email"
//               rules={[{ required: true, message: "Please input your email!" }]}
//             >
//               <Input className="p-3" />
//             </Form.Item>

//             <Form.Item>
//               <AuthBtn isLoading={isLoading}>Send Email</AuthBtn>
//             </Form.Item>
//           </Form>
//           <div className="text-BrandPrimary hover:underline text-center font-light">
//             <Link to="/signin">Back To Login</Link>
//           </div>
//         </div>
//       </div>

//       {/* right side */}
//       <div
//         className="hidden lg:w-[50%] lg:flex md:justify-center items-end"
//         style={{
//           background: `url(${cover})`,
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//           objectFit: "contain",
//         }}
//       >
//         <div className="text-white text-center px-20 mb-20">
//           <H3Heading title="Join the largest  community of other Scholars like you" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ForgotPassword;


const ForgotPassword = () => {
  return (
    <div>ForgotPassword</div>
  )
}

export default ForgotPassword