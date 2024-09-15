import HeroSection from "@components/hero/HeroSection";
import MainLayout from "@layouts/MainLayout";
// import OpportunitiesHome from "@components/opportunities/OpportunitiesHome";
import TrustedPartnerCards from "@components/trustedPartners/TrustedPartnerCards";
// import Slider from "@components/commons/slider";

const Home = () => {
  return (
    <MainLayout >
      <HeroSection />
      {/* <Slider/> */}

      {/* <OpportunitiesHome /> */}

      <TrustedPartnerCards />
      {/* <FAQ />
      <CallToAction /> */}

      
    </MainLayout>
  );
};

export default Home;
