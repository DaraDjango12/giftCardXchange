export interface HeadingTextProps {
  title: string;
}

const H2Heading: React.FC<HeadingTextProps> = ({ title }) => {
  return <h2 className="text-[2rem] lg:text-[4.2rem] font-extrabold">{title}</h2>;
};

export default H2Heading;
