"use client";

import { scrollToTop } from "@/helpers/scrollToTop";
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

  return (
    <button
      onClick={scrollToTop}
      className={isVisible ? styles.toTopBtn : styles.toTopBtnHidden}
      title="Кнопка до верху сторінки"
      aria-label="Кнопка до гори"
    >
      {/* <svg className={styles.toTopSvg}>
        <use href="/sprite.svg#icon-totop"></use>
      </svg> */}

      <Image
        src="/arrow-up.svg"
        fill
        alt="Picture of the author"
        sizes="10vw"
      />
    </button>
  );
};

export default ToTopBtn;
