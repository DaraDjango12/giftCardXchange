// import { Form, Input, message } from "antd";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import AuthBtn from "@components/commons/buttons/AuthBtn";
// import H3Heading from "@components/commons/headings/H3Heading";
// import cover from "@assets/images/AuthSection/authCover.svg";
// import H2Heading from "@components/commons/headings/H2Heading";
// import AuthHeader from "./components/AuthHeader";
// import { useResetPasswordMutation } from "@api/features/auth.api";

// const ResetPassword = () => {
//   const { token } = useParams();
//   const navigate = useNavigate();
//   const [resetPassword, { isLoading }] = useResetPasswordMutation();

//   const onFinish = async (values: {
//     password: string;
//     confirmPassword: string;
//   }) => {
//     try {
//       await resetPassword({ input: values, token }).unwrap();
//       message.success("Password changed successfully.");
//       navigate("/signin", { replace: true });
//     } catch (error: any) {
//       error.data.message && message.error(error.data.message);
//     }
//   };

//   return (
//     <div className="md:flex h-screen">
//       <div className="w-full lg:w-[50%] bg-BrandAuth px-10 h-screen">
//         <AuthHeader />
//         <div className="flex justify-center items-center">
//           <div className="flex flex-col justify-center w-full lg:w-[40rem]">
//             <div className="text-center">
//               <H2Heading title="Reset Password" />
//             </div>
//             <p className="text-center font-light  md: lg:text-[1.6rem] text-BrandGray700 py-5">
//               Enter a strong password that is 8 characters long with 1 capital
//               letter, 1 character, and 1 number.
//             </p>
//             <Form layout="vertical" onFinish={onFinish} autoComplete="off">
//               <Form.Item
//                 name="password"
//                 label="Password"
//                 rules={[
//                   {
//                     required: true,
//                     message: "Please input your password!",
//                   },
//                 ]}
//               >
//                 <Input.Password className="py-3" />
//               </Form.Item>

//               <Form.Item
//                 name="confirmPassword"
//                 label="Re-Type Password"
//                 dependencies={["password"]}
//                 hasFeedback
//                 rules={[
//                   {
//                     required: true,
//                     message: "Please confirm your password!",
//                   },
//                   ({ getFieldValue }) => ({
//                     validator(_, value) {
//                       if (!value || getFieldValue("password") === value) {
//                         return Promise.resolve();
//                       }
//                       return Promise.reject(
//                         new Error("The passwords do not match!")
//                       );
//                     },
//                   }),
//                 ]}
//               >
//                 <Input.Password className="py-3" />
//               </Form.Item>

//               <Form.Item>
//                 <AuthBtn isLoading={isLoading}>Reset Password</AuthBtn>
//               </Form.Item>
//             </Form>
//             <div className="text-BrandPrimary hover:underline text-center font-light">
//               <Link to="/signin">Back To Login</Link>
//             </div>
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
//           <H3Heading title="Join the largest community of other Scholars like you" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ResetPassword;


const ResetPassword = () => {
  return (
    <div>ResetPassword</div>
  )
}

export default ResetPassword