import { socialLinks } from "@/helpers/linkArrays";
import SocialLinksList from "@/components/SocialLinks/SocialLinksList";
import { useTranslation } from "react-i18next";
import styles from "./ContactsSection.module.scss";

const OurContacts = () => {
  const {t}=useTranslation()
  return (
    <div className={styles.informSection}>
      <div className={styles.informBlock}>
        <div className={`${styles.innerWrap} ${styles.phoneWrap}`}>
          <h2 className={`titleGradient ${styles.subTitle}`}>{t('ContactsPage.Phone')}</h2>
          <a
            className={`${styles.phoneText} navLinkHover`}
            href="tel:+380966058605"
          >
            +380966058605
          </a>
        </div>
        <div className={`${styles.innerWrap} ${styles.emailWrap}`}>
          <h2 className={`titleGradient ${styles.subTitle}`}>{t('ContactsPage.Email')}</h2>
          <a
            className={`${styles.mailText} navLinkHover`}
            href="mailto:inbox.webevery@gmail.com"
          >
            inbox.webevery@gmail.com
          </a>
        </div>
        <div className={`${styles.innerWrap} ${styles.phoneWrap}`}>
          <h2 className={`titleGradient ${styles.subTitle}`}>{t('ContactsPage.Social')}</h2>
          <SocialLinksList list={socialLinks} className={styles.socialList} />
        </div>
      </div>
    </div>
  );
};

export default OurContacts;
