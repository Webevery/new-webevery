import { socialLinks } from "@/helpers/linkArrays";
import SocialLinksList from "@/components/SocialLinks/SocialLinksList";

import styles from "./ContactsSection.module.scss";

const OurContacts = () => {
    return (
        <div className={styles.informSection}>
            <div className={styles.informBlock}>
                <div className={`${styles.innerWrap} ${styles.phoneWrap}`}>
                    <h2 className={`titleGradient ${styles.subTitle}`}>
                        PHONE NUMBER
                    </h2>
                    <a className={styles.phoneText} href='tel:+380966058605'>
                        +380966058605
                    </a>
                </div>
                <div className={`${styles.innerWrap} ${styles.emailWrap}`}>
                    <h2 className={`titleGradient ${styles.subTitle}`}>
                        EMAIL
                    </h2>
                    <a
                        className={styles.mailText}
                        href='mailto:inbox.webevery@gmail.com'
                    >
                        inbox.webevery@gmail.com
                    </a>
                </div>
                <div className={`${styles.innerWrap} ${styles.phoneWrap}`}>
                    <h2 className={`titleGradient ${styles.subTitle}`}>
                        SOCIAL MEDIA
                    </h2>
                    <SocialLinksList
                        list={socialLinks}
                        className={styles.socialList}
                    />
                </div>
            </div>
        </div>
    );
};

export default OurContacts;
