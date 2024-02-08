import NavigationBtn from "@/components/Buttons/NavigationBtn/NavigationBtn";
import styles from "./HomeTeamSection.module.scss";

const HomeTeamSection = () => {
  return (
    <section>
      <NavigationBtn title="About Team" href={"/team"} />
    </section>
  );
};

export default HomeTeamSection;
