"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { socialLinksAndMail } from "@/helpers/linkArrays";
import CallBtn from "../Buttons/CallBtn/CallBtn";
import SocialLinksList from "../SocialLinks/SocialLinksList";
import FooterLinks from "./FooterLinks";

import styles from "./Footer.module.scss";

// console.log("ourPhones:", ourPhones);

const Footer = () => {
    const [isLaptop, setLaptop] = useState(true);

    const handleResizeLaptop = useCallback(() => {
        if (window.innerWidth >= 1024) {
            setLaptop(false);
        } else {
            setLaptop(true);
        }
    }, [setLaptop]);

    useEffect(() => {
        window.addEventListener("resize", handleResizeLaptop);
        handleResizeLaptop();
        return () => {
            window.removeEventListener("resize", handleResizeLaptop);
        };
    }, [handleResizeLaptop]);

    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                {isLaptop ? (
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

export default Footer;
