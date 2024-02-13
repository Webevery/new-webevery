import styles from "./ServicesSection.module.scss";

import { SliderOfServices } from "@/components/SliderOfServices/SliderOfServices";

const ServicesSection = () => {
  return <section className={styles.container}>
    <div className="container" >
      <h2 className={styles.title}>Послуги</h2>
      <h3 className={styles.subTitleLaptop}>від малого до великого сайту</h3>
      <SliderOfServices />
    </div>
  </section>;
};

export default ServicesSection;
