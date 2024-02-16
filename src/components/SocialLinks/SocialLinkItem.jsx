import styles from "./SocialLinks.module.scss";

const SocialLinkItem = ({ name, path, svg }) => {
    return (
        <li className={styles.itemSocialLink}>
            <a
                href={path}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={name}
            >
                <svg className={styles.iconSocialLink}>
                    <use href={svg} />
                </svg>
            </a>
        </li>
    );
};

export default SocialLinkItem;
