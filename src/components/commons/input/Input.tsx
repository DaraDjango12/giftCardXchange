import React from "react";

interface InputWithIconProps {
  icon: string;
  iconPosition?: "left" | "right";
  placeholder: string;
}

const Input: React.FC<InputWithIconProps> = ({
  icon,
  iconPosition = "left",
  placeholder,
}) => {
  return (
    <div className="flex space-x-3 items-center border  px-[1.9rem] py-[1.3rem] rounded-[0.8rem] shadow-md shadow-BrandBg w-full">
      {iconPosition === "left" && <img src={icon} alt="Icon" className="h-7" />}
      <input
        type="text"
        className="text-[#000] text-[1.4rem] outline-none w-[100%]"
        placeholder={placeholder}
      />
      {iconPosition === "right" && (
        <img src={icon} alt="Icon" className="h-7" />
      )}
    </div>
  );
};

export default Input;
