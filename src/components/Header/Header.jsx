"use client";

import React, { useCallback, useContext, useEffect, useState } from "react";
import styles from "./Header.module.scss";
import NavLinks from "../NavLinks/NavLinks";
import LangSwitcher from "../LangSwitcher/LangSwitcher";
import BurgerBtn from "../Buttons/BurgerBtn/BurgerBtn";
import { SiteContext } from "@/context/siteContext";
import Image from "next/image";
import CallBtn from "../Buttons/CallBtn/CallBtn";
import Link from "next/link";

const Header = () => {
  const { burgerMenu } = useContext(SiteContext);
  const [isXs, setIsXs] = useState(true);
  // console.log("isXs", isXs);

  const [isTablet, setIsTablet] = useState(true);
  // console.log("isTablet", isTablet);

  const handleResizeXs = useCallback(() => {
    if (window.innerWidth >= 768) {
      setIsXs(false);
    } else {
      setIsXs(true);
    }
  }, [setIsXs]);

  const handleResizeTablet = useCallback(() => {
    if (window.innerWidth >= 1440) {
      setIsTablet(false);
    } else {
      setIsTablet(true);
    }
  }, [setIsTablet]);

  useEffect(() => {
    window.addEventListener("resize", handleResizeXs);
    window.addEventListener("resize", handleResizeTablet);

    handleResizeXs();
    handleResizeTablet();

    return () => {
      window.removeEventListener("resize", handleResizeXs);
      window.removeEventListener("resize", handleResizeTablet);
    };
  }, [handleResizeXs, handleResizeTablet]);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        {isTablet && <BurgerBtn />}
        <div
          className={burgerMenu ? styles.navWrapperVisible : styles.navWrapper}
        >
          {!isTablet && <CallBtn />}
          <NavLinks burgerMenu={burgerMenu} />
          {isXs && <LangSwitcher className={styles.xsLangSwitcher} />}
        </div>

        <div className={styles.logoWrapper}>
          {!isXs && <LangSwitcher className={styles.mobileLangSwitcher} />}
          <Link href={"/"} className={styles.logo}>
            <Image src={"/Logo.webp"} fill alt="Webevery logo" sizes="50vw" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
