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
import BurgerBtn from "../Buttons/BurgerBtn/BurgerBtn";
import { SiteContext } from "@/context/siteContext";
import Image from "next/image";
import CallBtn from "../Buttons/CallBtn/CallBtn";
import Link from "next/link";
import TranslatorBtnBlock from "../TranslatorBtnBlock/TranslatorBtnBlock";
import { scrollToTop } from "@/helpers/scrollToTop";

const Header = () => {
  const { burgerMenu, setBurgermenu, isClicked, setIsClicked } =
    useContext(SiteContext);

  const [isXs, setIsXs] = useState(true);
  const [scrolledWindow, setScrolledWindow] = useState(0);
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const header = headerRef.current;
  const subMenuBtnRef = useRef(null);
  const subMenuRef = useRef(null);

  const [isTablet, setIsTablet] = useState(true);

  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => {
    setIsLoad(false);
  }, []);

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
      if (e.target === menuRef.current || e.target === subMenuRef.current) {
        return;
      } else if (
        e.target !== menuRef.current ||
        e.target !== subMenuBtnRef.current ||
        e.target !== subMenuRef.current
      ) {
        setBurgermenu(false);
        setIsClicked(false);
      }
    },
    [setBurgermenu, setIsClicked]
  );

  const headerScrollclassName = useCallback(() => {
    if (window.scrollY <= 80) {
      header?.classList.remove(`${styles.Hidden}`);
      header?.classList.add(`${styles.Visible}`);
    } else if (window.scrollY > scrolledWindow) {
      header?.classList.add(`${styles.Hidden}`);
      header?.classList.remove(`${styles.Visible}`);
    } else {
      header.classList.remove(`${styles.Hidden}`);
      header.classList.add(`${styles.Visible}`);
    }

    setScrolledWindow(window.scrollY);
  }, [scrolledWindow, setScrolledWindow, header?.classList]);

  useEffect(() => {
    window.addEventListener("resize", handleResizeXs);
    window.addEventListener("resize", handleResizeTablet);
    if (burgerMenu || isClicked) {
      window.addEventListener("click", closeBurgerOnWindowClick);
    }
    window.addEventListener("scroll", headerScrollclassName, {
      passive: true,
    });

    handleResizeXs();
    handleResizeTablet();

    return () => {
      window.removeEventListener("resize", handleResizeXs);
      window.removeEventListener("resize", handleResizeTablet);
      window.removeEventListener("click", closeBurgerOnWindowClick);
      window.removeEventListener("scroll", headerScrollclassName, {
        passive: true,
      });
    };
  }, [
    handleResizeXs,
    handleResizeTablet,
    burgerMenu,
    isClicked,
    closeBurgerOnWindowClick,
    headerScrollclassName,
  ]);

  return (
    <header className={styles.header} ref={headerRef}>
      <div className={`container ${styles.container}`}>
        {isTablet && <BurgerBtn setIsClicked={setIsClicked} />}
        <div
          className={burgerMenu ? styles.navWrapperVisible : styles.navWrapper}
          ref={menuRef}
        >
          {!isTablet && <CallBtn />}
          {!isLoad && (
            <NavLinks
              subMenuBtnRef={subMenuBtnRef}
              isClicked={isClicked}
              setIsClicked={setIsClicked}
              subMenuRef={subMenuRef}
            />
          )}
          {isXs && <TranslatorBtnBlock className={styles.xsLangSwitcher} />}
        </div>

        <div className={styles.logoWrapper}>
          {!isXs && (
            <TranslatorBtnBlock className={styles.mobileLangSwitcher} />
          )}
          <Link
            href={"/"}
            className={styles.logo}
            scroll={false}
            onClick={scrollToTop}
          >
            <Image src={"/Logo.webp"} fill alt="Webevery logo" sizes="50vw" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
