"use client";

import React, { useCallback, useContext, useEffect, useState } from "react";
import styles from "./Header.module.scss";
import NavLinks from "../NavLinks/NavLinks";
import LangSwitcher from "../LangSwitcher/LangSwitcher";
import BurgerBtn from "../Buttons/BurgerBtn/BurgerBtn";
import { SiteContext } from "@/context/siteContext";
import Image from "next/image";
import CallBtn from "../Buttons/CallBtn/CallBtn";

const Header = () => {
  const { burgerMenu } = useContext(SiteContext);
  const [isXs, setIsXs] = useState(false);
  console.log("isXs", isXs);

  const [isTablet, setIsTablet] = useState(true);
  console.log("isTablet", isTablet);

  const handleResizeXs = useCallback(() => {
    if (window.innerWidth < 768) {
      setIsXs(true);
    } else {
      setIsXs(false);
    }
  }, [setIsXs]);

  const handleResizeTablet = useCallback(() => {
    if (window.innerWidth < 1440) {
      setIsTablet(true);
    } else {
      setIsTablet(false);
    }
  }, [setIsTablet]);

  useEffect(() => {
    window.addEventListener("resize", handleResizeXs);
    window.addEventListener("resize", handleResizeTablet);

    // handleResizeXs();

    return () => {
      window.removeEventListener("resize", handleResizeXs);
      window.removeEventListener("resize", handleResizeTablet);
    };
  }, [handleResizeXs]);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        {isTablet && <BurgerBtn />}
        <div
          className={burgerMenu ? styles.navWrapperVisible : styles.navWrapper}
        >
          {!isTablet && <CallBtn />}
          <NavLinks />
          {isXs && <LangSwitcher className={styles.xsLangSwitcher} />}
        </div>

        <div className={styles.logoWrapper}>
          {!isXs && <LangSwitcher className={styles.mobileLangSwitcher} />}
          <Image
            src={"/Logo.webp"}
            width={72}
            height={70}
            alt="Webevery logo"
            className={styles.logo}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
