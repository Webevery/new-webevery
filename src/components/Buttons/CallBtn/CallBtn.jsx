"use client"
import React from "react";
import styles from "./CallBtn.module.scss";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import s from "../Btns.module.scss";

const CallBtn = ({ className }) => {
  const{t,i18n}=useTranslation();
  
  const[isLoad, setIsLoad]=useState(true)

  useEffect(()=>{setIsLoad(false)},[])

  return (
    <div className={`${s.btnWrapper} ${styles.btnBorder} ${className}`}>
      <a className={s.btn} href="tel:+380966058605">
        {!isLoad && t('Buttons.CalltBtn')}
      </a>
    </div>
  );
};

export default CallBtn;
