"use client";

import React, { useCallback, useEffect, useState } from "react";
import styles from "./Header.module.scss";
import { navLinks } from "../../data/navLinks";
import Link from "next/link";
import NavLinks from "../NavLinks/NavLinks";
import LangSwitcher from "../LangSwitcher/LangSwitcher";
import BurgerBtn from "../BurgerBtn/BurgerBtn";

const Header = () => {
  const [burgerMenu, setBurgermenu] = useState(false);
  const [isXs, setIsXs] = useState(false);

  console.log(isXs);

  const [isTablet, setIsTablet] = useState(false);
  console.log(isTablet);

  const links = navLinks.map((link) => {
    return (
      <Link href={link.href} key={link.title}>
        {link.title}
      </Link>
    );
  });

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
      <BurgerBtn
        burgerMenu={burgerMenu}
        onClick={() => {
          setBurgermenu(!burgerMenu);
        }}
      />
      <div
        className={burgerMenu ? styles.navWrapper : styles.navWrapperVisible}
      >
        <NavLinks />
        {isXs && <LangSwitcher className={styles.xsLangSwitcher} />}
      </div>
      {!isXs && <LangSwitcher className={styles.mobileLangSwitcher} />}
    </header>
  );
};

export default Header;

// className={styles.headerNav}
