// import { useSignupMutation } from "@api/features/auth.api";
// import cover from "@assets/images/AuthSection/authCover.svg";
// import AuthBtn from "@components/commons/buttons/AuthBtn";
// import H2Heading from "@components/commons/headings/H2Heading";
// import H3Heading from "@components/commons/headings/H3Heading";
// import { Checkbox, Form, Input, message } from "antd";
// import { Link, useNavigate } from "react-router-dom";
// import AuthHeader from "./components/AuthHeader";

// type FieldType = {
//   firstName?: string;
//   lastName?: string;
//   email?: string;
//   password?: string;
//   termsAccepted?: boolean;
// };

// const Register = () => {
//   const navigate = useNavigate();

//   const [signup, { isLoading: signupLoading }] = useSignupMutation();

//   const onFinish = async (values: FieldType) => {
//     try {
//       await signup(values).unwrap();

//       navigate("/verify-email", { replace: true });
      
//     } catch (error: any) {
//       message.error(error?.data.message);
//       console.error(error);
//     }
//   };

//   return (
//     <div className="md:flex">
//       <div className="w-full lg:w-[50%] bg-BrandAuth h-screen">
//         <AuthHeader />

//         <div className="md:flex flex-col justify-center items-center md:h-[calc(100%-120px)] mt-[4.6rem] md:mt-0">
//           <div className="w-full md:w-[36.7rem] mx-auto px-8 md:px-0">
//             <div className="text-center lg:text-left">
//               <H2Heading title="Create Account" />
//             </div>

//             <Form layout="vertical" onFinish={onFinish} autoComplete="off">
//               <div className="flex flex-col md:flex-row items-center justify-between gap-[0.8rem]">
//                 <Form.Item<FieldType>
//                   label="First name"
//                   name="firstName"
//                   rules={[
//                     { required: true, message: "Please input your firstname!" },
//                   ]}
//                   className="w-full"
//                 >
//                   <Input className="p-2" />
//                 </Form.Item>

//                 <Form.Item<FieldType>
//                   label="Last name"
//                   name="lastName"
//                   rules={[
//                     { required: true, message: "Please input your lastname!" },
//                   ]}
//                   className="w-full"
//                 >
//                   <Input className="p-2" />
//                 </Form.Item>
//               </div>

//               <Form.Item<FieldType>
//                 label="Email"
//                 name="email"
//                 rules={[
//                   { required: true, message: "Please input your email!" },
//                 ]}
//               >
//                 <Input className="p-2" />
//               </Form.Item>

//               <Form.Item<FieldType>
//                 label="Password"
//                 name="password"
//                 rules={[
//                   { required: true, message: "Please input your password!" },
//                 ]}
//               >
//                 <Input.Password className="p-2" />
//               </Form.Item>

//               <Form.Item<FieldType>
//                 valuePropName="checked"
//                 name="termsAccepted"
//                 rules={[
//                   {
//                     required: true,
//                     message: "Kindly read and accept our terms and conditions.",
//                   },
//                 ]}
//               >
//                 <Checkbox>
//                   <>
//                     {"I agree to the"}{" "}
//                     <span className="text-BrandPrimary cursor-pointer">
//                       <Link to="">Terms & Conditions</Link>
//                     </span>
//                     <span className="text-BrandPrimary  cursor-pointer">
//                       <Link to="">
//                         <span className="text-BrandGray700 px-1">and</span>
//                         Privacy policy
//                       </Link>
//                     </span>
//                   </>
//                 </Checkbox>
//               </Form.Item>

//               <Form.Item>
//                 <AuthBtn isLoading={signupLoading}>Submit</AuthBtn>
//               </Form.Item>
//             </Form>

//             <p className="text-[1.4rem] md:text-[1.6rem] pb-[3.2rem]">
//               Already have an account?
//               <span className="text-BrandPrimary hover:underline cursor-pointer">
//                 <Link to="/signin"> Sign in here</Link>
//               </span>
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* right side */}
//       <div
//         className="hidden h-screen lg:w-[50%] lg:flex md:justify-center items-end"
//         style={{
//           background: `url(${cover}) no-repeat center`,
//         }}
//       >
//         <div className="text-white text-center px-20 pb-20">
//           <H3Heading title="Join the largest  community of other Scholars like you" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;


const Register = () => {
  return (
    <div>Register</div>
  )
}

export default Register