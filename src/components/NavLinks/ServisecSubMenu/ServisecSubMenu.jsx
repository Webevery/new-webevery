"use client";
import React from "react";
import { GetDataFromSection } from "@/fetch/ClientFetch";
import styles from "../NavLinks.module.scss";

import Link from "next/link";
import { usePathname } from "next/navigation";

const ServisecSubMenu = ({
  isClicked,
  setIsClicked,
  subMenuRef,
  linkHref,
  className,
}) => {
  const { data, isLoading, error } = GetDataFromSection("services");
  const pathName = usePathname();

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
      <Link
        key={sub.slug}
        href={`${linkHref}/${sub.slug}`}
        onClick={() => {
          setBurgermenu(false);
          setIsClicked(false);
        }}
        // className="navLinkHover"
        // className={
        //   pathName.includes(sub.slug) ? "navLinkHover active" : "navLinkHover"
        // }
        className={subClassName()}
      >
        {`${sub.titleGradientEn} ${sub.titleEn}`}
      </Link>
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
