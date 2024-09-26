import React from "react";

interface TabsProps {
  buttonText: string;
  color?: string;
  bg?: string;
  w?: string;
  py?: string;
  size?: string;
  px?: string;
  onClick?: () => void;
}

const Tabs: React.FC<TabsProps> = ({
  buttonText,
  color = "white",
  bg = "BrandPrimary",
  w,
  py = "4",
  px = "8",
  size,
  onClick 
}) => {

  
  return (
    <div
    onClick={onClick}
      className={`px-${px} py-${py} bg-${bg}  text-${color} rounded-[6px] cursor-pointer md:w-[${w}]`}
    >
      <p className={`text-[${size}]`}>{buttonText}</p>
    </div>
  );
};

export default Tabs;
