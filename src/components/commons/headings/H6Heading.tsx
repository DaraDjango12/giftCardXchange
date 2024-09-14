import { HeadingTextProps } from "./H2Heading";

const H6Heading: React.FC<HeadingTextProps> = ({ title }) => {
  return <h5 className="text-[1rem] md:text-[1.4rem] font-bold">{title}</h5>;
};

export default H6Heading;
