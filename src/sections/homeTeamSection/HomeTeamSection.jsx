import NavigationBtn from "@/components/Buttons/NavigationBtn/NavigationBtn";
import styles from "./HomeTeamSection.module.scss";
import { SliderOfTeam } from "@/components/SliderOfTeam/SliderOfTeam";

const HomeTeamSection = () => {
  return (
    <section className={styles.container}>
      <div className="container">
        <h3 className={styles.subTitle}>
          <span>Our team</span> will bring your ideas to life
        </h3>
        <SliderOfTeam />
        <NavigationBtn
          id={styles.teamSliderBtn}
          title="About Team"
          href={"/team"}
        />
      </div>
    </section>
  );
};

export default HomeTeamSection;
