import H3Heading from "@components/commons/headings/H3Heading";
import SectionLayout from "@layouts/SectionLayout";
import Marquee from "react-fast-marquee";
import { partners } from "./partners";
import PartnerCard from "./PartnerCard";

const TrustedPartners = () => {
  return (
    <SectionLayout>
      <div className="mb-[3.2rem]">
        <div className="text-center my-[3.2rem]">
          <H3Heading title="Trusted by Leading Universities & Companies" />
        </div>

        <Marquee>
          {partners.map((partner) => (
            <PartnerCard className="" key={partner.id} partner={partner}/>
          ))}
        </Marquee>
      </div>
    </SectionLayout>
  );
};

export default TrustedPartners;
