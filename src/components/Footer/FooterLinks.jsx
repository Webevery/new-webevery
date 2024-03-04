import Link from "next/link";
import { navLinks } from "@/data/navLinks";

import styles from "./Footer.module.scss";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { SiteContext } from "@/context/siteContext";

const FooterLinks = () => {
  const pathName = usePathname();
  const { isClicked, setIsClicked } = useContext(SiteContext);

  const links = navLinks.map((link) => {
    return (
      <div key={link.id} className={styles.linkWrapper}>
        <Link
          href={link.href}
          className={
            link.href === pathName ||
            (isClicked && link.subMenu) ||
            (pathName.startsWith("/services") && link.href.includes("services"))
              ? `${styles.navLink} navLinkHover active`
              : `${styles.navLink} navLinkHover`
          }
          onClick={() => {
            setIsClicked(false);
          }}
        >
          {link.title}
        </Link>
      </div>
    );
  });
  return <nav className={styles.navigation}>{links}</nav>;
};

export default FooterLinks;
