import { useContext } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { SiteContext } from "@/context/siteContext";
import { navLinks, currentLanguages } from "@/data";

import styles from "./Footer.module.scss";

const FooterLinks = (className) => {
  const pathName = usePathname();
  const { isClicked, setIsClicked } = useContext(SiteContext);

  const { i18n } = useTranslation();

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
          {i18n.language === currentLanguages.EN ? link.titleEN : link.title}
        </Link>
      </div>
    );
  });
  return <nav className={`${styles.navigation} ${className}`}>{links}</nav>;
};

export default FooterLinks;
