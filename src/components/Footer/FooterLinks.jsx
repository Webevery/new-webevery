import Link from "next/link";
import { navLinks } from "@/data/navLinks";

import styles from "./Footer.module.scss";

const FooterLinks = () => {
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
            </div>
        );
    });
    return <nav className={styles.navigation}>{links}</nav>;
};

export default FooterLinks;
