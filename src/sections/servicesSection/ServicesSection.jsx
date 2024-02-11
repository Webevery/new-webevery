// import styles from "./ServicesSection.module.scss";

import { SliderOfServices } from "@/components/SliderOfServices/SliderOfServices";

const ServicesSection = () => {
  return <section>
    <div>
      <h2>Послуги <span>від малого до великого сайту</span></h2>
      <SliderOfServices/>
    </div>
  </section>;
};

export default ServicesSection;
