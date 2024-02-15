"use client";

import { SiteContext } from "@/context/siteContext";
import Link from "next/link";
import React, { useContext, useEffect, useRef, useState } from "react";
import { navLinks } from "../../data/navLinks";
import styles from "./NavLinks.module.scss";

const NavLinks = ({ className }) => {
  const { burgerMenu, setBurgermenu } = useContext(SiteContext);

  const isClient = typeof window !== "undefined";

  const refSubLinkWrapper = useRef(null);
  const refArrow = useRef(null);

  const subLinkWrapper = refSubLinkWrapper.current;
  const arrow = refArrow.current;
  console.log("arrow", arrow);

  const toggleSubLinkWrapper = () => {
    if (subLinkWrapper.classList.contains(`${styles.subLinkWrapperVisible}`)) {
      subLinkWrapper.classList.remove(`${styles.subLinkWrapperVisible}`);
      subLiarrownkWrapper.classList.add(`${styles.arrowActive}`);
    } else {
      subLinkWrapper.classList.add(`${styles.subLinkWrapperVisible}`);
      subLiarrownkWrapper.classList.remove(`${styles.arrowActive}`);
    }
  };

  useEffect(() => {
    if (burgerMenu && isClient) {
      document.body.style.overflowY = "hidden";
    } else if (isClient) {
      document.body.style.overflowY = "scroll";
    }
  }, [burgerMenu, isClient]);

  const links = navLinks.map((link) => {
    return (
      <div key={link.id} className={styles.linkWrapper}>
        {link.subMenu && (
          <svg
            className={styles.arrow}
            onClick={toggleSubLinkWrapper}
            ref={refArrow}
          >
            <use href="/sprite.svg#icon-NavArrow"></use>
          </svg>
        )}
        {link.subMenu && (
          <div className={styles.subLinkWrapper} ref={refSubLinkWrapper}>
            {link.subMenu?.map((sub) => {
              return (
                <Link
                  key={sub.id}
                  href={`${link.href}/${sub.href}`}
                  onClick={() => {
                    setBurgermenu(false);
                    subLinkWrapper.classList.remove(
                      `${styles.subLinkWrapperVisible}`
                    );
                  }}
                >
                  {sub.title}
                </Link>
              );
            })}
          </div>
        )}
        <Link
          href={link.href}
          className={styles.navLink}
          onClick={() => {
            setBurgermenu(false);
          }}
        >
          {link.title}
        </Link>
      </div>
    );
  });
  return <nav className={`${styles.nav} ${className}`}>{links}</nav>;
};

export default NavLinks;
