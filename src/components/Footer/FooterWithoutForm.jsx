"use client";

import Image from "next/image";
import Link from "next/link";
import { socialLinksAndMail } from "@/helpers/linkArrays";
import { useWindowResize } from "@/hooks/useWindowResize";
import CallBtn from "../Buttons/CallBtn/CallBtn";
import SocialLinksList from "../SocialLinks/SocialLinksList";
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
                                list={socialLinksAndMail}
                                className={styles.foterSocList}
                            />
                            <a
                                className={styles.phone}
                                href='tel:+380966058605'
                            >
                                +380966058605
                            </a>
                            <FooterLinks />
                        </div>

                        <div className={styles.logoWrapper}>
                            <Link href={"/"} className={styles.logo}>
                                <Image
                                    src={"/LogoFull.png"}
                                    // fill
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
