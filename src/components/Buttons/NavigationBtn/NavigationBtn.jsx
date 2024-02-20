"use client";

import styles from "./NavigationBtn.module.scss";
import s from "../Btns.module.scss";
import Link from "next/link";

const NavigationBtn = ({ className, title, href, id }) => {
  return (
    <div id={id} className={`${s.btnWrapper} ${styles.btnBorder} ${className}`}>
      <Link href={href ? href : ""} className={s.btn}>
        {title}
      </Link>
    </div>
  );
};

export default NavigationBtn;

// Example:
//  @/sections/HomeTeamSection.jsx

// import NavigationBtn from "@/components/Buttons/NavigationBtn/NavigationBtn";

// const HomeTeamSection = () => {
//     return (
//       <section>
//         <NavigationBtn title="About Team"  href={"/team"}/>
//       </section>
//     );
//   };

//   export default HomeTeamSection;
