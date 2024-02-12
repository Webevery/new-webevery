import { SiteContext } from "@/context/siteContext";
import Link from "next/link";
import React, { useContext } from "react";
import { navLinks } from "../../data/navLinks";
import styles from "./NavLinks.module.scss";

const NavLinks = ({ className }) => {
  const { setBurgermenu } = useContext(SiteContext);

  const links = navLinks.map((link) => {
    // link.subMenu ? console.log(link.subMenu) : [];
    // console.log(link);

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
              console.log(sub);
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
