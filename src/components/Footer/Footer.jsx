import React from "react";
import CallBtn from "../Buttons/CallBtn/CallBtn";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <CallBtn />
      </div>
    </footer>
  );
};

export default Footer;

// className={`container ${styles.container}`}
