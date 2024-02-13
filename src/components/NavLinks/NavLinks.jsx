import { SiteContext } from "@/context/siteContext";
import { CldImage } from "next-cloudinary";
import Link from "next/link";
import React, { useCallback, useContext, useEffect } from "react";
import { navLinks } from "../../data/navLinks";
import styles from "./NavLinks.module.scss";

const NavLinks = ({ className }) => {
  const { burgerMenu, setBurgermenu } = useContext(SiteContext);

  const links = navLinks.map((link) => {
    // burgerMenu && typeof document !== undefined;
    // console.log("typeof document", typeof document);

    // const subLinkWrapper = document.querySelector(".subLinkWrapper");
    // console.dir("subLinkWrapper", subLinkWrapper);

    // burgerMenu
    burgerMenu && typeof document !== undefined
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "scroll");

    return (
      <div key={link.id} className={styles.linkWrapper}>
        <Link
          href={link.href}
          className={styles.navLink}
          onClick={() => {
            setBurgermenu(false);
          }}
        >
          {link.title}
        </Link>
        {link.subMenu && (
          <div className={styles.subLinkWrapper}>
            {link.subMenu?.map((sub) => {
              return (
                <Link
                  key={sub.id}
                  href={`${link.href}/${sub.href}`}
                  onClick={() => {
                    setBurgermenu(false);
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
