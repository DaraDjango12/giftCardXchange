import { HeadingTextProps } from "./H2Heading";

const H4Heading: React.FC<HeadingTextProps> = ({ title }) => {
  return <h4 className="text-[1.6rem] md:text-[2.4rem] font-bold">{title}</h4>;
};

export default H4Heading;
