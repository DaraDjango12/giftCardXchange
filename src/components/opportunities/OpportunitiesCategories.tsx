const OpportunitiesCategories = () => {
  return (
    <div className="lg:block p-[2.4rem] border border-BrandGray300 bg-white rounded-md">
      <h2 className="text-BrandGray900 text-[2rem] font-extrabold  pb-[1.6rem]">
        Categories
      </h2>

      <ul className="text-[1.4rem] flex flex-col gap-[0.8rem] font-semibold">
        <li className="cursor-pointer">
          <span className="text-BrandPrimary">All Topics</span>
          <span className="text-BrandPrimary">(48)</span>
        </li>
        <li className="cursor-pointer">
          <span className="text-BrandGray800 hover:text-BrandPrimary">
            Travel
          </span>{" "}
          <span className="text-BrandGray600">(8)</span>
        </li>
        <li className="cursor-pointer">
          <span className="text-BrandGray800 hover:text-BrandPrimary">
            Admssion
          </span>{" "}
          <span className="text-BrandGray600">(5)</span>
        </li>
        <li className="cursor-pointer">
          <span className="text-BrandGray800 hover:text-BrandPrimary">
            Visa
          </span>{" "}
          <span className="text-BrandGray600">(10)</span>
        </li>
        <li className="cursor-pointer">
          <span className="text-BrandGray800 hover:text-BrandPrimary">
            Loan
          </span>{" "}
          <span className="text-BrandGray600">(9)</span>
        </li>
        <li className="cursor-pointer">
          <span className="text-BrandGray800 hover:text-BrandPrimary">
            Scholarship
          </span>{" "}
          <span className="text-BrandGray600">(4)</span>
        </li>
        <li className="cursor-pointer">
          <span className="text-BrandGray800 hover:text-BrandPrimary">
            Accommodation
          </span>{" "}
          <span className="text-BrandGray600">(3)</span>
        </li>
        <li className="cursor-pointer">
          <span className="text-BrandGray800 hover:text-BrandPrimary">
            Immigration
          </span>{" "}
          <span className="text-BrandGray600">(3)</span>
        </li>
      </ul>
    </div>
  );
};

export default OpportunitiesCategories;
