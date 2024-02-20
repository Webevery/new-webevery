"use client"
import NavigationBtn from "@/components/Buttons/NavigationBtn/NavigationBtn";
import styles from "./HomeOurProjectsSection.module.scss";
import HomeOurProjectsSlider from "@/components/HomeOurProjectsSlider/HomeOurProjectsSlider";
import { GetDataFromSection, GetOurProjects } from "@/fetch/ClientFetch";


const HomeOurProjectsSection = () => {
  // const { data, error, isLoading } = GetOurProjects();
  const { data, error, isLoading } = GetDataFromSection('ourProjects')
  // console.log('data', data)

  return <section className={styles.container}>
    <div className="container">
      <h1 className={styles.title}>Our <span className="titleGradient">projects</span>
      </h1>
      <div className={styles.contentWrapper}>
        <HomeOurProjectsSlider data={data} />

        <NavigationBtn title="To portfolio" href={"/ourProjects"} className={styles.toPortfolioBtn} />
      </div>
    </div>
  </section>;
};

export default HomeOurProjectsSection;
