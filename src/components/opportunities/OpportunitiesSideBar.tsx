import FollowUs from "@components/SideBarCards/FollowUs";
import RecentPosts from "@components/SideBarCards/RecentPosts";
import OpportunitiesCategories from "./OpportunitiesCategories";
import CreateOpportunityBtn from "./CreateOpportunityBtn";
import AdsBanner from "@components/SideBarCards/AdsBanner";

const OpportunitiesSideBar = () => {
  return (
    <div className="w-[28rem] hidden lg:block">
      <CreateOpportunityBtn />
      <OpportunitiesCategories />
      <RecentPosts />
      <FollowUs />
      <AdsBanner />
    </div>
  );
};

export default OpportunitiesSideBar;
