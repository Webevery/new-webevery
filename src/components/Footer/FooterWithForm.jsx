"use client";

import { useWindowResize } from "@/hooks/useWindowResize";
import { socialLinks, socialLinksAndMail } from "@/helpers/linkArrays";
import OrderForm from "@/components/OrderForm/OrderForm";
import CallBtn from "@/components/Buttons/CallBtn/CallBtn";
import SocialLinksList from "@/components/SocialLinks/SocialLinksList";
import FooterLinks from "./FooterLinks";

import styles from "./Footer.module.scss";

const FooterWithForm = () => {
    const { isMobile, isTablet, isLaptop, isDesktop } = useWindowResize();

    return (
        <>
            {(() => {
                if (isMobile) {
                    return (
                        <footer className={styles.footer}>
                            <div className={`container ${styles.container}`}>
                                <div className={styles.contentWrap}>
                                    <SocialLinksList
                                        list={socialLinksAndMail}
                                        className={styles.footerSocList}
                                    />
                                    <CallBtn className={styles.callBtn} />
                                </div>
                                <p className={styles.allRights}>
                                    © All rights reserved by{" "}
                                    <a href='/'>Webevery.dev </a> 2024
                                </p>
                            </div>
                        </footer>
                    );
                } else if (isTablet) {
                    return (
                        <footer className={styles.footer}>
                            <div className={`container ${styles.container}`}>
                                <div className={styles.contentTabletWrap}>
                                    <OrderForm isFooterForm={true} />
                                    <div>
                                        <SocialLinksList
                                            list={socialLinksAndMail}
                                            className={styles.footerSocList}
                                        />
                                        <CallBtn className={styles.callBtn} />
                                    </div>
                                </div>
                                <p className={styles.allRights}>
                                    © All rights reserved by{" "}
                                    <a href='/'>Webevery.dev </a> 2024
                                </p>
                            </div>
                        </footer>
                    );
                } else if (isLaptop || isDesktop) {
                    return (
                        <footer className={styles.footer}>
                            <div className={`container ${styles.container}`}>
                                <div className={styles.contentFromLaptopWrap}>
                                    <div className={styles.innerWrap}>
                                        <SocialLinksList
                                            list={socialLinks}
                                            className={styles.footerSocList}
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

                                    <div className={styles.formWrapper}>
                                        <OrderForm isFooterForm={true} />
                                    </div>
                                </div>
                                <p className={styles.allRights}>
                                    © All rights reserved by{" "}
                                    <a href='/'>Webevery.dev </a> 2024
                                </p>
                            </div>
                        </footer>
                    );
                } else {
                    return <footer></footer>;
                }
            })()}
        </>
    );
};

export default FooterWithForm;
