import NavigationBtn from "@/components/Buttons/NavigationBtn/NavigationBtn";
import styles from "./HomeTeamSection.module.scss";
import { SliderOfTeam } from "@/components/SliderOfTeam/SliderOfTeam";

const HomeTeamSection = () => {
  return (
    <section className={styles.container}>
      <div className="container">
        <SliderOfTeam />
        <NavigationBtn title="About Team" href={"/team"} />
      </div>
    </section>
  );
};

export default HomeTeamSection;
