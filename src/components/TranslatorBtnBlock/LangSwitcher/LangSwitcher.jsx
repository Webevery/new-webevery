import React from "react";
import { useState } from "react";
import styles from "./LangSwitcher.module.scss";

const LangSwitcher = ({ changeLanguage, currentLanguage }) => {
  const[lang, setLang]=useState(()=>{
    currentLanguage === "ua" ? "УКР" : "ENG"
  })

  const onHandleSetUa=()=>{
    setLang("УКР")
    const languageUser= lang === "ENG" ? "en" : "ua"
    changeLanguage(languageUser)
  }

  const onHandleSetEng=()=>{
    setLang("Eng")
    const languageUser= lang === "ENG" ? "en" : "ua"
    changeLanguage(languageUser)
  }
  return (
    <ul className={styles.langsWrapper} >
      <li className= { lang==="ENG" ?  styles.active : ""} onClick={onHandleSetEng}>ENG</li>
      <li className= { lang==="УКР" ?  styles.active : ""} onClick={onHandleSetUa}>UKR</li>
    </ul>
  );
};

export default LangSwitcher;
