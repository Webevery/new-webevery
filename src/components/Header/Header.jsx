"use client";

import { useCallback, useContext, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { scrollToTop } from "@/helpers/scrollToTop";
import { useCheckPathname } from "@/hooks/useCheckPathname";
import NavLinks from "../NavLinks/NavLinks";
import BurgerBtn from "../Buttons/BurgerBtn/BurgerBtn";
import { SiteContext } from "@/context/siteContext";
import CallBtn from "../Buttons/CallBtn/CallBtn";
import TranslatorBtnBlock from "../TranslatorBtnBlock/TranslatorBtnBlock";

import styles from "./Header.module.scss";
import { useWindowResize } from "@/hooks/useWindowResize";

const Header = () => {
  const { burgerMenu, setBurgermenu, isClicked, setIsClicked } =
    useContext(SiteContext);
  const { isMobile, isDesktop } = useWindowResize();

  const [scrolledWindow, setScrolledWindow] = useState(0);
  const [isLoad, setIsLoad] = useState(true);

  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const header = headerRef.current;
  const subMenuBtnRef = useRef(null);
  const subMenuRef = useRef(null);
  const translatorEn = useRef(null);
  const translatorUk = useRef(null);

  const pathname = usePathname();
  const isPathExist = useCheckPathname(pathname);

  useEffect(() => {
    setIsLoad(false);
  }, []);

  const closeBurgerOnWindowClick = useCallback(
    (e) => {
      if (
        e.target === menuRef.current ||
        e.target === subMenuRef.current ||
        e.target === translatorEn.current ||
        e.target === translatorUk.current
      ) {
        return;
      } else {
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
    if (burgerMenu || isClicked) {
      window.addEventListener("click", closeBurgerOnWindowClick);
    }
    window.addEventListener("scroll", headerScrollclassName, {
      passive: true,
    });

    return () => {
      window.removeEventListener("click", closeBurgerOnWindowClick);
      window.removeEventListener("scroll", headerScrollclassName, {
        passive: true,
      });
    };
  }, [burgerMenu, isClicked, closeBurgerOnWindowClick, headerScrollclassName]);

  return (
    <>
      {isPathExist || pathname.startsWith("/dashboard") ? (
        <header className={styles.header} ref={headerRef}>
          <div className={`container ${styles.container}`}>
            {!isDesktop && <BurgerBtn setIsClicked={setIsClicked} />}
            <div
              className={
                burgerMenu ? styles.navWrapperVisible : styles.navWrapper
              }
              ref={menuRef}
            >
              {isDesktop && <CallBtn />}
              {!isLoad && (
                <NavLinks
                  subMenuBtnRef={subMenuBtnRef}
                  isClicked={isClicked}
                  setIsClicked={setIsClicked}
                  subMenuRef={subMenuRef}
                />
              )}
              {isMobile && (
                <TranslatorBtnBlock
                  className={styles.xsLangSwitcher}
                  translatorEn={translatorEn}
                  translatorUk={translatorUk}
                />
              )}
            </div>

            <div className={styles.logoWrapper}>
              {!isMobile && (
                <TranslatorBtnBlock className={styles.mobileLangSwitcher} />
              )}
              <Link
                href={"/"}
                className={styles.logo}
                scroll={false}
                onClick={scrollToTop}
              >
                <Image
                  src={"/Logo.webp"}
                  fill
                  alt="Webevery logo"
                  sizes="50vw"
                />
              </Link>
            </div>
          </div>
        </header>
      ) : (
        <header></header>
      )}
    </>
  );
};

export default Header;
