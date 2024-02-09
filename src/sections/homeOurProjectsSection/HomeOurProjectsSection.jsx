import NavigationBtn from "@/components/Buttons/NavigationBtn/NavigationBtn";
import styles from "./HomeOurProjectsSection.module.scss";


const HomeOurProjectsSection = () => {
  return <section className={styles.container}>
    <div className="container">
      <h1 className={styles.title}>Our <span className="titleGradient">projects</span>
      </h1>
      <div className={styles.contentWrapper}>
        <div className={styles.slider}>Slider</div>
        <NavigationBtn title="To portfolio" href={"/ourProjects"} className={styles.toPortfolioBtn} />
      </div>
    </div>
  </section>;
};

export default HomeOurProjectsSection;
