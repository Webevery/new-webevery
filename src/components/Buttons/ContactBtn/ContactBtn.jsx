'use client';

import styles from './ContactBtn.module.scss';
import s from '../Btns.module.scss';

const ContactBtn = ({ className, path, title, id }) => {
  return (
    <div id={id} className={`${s.btnWrapper} ${styles.btnBorder} ${className}`}>
      <a className={s.btn} href={path} target="_blank" aria-label={title}>
        {title}
      </a>
    </div>
  );
};

export default ContactBtn;
