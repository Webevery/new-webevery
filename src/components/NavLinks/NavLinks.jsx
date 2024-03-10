"use client";

import { SiteContext } from "@/context/siteContext";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { usePathname } from "next/navigation";
import React, { useContext, useEffect } from "react";
import {navLinks, currentLanguages } from "@/data";
import styles from "./NavLinks.module.scss";
import ServisecSubMenu from "./ServisecSubMenu/ServisecSubMenu";

const NavLinks = ({
  className,
  subMenuBtnRef,
  isClicked,
  setIsClicked,
  subMenuRef,
}) => {
  const { burgerMenu, setBurgermenu } = useContext(SiteContext);

  const { i18n } = useTranslation();

  const pathName = usePathname();

  const isClient = typeof window !== "undefined";

  useEffect(() => {
    if (burgerMenu && isClient) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [burgerMenu, isClient]);

  const links = navLinks.map((link) => {
    let word =
      i18n.language === currentLanguages.EN ? link.titleEN : link.title;
    // let capitalizedWord =
    //   word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

    if (link.subMenu) {
      return (
        <div
          key={link.id}
          className={styles.linkWrapper}
          onClick={(e) => {
            e.stopPropagation(); // Stop event propagation
            setIsClicked(!isClicked);
          }}
          ref={subMenuBtnRef}
        >
          <div className={styles.linkTitleWrapper}>
            <p
              className={
                link.href === pathName ||
                (pathName.startsWith("/services") &&
                  link.href.includes("services"))
                  ? `${styles.navLink} navLinkHover active`
                  : `${styles.navLink} navLinkHover`
              }
            >
              {word}
            </p>

            <div
              className={
                isClicked
                  ? `${styles.arrow} ${styles.arrowActive}`
                  : `${styles.arrow}`
              }
            ></div>
          </div>
          <ServisecSubMenu
            isClicked={isClicked}
            setIsClicked={setIsClicked}
            subMenuRef={subMenuRef}
            linkHref={link.href}
            className={styles.sublink}
          />
        </div>
      );
    } else {
      return (
        <Link
          key={link.id}
          href={link.href}
          className={
            link.href === pathName ||
            (isClicked && link.subMenu) ||
            (pathName.startsWith("/services") && link.href.includes("services"))
              ? `${styles.navLink} navLinkHover active`
              : `${styles.navLink} navLinkHover`
          }
          onClick={() => {
            setBurgermenu(false);
            setIsClicked(false);
          }}
        >
          {i18n.language === currentLanguages.EN ? link.titleEN : link.title}
        </Link>
      );
    }
  });
  return <nav className={`${styles.nav} ${className}`}>{links}</nav>;
};

export default NavLinks;
