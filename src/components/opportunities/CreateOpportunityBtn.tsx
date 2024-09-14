import PostOpportunityModal from "@components/modals/OpportunitiesModal";
import { useState } from "react";
import { BiPlus } from "react-icons/bi";

const CreateOpportunityBtn = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="flex justify-start pb-[2.4rem]">
        <button
          className="flex items-center gap-1 p-[0.8rem] bg-BrandPrimary rounded-lg text-white"
          onClick={showModal}
        >
          <BiPlus size={16} /> Post Opportunity
        </button>
      </div>

      <PostOpportunityModal
        onCancel={handleCancel}
        visible={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </>
  );
};

export default CreateOpportunityBtn;
