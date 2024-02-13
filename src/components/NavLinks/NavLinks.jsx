"use client";

import { SiteContext } from "@/context/siteContext";
import Link from "next/link";
import React, { useCallback, useContext, useEffect } from "react";
import { navLinks } from "../../data/navLinks";
import styles from "./NavLinks.module.scss";

const NavLinks = ({ className }) => {
  const { burgerMenu, setBurgermenu } = useContext(SiteContext);

  const isDocument = typeof window !== "undefined";

  useEffect(() => {
    if (burgerMenu && isDocument) {
      document.body.style.overflowY = "hidden";
    } else if (isDocument) {
      document.body.style.overflowY = "scroll";
    }
  }, [burgerMenu, isDocument]);

  const links = navLinks.map((link) => {
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
