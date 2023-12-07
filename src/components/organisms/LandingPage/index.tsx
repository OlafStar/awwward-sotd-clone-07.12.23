import Hero from "~/components/molecules/Hero";
import SolutionsSection from "~/components/molecules/SolutionsSection";

const LandingPage = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <SolutionsSection />
    </div>
  );
};

export default LandingPage;
