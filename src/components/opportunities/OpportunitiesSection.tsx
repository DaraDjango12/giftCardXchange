import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import CreateOpportunityBtn from "./CreateOpportunityBtn";
import OpportunitiesCategories from "./OpportunitiesCategories";
import OpportunitiesSideBar from "./OpportunitiesSideBar";
import OpportunityCardLg from "./OpportunityCardLg";
import OpportunityContent from "./OpportunityContent";
import { opportunities } from "./opportunities";
import { FaArrowDown } from "react-icons/fa";


const OpportunitiesSection = () => {
  const navigate = useNavigate();
  return (
    <main className="my-[5rem] md:mb-[10rem] flex flex-col md:flex-row justify-between">
      <div className="flex justify-end md:hidden">
        <CreateOpportunityBtn />
      </div>
      <div className="md:hidden">
        <OpportunitiesCategories />
      </div>

      <section className="md:w-[71rem] lg:w-[85rem]">
        {opportunities.map((opportunity, index) => {
          if (index % 2 === 0) {
            return (
              <OpportunityCardLg
                key={opportunity.id}
                opportunity={opportunity}
                charsNum={200}
                onClickFxn={() =>
                  navigate(`/schollar/opportunities/${opportunity.id}`)
                }
              />
            );
          } else {
            return (
              <div className="bg-BrandGray100 rounded-2xl shadow-md cursor-pointer">
                <OpportunityContent
                  key={opportunity.id}
                  opportunity={opportunity}
                  charsNum={200}
                  onClickFxn={() =>
                    navigate(`/schollar/opportunities/${opportunity.id}`)
                  }
                />
              </div>
            );
          }
        })}
        <div className="pt-8">
          <Link to='/signin'>
            <button className="py-2 flex items-center justify-center border border-BrandGray600 text-BrandPrimary w-full rounded-lg">
              <p className="flex space-x-3 items-center text-3xl">
                  <FaArrowDown className="text-lg md:text-3xl"/>
                <span className="text-lg md:text-3xl">See more</span>
              </p>
            </button>
          </Link>
        </div>
      </section>
      <OpportunitiesSideBar />
    </main>
  );
};

export default OpportunitiesSection;
