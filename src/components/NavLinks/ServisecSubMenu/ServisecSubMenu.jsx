"use client";
import React from "react";
import { GetDataFromSection } from "@/fetch/ClientFetch";
import styles from "../NavLinks.module.scss";

import Link from "next/link";

const ServisecSubMenu = ({ isClicked, subMenuRef, linkHref }) => {
  const { data, isLoading, error } = GetDataFromSection("services");
  const subMenu = data?.map((sub) => (
    <Link
      key={sub.slug}
      href={`${linkHref}/${sub.slug}`}
      onClick={() => {
        setBurgermenu(false);
        setIsClicked(false);
      }}
    >
      {`${sub.titleGradientEn} ${sub.titleEn}`}
    </Link>
  ));

  return (
    <div
      className={
        isClicked
          ? `${styles.subLinkWrapper} ${styles.subLinkWrapperVisible}`
          : `${styles.subLinkWrapper} `
      }
      ref={subMenuRef}
    >
      {subMenu}
    </div>
  );
};

export default ServisecSubMenu;
