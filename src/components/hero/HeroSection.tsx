
import HeroLarge from "@assets/images/HeroSection/HeroImage.svg";
import SectionLayout from "@layouts/SectionLayout";
import user from "@assets/images/userr.svg";
import PrimaryBtn from "@components/commons/buttons/PrimaryBtn";
import { Link } from "react-router-dom";


const HeroSection = () => {
  return (
    <main className="w-full bg-BrandBg py-[1.6rem]">
      <SectionLayout>
        <div className="flex justify-between items-center">
          <div className="w-full ">
            <h1 className="font-bold mx-0 text-[2.4rem] lg:text-[4.6rem]">
              Get Paid for Your 
            </h1>
            <h1 className="font-bold mx-0 text-[2.4rem] lg:text-[4.6rem]">
               Gift Cards in 5 Minutes!
            </h1>

            <div className="block h-[18.2rem] mx-auto bg-slate-950 md:hidden">
              <img
                src={HeroLarge}
                alt="connecting"
                className="w-[100%] h-[100%] py-3"
              />
            </div>

            <p className="md:text-[1.8rem] text-BrandGray700 py-3">
              Experience the fastest way to turn your gift cards into cash,
              selling with confidence and receiving your payments instantly.
            </p>
            <div>
              <Link to="/register">
                <PrimaryBtn>
                  <p className="flex space-x-3 items-center">
                    <span>
                      <img src={user} alt="" />
                    </span>
                    <span> Join now</span>
                  </p>
                </PrimaryBtn>
              </Link>
            </div>
          </div>

          <div className="hidden md:block lg:h-[39.8rem] lg:w-[37.9rem]">
            <img
              src={HeroLarge}
              alt="connecting"
              width={"100%"}
              height={"100%"}
            />
          </div>
        </div>
      </SectionLayout>
    </main>
  );
};

export default HeroSection;
