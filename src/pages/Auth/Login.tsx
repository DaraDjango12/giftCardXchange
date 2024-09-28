import cover from "@assets/images/razorrightsignin.svg";
import AuthBtn from "@components/commons/buttons/AuthBtn";
import H2Heading from "@components/commons/headings/H2Heading";
import H3Heading from "@components/commons/headings/H3Heading";
import { Checkbox, Flex, Form, Image, Input } from "antd";
import { Link } from "react-router-dom";
import AuthHeader from "./components/AuthHeader";

type FieldType = {
  email: string;
  password: string;
};

const Login = () => {
  // const dispatch = useAppDispatch();
  // const navigate = useNavigate();
  // const [login, { isLoading: loginLoading }] = useLoginMutation();

  // const onFinish = async (values: FieldType) => {
  //   try {
  //     const res = await login(values).unwrap();
  //     dispatch(setCredentials({ ...res }));
  //     const { user } = res;
  //     if (user.role === "ADMIN") {
  //       navigate("/admin");
  //     } else {
  //       navigate("/schollar");
  //     }
  //     message.success("Login successful");
  //   } catch (error: any) {
  //     console.error(error);
  //     error.data.message && message.error(error.data.message);
  //   }
  // };

  return (
    <div className="md:flex">
      <div className="w-full lg:w-[50%] bg-BrandAuth h-screen">
        <AuthHeader />
        <div
          className="flex justify-center items-center"
          style={{ height: "calc(100%-50px)" }}
        >
          <div className="w-[36.7rem] mx-auto px-8 md:px-0 mt-[3.6rem] md:mt-0">
            <div className="text-center lg:text-left py-8">
              <H2Heading title="Sign in" />
            </div>
            <div className="mb-12">
              <p className="text-[1.4rem] md:text-[1.6rem]">
                Don't have an account?
                <span className="text-BrandPrimary hover:underline cursor-pointer">
                  <Link to="/register"> Create Now</Link>
                </span>
              </p>
            </div>

            <Form
              layout="vertical"
              //  onFinish={onFinish}
              autoComplete="off"
            >
              <Form.Item<FieldType>
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
              >
                <Input className="p-3" />
              </Form.Item>

              <Form.Item<FieldType>
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password className="p-3" />
              </Form.Item>

              <Flex className="justify-between">
                <Form.Item>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item className="flex justify-end">
                  <Link
                    to="/forget-password"
                    className="text-BrandPrimary text-[1.3rem] cursor-pointer font-semibold"
                  >
                    Forgot your password?
                  </Link>
                </Form.Item>
              </Flex>

              <Form.Item>
                <AuthBtn isLoading={true}>Sign in</AuthBtn>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>

      {/* right side */}
      <div className=" bg-BrandPrimary hidden lg:w-[50%] lg:flex lg:flex-col md:justify-center items-center mx-auto">
        <Image className="m-auto" src={cover} alt="okay" />

        <div className="text-white text-center px-20 mb-20">
          <H3Heading title="Trade gift cards easily and securely." />
        </div>
      </div>
    </div>
  );
};

export default Login;
