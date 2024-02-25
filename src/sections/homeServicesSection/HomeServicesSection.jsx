import NavigationBtn from "@/components/Buttons/NavigationBtn/NavigationBtn";
import styles from "./HomeServicesSection.module.scss";

import { SliderOfServices } from "@/components/SliderOfServices/SliderOfServices";

const HomeServicesSection = () => {
  return <section className={styles.container}>
    <div className="container">
      <h2 className={styles.title}>Послуги</h2> 
      <h3 className={`titleGradient ${styles.subTitleLaptop}`}>від малого до великого сайту</h3>
      <div className={styles.btnNavContainer}>
      <NavigationBtn 
      title='Детальніше'/></div>
      <SliderOfServices/>
    </div>
  </section>;
};


export default HomeServicesSection;
