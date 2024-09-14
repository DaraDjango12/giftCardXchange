import React, { useState } from "react";
import { FaLessThan } from "react-icons/fa6";
import { FaGreaterThan } from "react-icons/fa6";
import quote from "@assets/icons/quote.png";

interface CarouselProps {
  items: { text: string; profilePic: string; author: string; institution: string }[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentItem, setCurrentItem] = useState(0);

  const nextItem = () => {
    setCurrentItem((prev) => (prev + 1) % items.length);
  };

  const prevItem = () => {
    setCurrentItem((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <div className="p-[2rem]">
      <div className="flex justify-between mb-[2rem]">
        <div className="bg-BrandPrimary flex justify-center items-center p-[1rem] rounded-xl shadow-lg">
          <img src={quote} className=" text-red-800" />
        </div>
        <div className="flex justify-between gap-8">
          <span
            className="bg-white h-[3rem] w-[3rem] flex justify-center items-center rounded-full shadow-lg cursor-pointer"
            onClick={prevItem}
          >
            <FaLessThan className="size-4" />
          </span>
          <span
            className="bg-white h-[3rem] w-[3rem] flex justify-center items-center rounded-full shadow-lg cursor-pointer"
            onClick={nextItem}
          >
            <FaGreaterThan className="size-4" />
          </span>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div>
          <p className="text-[1.4rem] lg:text-[1.6rem]">
            {items[currentItem].text}
          </p>
          <div className="flex gap-[1.6rem] items-center mt-4">
          <img src={items[currentItem].profilePic} alt="profile pic" />
            <div>
            <p className=" text-[1.2rem] lg:text-[1.8rem]  text-BrandGray900">
            {items[currentItem].author}
          </p>
          <p
            className="font-[400] text-[#9397AD] text-[1.2rem] lg:text-[1.6rem]">
            {items[currentItem].institution}
          </p>
         </div>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
