import { opportunity } from "@constants/index.types";
import OpportunityContent from "./OpportunityContent";

const OpportunityCardLg: React.FC<{
  opportunity: opportunity;
  charsNum: number;
  onClickFxn: () => void;
}> = ({ opportunity, charsNum, onClickFxn }) => {
  return (
    <div className="flex flex-col md:flex-row items-center">
      <img
        src={opportunity.faetureImg}
        alt={opportunity.title}
        className="w-[35rem] h-[25rem]"
        style={{ borderRadius: "8px" }}
      />
      <OpportunityContent
        opportunity={opportunity}
        charsNum={charsNum}
        onClickFxn={onClickFxn}
      />
    </div>
  );
};

export default OpportunityCardLg;
