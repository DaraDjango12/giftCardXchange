import { Button } from "antd";
import { ReactNode } from "react";

export interface BtnProps {
  children: ReactNode;
  isLoading?: boolean;
}
const AuthBtn: React.FC<BtnProps> = ({ children, isLoading }) => {
  return (
    <div>
      <Button
        loading={isLoading ? isLoading : false}
        type="primary"
        size="large"
        htmlType="submit"
        className="w-full text-center text-[1.6rem] shadow-lg text-white rounded-lg bg-BrandPrimary  shadow-violet-200 "
      >
        {children}{" "}
      </Button>
    </div>
  );
};

export default AuthBtn;
