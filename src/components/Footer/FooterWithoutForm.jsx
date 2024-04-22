"use client";

import Link from "next/link";
import Image from "next/image";
import { socialLinks, socialLinksAndMail } from "@/helpers/linkArrays";
import { useWindowResize } from "@/hooks/useWindowResize";
import CallBtn from "@/components/Buttons/CallBtn/CallBtn";
import SocialLinksList from "@/components/SocialLinks/SocialLinksList";
import FooterLinks from "./FooterLinks";

import styles from "./Footer.module.scss";

const FooterWithoutForm = () => {
    const { isMobile, isTablet } = useWindowResize();

    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                {isMobile || isTablet ? (
                    <div className={styles.contentWrap}>
                        <SocialLinksList list={socialLinksAndMail} />
                        <CallBtn className={styles.callBtn} />
                    </div>
                ) : (
                    <div className={styles.contentWrap}>
                        <div className={styles.innerWrap}>
                            <SocialLinksList
                                list={socialLinks}
                                className={styles.foterSocList}
                            />
                            <div className={styles.contactsBox}>
                                <a
                                    className={`${styles.phone} navLinkHover`}
                                    href='tel:+380966058605'
                                >
                                    +380966058605
                                </a>
                                <a
                                    className={`${styles.phone} navLinkHover`}
                                    href='mailto:inbox.webevery@gmail.com'
                                >
                                    inbox.webevery@gmail.com
                                </a>
                            </div>
                            <FooterLinks />
                        </div>

                        <div className={styles.logoWrapper}>
                            <Link href={"/"} className={styles.logo}>
                                <Image
                                    src={"/LogoFull.png"}
                                    width={180}
                                    height={42}
                                    alt='Webevery logo'
                                />
                            </Link>
                            <CallBtn className={styles.callBtn} />
                        </div>
                    </div>
                )}
            </div>
        </footer>
    );
};

export default FooterWithoutForm;
