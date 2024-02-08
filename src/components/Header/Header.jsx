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
  // const [burgerMenu, setBurgermenu] = useState(false);
  const { burgerMenu, setBurgermenu } = useContext(SiteContext);
  const [isXs, setIsXs] = useState(false);

  const [isTablet, setIsTablet] = useState(false);
  console.log(isTablet);

  const handleResize = useCallback(() => {
    if (window.innerWidth < 360) {
      setIsXs(true);
    } else if (window.innerWidth >= 360) {
      setIsXs(false);
    } else if (window.innerWidth < 1439) {
      setIsTablet(true);
    } else {
      setIsTablet(false);
    }
  }, [setIsXs, setIsTablet]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.addEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        {isTablet && <BurgerBtn />}
        {/* <BurgerBtn /> */}
        <div
          className={burgerMenu ? styles.navWrapperVisible : styles.navWrapper}
        >
          <CallBtn />
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

// className={styles.headerNav}
