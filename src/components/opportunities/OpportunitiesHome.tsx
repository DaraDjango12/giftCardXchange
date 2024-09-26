import SectionLayout from "@layouts/SectionLayout";
import H3Heading from "../commons/headings/H3Heading";
import OpportunityCardSm from "./OpportunityCardSm";
import { opportunities } from "./opportunities";
import SecondaryBtn from "@components/commons/buttons/SecondaryBtn";
import { Link } from "react-router-dom";

const OpportunitiesHome = () => {
  return (
    <SectionLayout>
      <div className="text-center md:text-left mb-[3.6rem] mt-[10rem]">
        <H3Heading title="Top Opportunities" />
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.6rem]">
        {opportunities.slice(0, 6).map((opportunity) => {
          return (
            <OpportunityCardSm key={opportunity.id} opportunity={opportunity} />
          );
        })}
      </div>
      <div className="flex justify-evenly items-center mt-[1.6rem] md:mb-[10rem]">
        <span className="h-[1px] border w-[30%] border-BrandPrimary border-dashed"></span>
        <SecondaryBtn>
          <Link to="/opportunities">See More</Link>
        </SecondaryBtn>
        <span className="h-[1px] border w-[30%] border-BrandPrimary border-dashed"></span>
      </div>
    </SectionLayout>
  );
};

export default OpportunitiesHome;
