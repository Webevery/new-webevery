"use client"
import React from "react";
import styles from "./Loading.module.scss";
import { useTranslation } from "react-i18next";
import { useState,useEffect } from "react";
const Loading = ({ className }) => {
  const{t}=useTranslation();
  const[isLoad, setIsLoad]=useState(true)
  useEffect(()=>setIsLoad(false),[])
  return  <h3 className={`${styles.loading} ${className}`}>
    {!isLoad && t('LoadStatus.Load')}
    {/* Loading... */}
    </h3>;
};

export default Loading;