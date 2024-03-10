import HomeHeroSection from "@/sections/homeHeroSection/HomeHeroSection";
import HomeTeamSection from "@/sections/homeTeamSection/HomeTeamSection";
import HomeOurProjectsSection from "@/sections/homeOurProjectsSection/HomeOurProjectsSection";
import HomeServicesSection from "@/sections/homeServicesSection/HomeServicesSection";
import HomeFaqSection from "@/sections/homeFaqSection/HomeFaqSection";
import HomeWorkingProcessSection from "@/sections/homeWorkingProcessSection/HomeWorkingProcessSection";
import HomeOrderSection from "@/sections/homeOrderSection/HomeOrderSection";

import styles from "./Home.module.scss";

const Home = () => {
    return (
        <div className='screen'>
            <HomeHeroSection />
            <HomeTeamSection />
            <HomeOurProjectsSection />
            <HomeServicesSection />
            <HomeFaqSection />
            <HomeWorkingProcessSection />
            <HomeOrderSection />
        </div>
    );
};

export default Home;
