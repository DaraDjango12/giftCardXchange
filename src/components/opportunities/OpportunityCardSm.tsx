import { opportunity } from "@constants/index.types";
import { Image } from "antd";
import OpportunityContent from "./OpportunityContent";

const OpportunityCardSm: React.FC<{ opportunity: opportunity }> = ({
  opportunity,
}) => {
  const seeMoreHandler = () => {
    console.log(opportunity);
  };

  return (
    <div className="w-[31.2rem] md:w-[35.9rem] mb-[1.6rem] hover:border border-BrandgrayDeep hover:shadow-md rounded-2xl cursor-pointer">
      <Image src={opportunity.faetureImg} className="h-[29rem] rounded-2xl"  />
      <div className="h-[28rem]">
        <OpportunityContent
          opportunity={opportunity}
          onClickFxn={seeMoreHandler}
          charsNum={85}
        />
      </div>
    </div>
  );
};

export default OpportunityCardSm;
