import styles from './BreadCrumbs.module.scss';

const BreadCrumbs = ({
  onClick,
  title,
  classNameContainer,
  classNameIcon,
  id,
}) => {
  return (
    <div
      className={`${styles.backContainer} ${classNameContainer}`}
      onClick={onClick}
      id={id}
    >
      <svg className={`${styles.backIcon} ${classNameIcon}`}>
        <use href="../sprite.svg#icon-arrowReadMore" />
      </svg>
      <p>{title}</p>
    </div>
  );
};

export default BreadCrumbs;
