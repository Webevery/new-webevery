"use client";

import { SiteContext } from "@/context/siteContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useContext, useEffect } from "react";
import { navLinks } from "../../data/navLinks";
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
    return (
      <div key={link.id} className={styles.linkWrapper}>
        <Link
          href={link.href}
          className={
            link.href === pathName ||
            (isClicked && link.subMenu) ||
            (pathName.includes("services") && link.href.includes("services"))
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
        {link.subMenu && (
          <svg
            className={
              isClicked
                ? `${styles.arrow} ${styles.arrowActive}`
                : `${styles.arrow}`
            }
            onClick={(e) => {
              e.stopPropagation(); // Stop event propagation
              setIsClicked(!isClicked);
            }}
            ref={subMenuBtnRef}
          >
            <use href="/sprite.svg#icon-NavArrow"></use>
          </svg>
        )}
        {link.subMenu && (
          <ServisecSubMenu
            isClicked={isClicked}
            subMenuRef={subMenuRef}
            linkHref={link.href}
          />
        )}
      </div>
    );
  });
  return <nav className={`${styles.nav} ${className}`}>{links}</nav>;
};

export default NavLinks;
