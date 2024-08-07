import SocialLinkItem from "./SocialLinkItem";

import styles from "./SocialLinks.module.scss";

const SocialLinksList = ({ list, className }) => {
    return (
        <ul className={`${styles.socialList} ${className} `}>
            {list.map(({ name, path, svg }) => {
                return (
                    <SocialLinkItem
                        key={name}
                        name={name}
                        svg={svg}
                        path={path}
                        arialabel={name}
                    />
                );
            })}
        </ul>
    );
};

export default SocialLinksList;
