import styles from "./ServicesSection.module.scss";
import { lendingSiteDesc, businessCardDesc } from "@/data";


const ServicesSection = () => {
  return <section>
    <div>
      <h2>Послуги <span>від малого до великого сайту</span></h2>
      <ul className={styles.serviceList}>
        <li>
          <h3>Сайт-візитка</h3>
          <ul>
        {businessCardDesc.map((item)=>{
          return <li key={item.id}>{item.text}</li>
        })}</ul>
        </li>
        <li>
          <h3>Лендінг</h3>
          <ul>
        {lendingSiteDesc.map((item)=>{
          return <li key={item.id}>{item.text}</li>
        })}</ul>
        </li>
      </ul>
    </div>
  </section>;
};

export default ServicesSection;
