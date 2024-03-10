"use client";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LangSwitcher from "./LangSwitcher/LangSwitcher";

const TranslatorBtnBlock = ({ className, ref }) => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState((prev) =>
    !prev || prev === undefined ? "ua" : prev
  );
  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => {
    const lang = localStorage.getItem("whatLanguage");
    setLanguage(() => (lang ? lang : "ua"));

    setIsLoad(false);
  }, []);

  const changeLanguage = (languageUser) => {
    localStorage.setItem("whatLanguage", languageUser);
    const language = localStorage.getItem("whatLanguage");
    setLanguage(language);
    i18n.changeLanguage(language);
  };
  // return (<div className={className}>
  //     {!isLoad && <LangSwitcher
  //     changeLanguage={changeLanguage}
  //     currentLanguage={language} />}
  //     </div>)
  return (
    <>
      {!isLoad && (
        <LangSwitcher
          changeLanguage={changeLanguage}
          currentLanguage={language}
          ref={ref}
        />
      )}
    </>
  );
};

export default TranslatorBtnBlock;
