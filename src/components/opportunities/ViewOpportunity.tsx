import { opportunity } from "@constants/index.types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { opportunities } from "./opportunities";
import H4Heading from "@components/commons/headings/H4Heading";
import { Button, Dropdown, Image, MenuProps, Modal } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";

const ViewOpportunity = () => {
  const { id } = useParams();
  const role = "schollar";
  const [opportunity, setOpportunity] = useState<opportunity>();
  const [openApprove, setOpenApprove] = useState(false);
  const [openReject, setOpenReject] = useState(false);

  useEffect(() => {
    const currentOpportunity = opportunities.find(
      (opportunity) => opportunity.id === id
    );
    setOpportunity(currentOpportunity);
  }, [id]);

  const handleApprovalModal = () => {
    setOpenApprove(true);
    setOpenReject(false);
  };
  const handleRejectModal = () => {
    setOpenReject(true);
    setOpenApprove(false);
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <p onClick={handleApprovalModal}>Approve</p>,
    },
    {
      key: "2",
      label: <p onClick={handleRejectModal}>Reject</p>,
    },
  ];

  const approveOpportunity = () => {
    console.log("approved");
  };
  const rejectOpportunity = () => {
    console.log("rejected");
  };
  return (
    <div className="md:px-[1.4rem]">
      <div className="py-5">
        <div>
          <h1 className="font-bold text-lg md:text-4xl pt-3">
            {opportunity?.title}
          </h1>
        </div>
      </div>
      <div>
        <div className="flex justify-center my-2">
          <Image
            src={opportunity?.faetureImg}
            alt="featured image"
            className="w-[50rem] h-[50rem]"
            style={{ borderRadius: "10px" }}
          />
        </div>

        <div className="flex flex-col-reverse md:flex-row justify-between gap-10 py-6">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <img
                src={opportunity?.author.profilePic}
                alt=""
                className="rounded-full w-[4rem]"
              />
              <p className="text- font-bold border-r pr-2">
                {opportunity?.author.firstName} {opportunity?.author.lastName}
              </p>
            </div>

            <span className="text-BrandPrimary font-ManropeMedium px-2  bg-indigo-100 rounded">
              {opportunity?.tag}
            </span>

            <p className="text-BrandGray700 font-ManropeLight border-l pl-2">
              {opportunity?.createdAt}
            </p>
          </div>
          <div>
          {role === "schollar" && (
            <Dropdown menu={{ items }} trigger={["click"]}>
              <Button
                type="primary"
                className="bg-BrandPrimary flex items-center"
              >
                Review Opportunity <CaretDownOutlined />
              </Button>
            </Dropdown>
          )}
         </div>
        </div>
      </div>
      <div className="py-5">
        <div className="flex flex-col gap-2 py-8">
          <H4Heading title="Description" />
          <div className="w-[80%] md:w-[28%] h-[5px] bg-BrandPrimary bg-opacity-100 rounded"></div>
          <p className="py-4">{opportunity?.desc}</p>
        </div>
        <div className="flex flex-col gap-2 py-8">
          <H4Heading title="Funded" />
          <div className="w-[80%] md:w-[28%] h-[5px] bg-BrandPrimary bg-opacity-100 rounded"></div>
          <p className="text-[1.2rem] md:text-[1.4rem]">
            {opportunity?.funded}
          </p>
        </div>
        <div className="flex flex-col gap-2 py-8">
          <H4Heading title="Benefits" />
          <div className="w-[80%] md:w-[28%] h-[5px] bg-BrandPrimary bg-opacity-100 rounded"></div>
          <p className="text-[1.2rem] md:text-[1.4rem]">
            {opportunity?.benefit}
          </p>
        </div>
        <div className="flex flex-col gap-2 py-8">
          <H4Heading title="Entry Requirements" />
          <div className="w-[80%] md:w-[28%] h-[5px] bg-BrandPrimary bg-opacity-100 rounded"></div>
          <p className="text-[1.2rem] md:text-[1.4rem]">
            {opportunity?.entryRequirements}
          </p>
        </div>
        <div className="flex flex-col gap-2 py-8">
          <H4Heading title="Document Requirements" />
          <div className="w-[80%] md:w-[28%] h-[5px] bg-BrandPrimary bg-opacity-100 rounded"></div>
          <p className="text-[1.2rem] md:text-[1.4rem]">
            {opportunity?.documentRequirements}
          </p>
        </div>
        <div className="flex flex-col gap-2 py-8">
          <H4Heading title="Eligibility Region " />
          <div className="w-[80%] md:w-[28%] h-[5px] bg-BrandPrimary bg-opacity-100 rounded"></div>
          <p className="text-[1.2rem] md:text-[1.4rem]">
            {opportunity?.eligibilityRegion}
          </p>
        </div>
        <div className="flex flex-col gap-2 py-8">
          <H4Heading title="How To Apply" />
          <div className="w-[80%] md:w-[28%] h-[5px] bg-BrandPrimary bg-opacity-100 rounded"></div>
          <p className="text-[1.2rem] md:text-[1.4rem]">
            {opportunity?.howToApply}
          </p>
        </div>
        <div className="flex flex-col gap-2 py-8">
          <H4Heading title="Deadline" />
          <div className="w-[80%] md:w-[28%] h-[5px] bg-BrandPrimary bg-opacity-100 rounded"></div>
          <p className="text-[1.2rem] md:text-[1.4rem]">
            {opportunity?.deadline}
          </p>
        </div>
      </div>

      {/* Modals */}
      <Modal
        title="Approve Opportunity"
        open={openApprove}
        onCancel={() => setOpenApprove(false)}
        onOk={approveOpportunity}
        okButtonProps={{ style: { backgroundColor: "blue" } }}
      >
        <p>Are you sure you want to Approve this Opportunity?</p>
      </Modal>
      <Modal
        title="Reject Opportunity"
        open={openReject}
        onCancel={() => setOpenReject(false)}
        onOk={rejectOpportunity}
        okButtonProps={{ style: { backgroundColor: "red" } }}
      >
        <p>Are you sure you want to Reject this Opportunity?</p>
      </Modal>
    </div>
  );
};

export default ViewOpportunity;
