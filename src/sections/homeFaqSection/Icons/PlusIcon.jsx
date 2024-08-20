"use client";
import styles from "./PlusIcon.module.scss";

const PlusIcon = (props) => {
  const iconStyles = props.svgOpen ? styles.svgOpen : styles.svg;

  return (
    <svg
      className={iconStyles}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="gradient_1"
          x1="5.16375e-08"
          y1="3.78477"
          x2="11.8197"
          y2="-8.20395"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FAFF00" />
          <stop offset="0.466629" stopColor="#00F0FF" />
          <stop offset="1" stopColor="#0600ff" />
        </linearGradient>
      </defs>

      <path
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeMiterlimit="4"
        strokeWidth="3.5556"
        d="M16 1.778v28.444M1.778 16h28.444"
      />
    </svg>
  );
};
export default PlusIcon;
