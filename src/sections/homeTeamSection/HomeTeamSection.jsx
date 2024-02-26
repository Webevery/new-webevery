import NavigationBtn from "@/components/Buttons/NavigationBtn/NavigationBtn";
import styles from "./HomeTeamSection.module.scss";
import { SliderOfTeam } from "@/components/SliderOfTeam/SliderOfTeam";

const HomeTeamSection = () => {
  return (
    <section className={styles.container}>
      <div className="container">
        <h3 className={styles.subTitle}>
          <span>Наша команда</span> втілить ваші ідеї в життя
        </h3>
        <SliderOfTeam />
        <NavigationBtn
          id={styles.teamSliderBtn}
          title="Про Команду"
          href={"/team"}
        />
      </div>
    </section>
  );
};

export default HomeTeamSection;
