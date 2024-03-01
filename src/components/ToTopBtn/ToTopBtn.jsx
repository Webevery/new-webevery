"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./ToTopBtn.module.scss";

const ToTopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      onClick={scrollToTop}
      className={isVisible ? styles.toTopBtn : styles.toTopBtnHidden}
      title="Кнопка до верху сторінки"
      aria-label="Кнопка до гори"
    >
      <svg>
        <use href="./sprite.svg#icon-totop"></use>
      </svg>
      {/* <Image src="/toTopBtn.webp" fill alt="Picture of the author" /> */}
      <div className={styles.arrow}></div>
    </button>
  );
};

export default ToTopBtn;
