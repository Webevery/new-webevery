import React from "react";
import styles from "./LangSwitcher.module.scss";

const LangSwitcher = ({
  changeLanguage,
  currentLanguage,
  translatorEn,
  translatorUk,
}) => {
  // const[lang, setLang]=useState(()=>{
  //   currentLanguage || !currentLanguage === "ua" ? "ua" : "en"
  // })

  // useEffect(()=>{
  //   currentLanguage === "ua" ? setLang ("ua") : setLang("en")
  // },[currentLanguage])

  const onHandleSetUa = () => {
    const languageUser = "ua";
    changeLanguage(languageUser);
  };

  const onHandleSetEng = () => {
    const languageUser = "en";
    changeLanguage(languageUser);
  };
  return (
    <ul className={styles.langsWrapper}>
      <li
        className={currentLanguage === "ua" ? styles.notActive : styles.active}
        onClick={onHandleSetEng}
        ref={translatorEn}
      >
        ENG
      </li>
      <li
        className={currentLanguage === "en" ? styles.notActive : styles.active}
        onClick={onHandleSetUa}
        ref={translatorUk}
      >
        UKR
      </li>
    </ul>
  );
};

export default LangSwitcher;
