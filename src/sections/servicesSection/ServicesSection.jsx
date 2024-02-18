import styles from "./ServicesSection.module.scss";
import { serviceData } from '@/data/serviceData';

// import { SliderOfServices } from "@/components/SliderOfServices/SliderOfServices";

const ServicesSection = () => {
  return (
    <section>
      <section className={styles.services}>
        <div className={`container ${styles.servicesContainer}`}>
          <div className={styles.titleServicesContainer}>
            <h1 className={styles.titleServices}>
              <span>Services</span>
            </h1>
            <h2 className={styles.descServices}>
              choose <span>the best</span> deal for your business
            </h2>
          </div>
          <ul className={styles.cartContainer}>
        {serviceData.map(({ id, title, price }) => (
          <li key={id} className={styles.cartItem}>
            <h3 className={styles.cartTitle}>{title}</h3>
            <p className={styles.cartPrice}>{price}</p>
          </li>
        ))}
      </ul>
        </div>
      </section>
    </section>
  );
};

export default ServicesSection;
