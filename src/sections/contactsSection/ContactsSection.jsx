"use client";

import { useWindowResize } from "@/hooks/useWindowResize";
import OrderForm from "@/components/OrderForm/OrderForm";
import OurContacts from "./OurContacts";

import styles from "./ContactsSection.module.scss";

const ContactsSection = () => {
  const { isMobile, isTablet, isLaptop, isDesktop } = useWindowResize();

  return (
    <>
      {(() => {
        if (isMobile) {
          return (
            <section className={styles.section}>
              <div className={`container ${styles.contactsContainer}`}>
                <div className={styles.titleWrap}>
                  <h1 className={styles.title}>
                    Contact <span className={styles.titleSlice}>us</span>
                  </h1>
                </div>
                <div className={styles.contentWrap}>
                  <OurContacts />
                  <OrderForm />
                </div>
              </div>
            </section>
          );
        } else if (isTablet) {
          return (
            <section className={styles.section}>
              <div className={`container ${styles.contactsContainer}`}>
                <div className={styles.titleWrap}>
                  <h1 className={styles.title}>
                    Contact <span className={styles.titleSlice}>us</span>
                  </h1>
                </div>
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
                <div className={styles.titleWrap}>
                  <h1 className={styles.title}>
                    Contact <span className={styles.titleSlice}>us</span>
                  </h1>
                </div>
                <div className={styles.contentWrap}>
                  <OurContacts />
                  <OrderForm
                    className={styles.orderForm}
                    titleClassName={styles.titleClassName}
                  />
                </div>
              </div>
            </section>
          );
        } else {
          return <div>Loading ...</div>;
        }
      })()}
    </>
  );
};

export default ContactsSection;
