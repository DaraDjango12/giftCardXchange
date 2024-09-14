// import H4Heading from "@components/commons/headings/H4Heading";
// import { opportunity } from "@constants/index.types";
// import { contentTruncate, formatDate, tagDecoration } from "@utils/index";

// const OpportunityContent: React.FC<{
//   opportunity: opportunity;
//   onClickFxn: () => void;
//   charsNum: number;
// }> = ({ opportunity, onClickFxn, charsNum }) => {
//   return (
//     <div className="p-5">
//       <div>
//         <span
//           className={`text-[1.2rem] border py-1 px-2 rounded-md ${tagDecoration(
//             opportunity?.tag
//           )}`}
//         >
//           {opportunity?.tag}
//         </span>
//       </div>
//       <div className="py-[1.3rem]">
//         <H4Heading title={opportunity?.title} />
//       </div>
//       <div className="text-BrandGray700">
//         {contentTruncate(opportunity.content, charsNum)}
//         <span
//           className="text-BrandPrimary px-2 py-1 text-[1.2rem] hover:underline cursor-pointer"
//           onClick={onClickFxn}
//         >
//           See More
//         </span>
//       </div>

//       <div className="flex gap-5 items-center py-4">
//         <div className="flex gap-2 items-center">
//           <img
//             src={opportunity.author.profilePic || `/user-avatar.png`}
//             alt="author"
//             className="w-[40px] h-[40px] rounded-full"
//           />
//           <span>
//             {opportunity.author.firstName + " " + opportunity.author.lastName}
//           </span>
//         </div>
//         <div className=" text-BrandGray500 font-light">
//           <p
//             className={`font-ManropeRegular text-[1.2rem] text-BrandGray500 ${
//               opportunity.createdAt ? "border-r pr-2" : ""
//             }`}
//           >
//             {formatDate(opportunity.createdAt)}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OpportunityContent;


const OpportunityContent = () => {
  return (
    <div>OpportunityContent</div>
  )
}

export default OpportunityContent