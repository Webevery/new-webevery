import Link from "next/link";
import React from "react";
import { navLinks } from "../../data/navLinks";
import styles from "./NavLinks.module.scss";

const NavLinks = ({ className }) => {
  const links = navLinks.map((link) => {
    return (
      <Link href={link.href} key={link.title}>
        {link.title}
      </Link>
    );
  });
  return <nav className={`${styles.nav} ${className}`}>{links}</nav>;
};

export default NavLinks;
