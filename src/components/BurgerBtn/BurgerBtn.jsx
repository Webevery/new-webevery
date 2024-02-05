"use client";

import React from "react";
import styles from "./BurgerBtn.module.scss";

const BurgerBtn = ({ burgerMenu, onClick }) => {
  return (
    <button className={styles.burgerBtn} onClick={onClick}>
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
