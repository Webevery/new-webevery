import NavigationBtn from "@/components/Buttons/NavigationBtn/NavigationBtn";
import styles from "./HomeOurProjectsSection.module.scss";
import HomeOurProjectsSlider from "@/components/HomeOurProjectsSlider/HomeOurProjectsSlider";
import { getOurProjects } from "@/lib/data";

// const getData = async () => {
//   const res = await fetch("http://localhost:3000/api/ourProjects")
//   if (!res.ok) {
//     throw new Error('Something went wrong.')
//   }
//   return res.json()
// }


const HomeOurProjectsSection = async () => {
  const data = await getOurProjects();

  // const data = await getData();
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
