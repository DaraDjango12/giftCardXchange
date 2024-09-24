import { Link } from "react-router-dom";
import logo from "@assets/images/logo.svg"

const AuthHeader = () => {
  return (
    <div className="h-[4rem] lg:h-[7rem] md:px-5 lg:px-[10rem] py-4 bg-transparent">
      <Link to="/">
        <div className="px-8 md:px-0 flex gap-2 justify-start md:justify-normal items-center cursor-pointer">
          <span>
            <img src={logo} alt="Logo" />
          </span>
        </div>
      </Link>
    </div>
  );
};

export default AuthHeader;
