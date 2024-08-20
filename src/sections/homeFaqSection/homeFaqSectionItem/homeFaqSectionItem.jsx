import styles from "./homeFaqSectionItem.module.scss";
import stylescBtn from "/src/components/Buttons/Btns.module.scss";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const HomeFaqSectionItem = ({
  question,
  answer,
  activeIndex,
  setActiveIndex,
  id,
  href,
  link,
  answerHeight,
}) => {
  const [isClicked, setIsClicked] = useState(false);
  const divRef = useRef();

  const isAnswerShown = () =>
    id === activeIndex ? setIsClicked(!isClicked) : null;

  useEffect(() => {
    isAnswerShown();

    // eslint-disable-next-line
  }, [activeIndex]);


  const answerStyles = isClicked ? styles.q : styles.w;

  const ariaExpanded = isClicked ? true : false;

  return (
    <>
      <li className={styles.faqItem}>
        <div
          onClick={() => {
            // eslint-disable-next-line
            return setActiveIndex(id), isAnswerShown();
          }}
          aria-expanded={ariaExpanded}
          aria-controls={id}
          id={id}
          className={styles.faqItem__questionContainer}
          ref={divRef}
        >
          <p className={styles.faqItem__question}>{question}</p>

          <button
            type="button"
            className={stylescBtn.btn + " " + styles.faqItem__buttonPlus}
          >
            <svg className={styles.faqItem__icon}>
              <use href="sprite.svg#icon-plus" className={styles.icon} />
            </svg>
          </button>
        </div>
        <p id={id} className={answerStyles}>
          {answer}
          {href && <Link href={href}>{link}</Link>}
        </p>
      </li>
    </>
  );
};

export default HomeFaqSectionItem;
