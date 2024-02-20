"use client";

import { SiteContext } from "@/context/siteContext";
import React, { useContext } from "react";
import styles from "./BurgerBtn.module.scss";

const BurgerBtn = () => {
  const { burgerMenu, setBurgermenu } = useContext(SiteContext);
  return (
    <button
      className={styles.burgerBtn}
      onClick={(e) => {
        e.stopPropagation(); // Stop event propagation
        setBurgermenu(!burgerMenu);
      }}
    >
      {burgerMenu ? (
        <svg>
          <use href="/sprite.svg#icon-half-burger-menu"></use>
        </svg>
      ) : (
        <svg className={styles.iconClose}>
          <use href="/sprite.svg#icon-burger-menu" />
        </svg>
      )}
    </button>
  );
};

export default BurgerBtn;
