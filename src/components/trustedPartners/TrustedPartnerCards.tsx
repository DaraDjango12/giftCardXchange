import SectionLayout from "@layouts/SectionLayout";
import Marquee from "react-fast-marquee";
import { giftcards } from "./giftcards";
import PartnerCard from "./PartnerCard";

const TrustedPartnerCards = () => {
  return (
    <SectionLayout>
      <div className="mb-[3.2rem]">
        <div className="text-center my-[0.2rem]">
          {/* <H3Heading title="Trusted by Leading Universities & Companies" /> */}
        </div>

        <Marquee className="max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg">
          {giftcards.map((partner) => (
            <PartnerCard className="" key={partner.id} partner={partner} />
          ))}
        </Marquee>
      </div>
    </SectionLayout>
  );
};

export default TrustedPartnerCards;
