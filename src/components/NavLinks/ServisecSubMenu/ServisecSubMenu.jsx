"use client";
import React from "react";
import { GetDataFromSection } from "@/fetch/ClientFetch";
import styles from "../NavLinks.module.scss";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { currentLanguages } from "@/data";


const ServisecSubMenu = ({
  isClicked,
  setIsClicked,
  subMenuRef,
  linkHref,
  className,
  setBurgermenu,
}) => {
  const { data } = GetDataFromSection("services");
  const pathName = usePathname();

  const { i18n } = useTranslation();

  let allData = [];
  const allServices = {
    slug: "",
    title: "",
    titleEn: "",
    titleGradient: "Усі сервіси",
    titleGradientEn: "All services",
    linkHref,
  };

  if (data) {
    allData = [allServices, ...data];
  }

  const subMenu = allData?.map((sub) => {
    const subClassName = () => {
      if (pathName.includes(sub.slug) && sub.slug !== "") {
        return "navLinkHover active";
      } else if (pathName === "/services" && pathName.includes(sub.slug)) {
        return "navLinkHover active";
      } else {
        return "navLinkHover ";
      }
    };

    return (
      <div key={sub.slug} className={styles.underline}>
        <Link
          href={`${linkHref}/${sub.slug}`}
          onClick={() => {
            setBurgermenu(false);
            setIsClicked(false);
          }}
          className={subClassName()}
        >
          {i18n.language === currentLanguages.EN
            ? `${sub.titleGradientEn} ${sub.titleEn}`
            : `${sub.titleGradient} ${sub.title}`}
        </Link>
      </div>
    );
  });

  return (
    <div
      className={
        isClicked
          ? ` ${styles.subLinkWrapper} ${styles.subLinkWrapperVisible}`
          : `${styles.subLinkWrapper} ${className}`
      }
      ref={subMenuRef}
    >
      {subMenu}
    </div>
  );
};

export default ServisecSubMenu;
