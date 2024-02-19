"use client";

import { SiteContext } from "@/context/siteContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useContext, useEffect, useRef, useState } from "react";
import { navLinks } from "../../data/navLinks";
import styles from "./NavLinks.module.scss";

const NavLinks = ({
  className,
  subMenuBtnRef,
  isClicked,
  setIsClicked,
  subMenuRef,
}) => {
  const { burgerMenu, setBurgermenu } = useContext(SiteContext);
  const [isSubmenuSlug, setIsSubmenuSlug] = useState(false);
  console.log("isSubmenuSlug", isSubmenuSlug);

  const pathName = usePathname();

  const isClient = typeof window !== "undefined";

  useEffect(() => {
    if (burgerMenu && isClient) {
      document.body.style.overflowY = "hidden";
    } else if (isClient) {
      document.body.style.overflowY = "scroll";
    }
  }, [burgerMenu, isClient]);

  const links = navLinks.map((link) => {
    console.log(link.subMenu);
    return (
      <div key={link.id} className={styles.linkWrapper}>
        <Link
          href={link.href}
          className={
            link.href === pathName || (isClicked && link.subMenu)
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
          <div
            className={
              isClicked
                ? `${styles.subLinkWrapper} ${styles.subLinkWrapperVisible}`
                : `${styles.subLinkWrapper} `
            }
            ref={subMenuRef}
          >
            {link.subMenu?.map((sub) => {
              // console.log("pathName", pathName);
              console.log("sub.href", sub.href);
              // if (pathName.includes(sub.href)) {
              //   // console.log(pathName.includes(sub.href));
              //   setIsSubmenuSlug(true);
              // } else {
              //   setIsSubmenuSlug(false);
              // }
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
      </div>
    );
  });
  return <nav className={`${styles.nav} ${className}`}>{links}</nav>;
};

export default NavLinks;
