import React from "react";
import { useState,useEffect } from "react";
import styles from "./LangSwitcher.module.scss";

const LangSwitcher = ({ changeLanguage, currentLanguage }) => {
  const[lang, setLang]=useState(()=>{
    currentLanguage || !currentLanguage === "ua" ? "ua" : "en"
  })

  useEffect(()=>{
    currentLanguage === "ua" ? setLang ("ua") : setLang("en")
  },[currentLanguage])

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
      <li className= {lang==="ua" ?  "" : styles.active} onClick={onHandleSetEng}>ENG</li>
      <li className= {lang==="en" ? "" : styles.active} onClick={onHandleSetUa}>UKR</li>
    </ul>
  );
};

export default LangSwitcher;
