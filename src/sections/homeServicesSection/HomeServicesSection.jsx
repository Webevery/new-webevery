import styles from "./HomeServicesSection.module.scss";

import { SliderOfServices } from "@/components/SliderOfServices/SliderOfServices";

const HomeServicesSection = () => {
  return <section className={styles.container}>
    <div className="container" >
      <h2 className={styles.title}>Послуги</h2> 
      <h3 className={styles.subTitleLaptop}>від малого до великого сайту</h3>
      <SliderOfServices/>
    </div>
  </section>;
};


export default HomeServicesSection;
