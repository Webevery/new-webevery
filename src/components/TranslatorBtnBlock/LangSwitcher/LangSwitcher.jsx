import React from "react";
import { useState } from "react";
import styles from "./LangSwitcher.module.scss";

const LangSwitcher = ({ changeLanguage, currentLanguage }) => {
  const[lang, setLang]=useState(()=>{
    currentLanguage === "ua" ? "ua" : "en"
  })

  const onHandleSetUa=()=>{
    setLang("ua")
    const languageUser= "ua"
    changeLanguage(languageUser)
  }

  const onHandleSetEng=()=>{
    setLang("en")
    const languageUser= "en";
    changeLanguage(languageUser)
  }
  return (
    <ul className={styles.langsWrapper} >
      <li className= { lang==="ua" ?  styles.active : ""} onClick={onHandleSetEng}>ENG</li>
      <li className= { lang==="en" ?  styles.active : ""} onClick={onHandleSetUa}>UKR</li>
    </ul>
  );
};

export default LangSwitcher;
