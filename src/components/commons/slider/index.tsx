import SectionLayout from "@layouts/SectionLayout";
import { ReactNode } from "react";
import Carousel from "./carousel";
import jennifer from "@assets/images/jennifer.svg"
import alex from "@assets/images/alex.svg"


const Slider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const carouselItems = [
    {
      text: "Schollarr has been my go-to platform for all things study abroad. The community support is unparalleled, and the expert guidance has been instrumental in shaping my study abroad journey. From connecting with mentors to accessing valuable resources, Schollarr has been my compass in the vast world of global education.",
      profilePic: jennifer,
      author: "Jennifer Osley",
      institution: "Oxford University, England.",
    },
    {
      text: "Since my undergraduate days, my dream was to study in the US. This dream looked like nothing but a fantasy. I was blessed when i found Schollarr, they helped me every step of the way. Now i am living my dream at Missouri University of Science and Technology, USA. Thanks to Schollarr.net2",
      profilePic: alex,
      author: "Alex Or",
      institution: "Missouri S&T, USA",
    },
    
  ];

  return (
    <SectionLayout>
      <div className="flex flex-col my-6 mb-6 shadow-lg md:flex-row w-[100%] justify-between items-center rounded-2xl">
        {children}
        <div className="text-[#565973] px-[2.4rem] w-[100%] md:w-[60%] font-400 text-[1.8rem] ">
          <Carousel items={carouselItems} />
        </div>
      </div>
    </SectionLayout>
  );
};

export default Slider;
