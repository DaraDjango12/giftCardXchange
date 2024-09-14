

import { partner } from "./partners";

const PartnerCard: React.FC<{ partner: partner, className: string }> = ({ partner, className }) => {
  return (
    <div className={`mx-[0.2rem] md:mx-[1.6rem] cursor-pointer ${className}`}>
      <img src={partner.logo} alt={partner.name} style={{ maxWidth: "120px", maxHeight: "120px" }} />
    </div>
  );
};

export default PartnerCard;
