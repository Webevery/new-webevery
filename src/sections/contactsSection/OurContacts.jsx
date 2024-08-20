import { useTranslation } from "react-i18next";
import { socialLinks } from "@/helpers/linkArrays";
import SocialLinksList from "@/components/SocialLinks/SocialLinksList";

import styles from "./ContactsSection.module.scss";

const OurContacts = () => {
    const { t } = useTranslation();
    return (
        <div className={styles.informBlock}>
            <h2 className={`titleGradient ${styles.subTitle}`}>
                {t("ContactsPage.Phone")}
            </h2>
            <a
                className={`${styles.phoneText} navLinkHover`}
                href='tel:+380966058605'
            >
                +380966058605
            </a>
            <h2 className={`titleGradient ${styles.subTitle}`}>
                {t("ContactsPage.Email")}
            </h2>
            <a
                className={`${styles.mailText} navLinkHover`}
                href='mailto:inbox.webevery@gmail.com'
            >
                inbox.webevery@gmail.com
            </a>
            <h2 className={`titleGradient ${styles.subTitle}`}>
                {t("ContactsPage.Social")}
            </h2>
            <SocialLinksList
                list={socialLinks}
                className={styles.contactsSocialList}
            />
        </div>
    );
};

export default OurContacts;
