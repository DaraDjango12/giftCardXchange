import React from 'react';
import { HeadingTextProps } from './H2Heading';

const H3Heading: React.FC<HeadingTextProps> = ({ title }) => {
  return (
    <h3 className="text-[2.4rem] md:text-[4rem] font-bold leading-[5.2rem]">
      {title}
    </h3>
  );
};

export default H3Heading;