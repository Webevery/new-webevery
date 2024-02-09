import { SiteContext } from "@/context/siteContext";
import Link from "next/link";
import React, { useContext } from "react";
import { navLinks } from "../../data/navLinks";
import styles from "./NavLinks.module.scss";

const NavLinks = ({ className }) => {
  const { setBurgermenu } = useContext(SiteContext);

  const links = navLinks.map((link) => {
    return (
      <Link
        href={link.href}
        key={link.title}
        className={styles.navLink}
        onClick={() => {
          setBurgermenu(false);
        }}
      >
        {link.title}
      </Link>
    );
  });
  return <nav className={`${styles.nav} ${className}`}>{links}</nav>;
};

export default NavLinks;
