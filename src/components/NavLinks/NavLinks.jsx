"use client";

import { SiteContext } from "@/context/siteContext";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { navLinks } from "../../data/navLinks";
import styles from "./NavLinks.module.scss";

const NavLinks = ({ className }) => {
  const { burgerMenu, setBurgermenu } = useContext(SiteContext);
  const [isClicked, setIsClicked] = useState(false);

  const isClient = typeof window !== "undefined";

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
            className={
              isClicked
                ? `${styles.arrow} ${styles.arrowActive}`
                : `${styles.arrow}`
            }
            onClick={() => {
              setIsClicked(!isClicked);
            }}
          >
            <use href="/sprite.svg#icon-NavArrow"></use>
          </svg>
        )}
        {link.subMenu && (
          <div
            className={
              isClicked
                ? `${styles.subLinkWrapper} ${styles.subLinkWrapperVisible}`
                : `${styles.subLinkWrapper} `
            }
          >
            {link.subMenu?.map((sub) => {
              return (
                <Link
                  key={sub.id}
                  href={`${link.href}/${sub.href}`}
                  onClick={() => {
                    setBurgermenu(false);
                    setIsClicked(false);
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
          className={
            isClicked && link.subMenu
              ? `${styles.navLink} ${styles.active}`
              : `${styles.navLink}`
          }
          onClick={() => {
            setBurgermenu(false);
            setIsClicked(false);
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
