import styles from "./Home.module.scss";
import HomeFaqSection from "@/sections/homeFaqSection/HomeFaqSection";
import HomeHeroSection from "@/sections/homeHeroSection/HomeHeroSection";
import HomeOrderSection from "@/sections/homeOrderSection/HomeOrderSection";
import HomeOurProjectsSection from "@/sections/homeOurProjectsSection/HomeOurProjectsSection";
// import HomeServicesSection from "@/sections/homeServicesSection/HomeServicesSection";
import HomeTeamSection from "@/sections/homeTeamSection/HomeTeamSection";
import HomeWorkingProcessSection from "@/sections/homeWorkingProcessSection/HomeWorkingProcessSection";
import ServicesSection from "@/sections/servicesSection/ServicesSection";

const Home = () => {
  return (
    <div className="screen">
      <HomeHeroSection />
      <HomeTeamSection />
      <HomeOurProjectsSection />
      {/* <HomeServicesSection /> */}
      <ServicesSection />
      <HomeFaqSection />
      <HomeWorkingProcessSection />
      <HomeOrderSection />
    </div>
  )
}

export default Home;
