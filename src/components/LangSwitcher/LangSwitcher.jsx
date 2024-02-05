import React from "react";
import styles from "./LangSwitcher.module.scss";

const LangSwitcher = ({ className }) => {
  return (
    <ul className={`${styles.langsWrapper} ${className}`}>
      <li>EMG</li>
      <li>UKR</li>
    </ul>
  );
};

export default LangSwitcher;
