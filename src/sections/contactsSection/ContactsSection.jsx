"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { currentLanguages } from "@/data";
import { useWindowResize } from "@/hooks/useWindowResize";
import OrderForm from "@/components/OrderForm/OrderForm";
import OurContacts from "./OurContacts";

import styles from "./ContactsSection.module.scss";

const ContactsSection = () => {
  const { isMobile, isTablet, isLaptop, isDesktop } = useWindowResize();

  const [isLoad, setIsLoad] = useState(true);

  const { t, i18n } = useTranslation();

  useEffect(() => setIsLoad(false), []);

  return (
    <>
      {(() => {
        if (isMobile) {
          return (
            <section className={styles.section}>
              <div className={`container ${styles.contactsContainer}`}>
                {!isLoad && (
                  <h1 className={styles.title}>
                    {t("ContactsPage.Title")}{" "}
                    {i18n.language === currentLanguages.EN && (
                      <span className={styles.titleSlice}>us</span>
                    )}
                  </h1>
                )}
                <div className={styles.contentWrap}>
                  <OurContacts />
                </div>
                <OrderForm />
              </div>
            </section>
          );
        } else if (isTablet) {
          return (
            <section className={styles.section}>
              <div className={`container ${styles.contactsContainer}`}>
                {!isLoad && (
                  <h1 className={styles.title}>
                    {t("ContactsPage.Title")}{" "}
                    {i18n.language === currentLanguages.EN && (
                      <span className={styles.titleSlice}>us</span>
                    )}
                  </h1>
                )}
                <div className={styles.contentWrap}>
                  <OurContacts />
                </div>
              </div>
            </section>
          );
        } else if (isLaptop || isDesktop) {
          return (
            <section className={styles.section}>
              <div className={`container ${styles.contactsContainer}`}>
                <h1 className={styles.title}>
                  {t("ContactsPage.Title")}{" "}
                  {i18n.language === currentLanguages.EN && (
                    <span className={styles.titleSlice}>us</span>
                  )}
                </h1>
                <div className={styles.contentWrap}>
                  <OurContacts />
                  <OrderForm />
                </div>
              </div>
            </section>
          );
        } else {
          return <div>{!isLoad && t("LoadStatus.Load")}</div>;
        }
      })()}
    </>
  );
};

export default ContactsSection;
