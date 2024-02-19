"use client";

import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./Header.module.scss";
import NavLinks from "../NavLinks/NavLinks";
import LangSwitcher from "../LangSwitcher/LangSwitcher";
import BurgerBtn from "../Buttons/BurgerBtn/BurgerBtn";
import { SiteContext } from "@/context/siteContext";
import Image from "next/image";
import CallBtn from "../Buttons/CallBtn/CallBtn";
import Link from "next/link";

const Header = () => {
  const { burgerMenu, setBurgermenu } = useContext(SiteContext);
  // console.log("burgerMenu", burgerMenu);

  const [isXs, setIsXs] = useState(true);
  const menuRef = useRef(null);

  const [isTablet, setIsTablet] = useState(true);

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

  const closeBurgerOnWindowClick = useCallback(
    (e) => {
      // console.log(e.target === menuRef.current);
      // console.log("burgerMenu", burgerMenu);
      if (e.target !== menuRef.current) {
        setBurgermenu(false);
      }
    },
    [setBurgermenu]
  );

  useEffect(() => {
    window.addEventListener("resize", handleResizeXs);
    window.addEventListener("resize", handleResizeTablet);
    if (burgerMenu) {
      window.addEventListener("click", closeBurgerOnWindowClick);
    }

    handleResizeXs();
    handleResizeTablet();

    return () => {
      window.removeEventListener("resize", handleResizeXs);
      window.removeEventListener("resize", handleResizeTablet);
      window.removeEventListener("click", closeBurgerOnWindowClick);
    };
  }, [
    handleResizeXs,
    handleResizeTablet,
    burgerMenu,
    closeBurgerOnWindowClick,
  ]);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        {isTablet && <BurgerBtn />}
        <div
          className={burgerMenu ? styles.navWrapperVisible : styles.navWrapper}
          ref={menuRef}
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
