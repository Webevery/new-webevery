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
      {/* <h2 className={styles.title}>Our <span className="titleGradient">projects</span>
      </h2> */}
      <h2 className={styles.title}>Наші <span className="titleGradient">роботи</span>
      </h2>
      <div className={styles.contentWrapper}>
        <HomeOurProjectsSlider data={data} />

        {/* <NavigationBtn title="To portfolio" href={"/ourProjects"} className={styles.toPortfolioBtn} /> */}
        <NavigationBtn title="До портфоліо" href={"/ourProjects"} className={styles.toPortfolioBtn} />

      </div>
    </div>
  </section>;
};

export default HomeOurProjectsSection;
