"use client";

import styles from "./TeamSection.module.scss";
import { GetDataFromSection } from "@/fetch/ClientFetch";
import { shuffleArray } from "@/helpers/shuffleArray";
import { CldImage } from "next-cloudinary";

const TeamSection = () => {
  const { data, isLoading, error } = GetDataFromSection("team");

  let newData = [];
  if (!isLoading) {
    newData = [...data];
  }

  newData = shuffleArray(newData);

  return (
    <section className={styles.team}>
      <div className={`container ${styles.teamContainer}`}>
        <div className={styles.titleTeamContainer}>
          <h1 className={styles.titleTeam}>
            <span>Team</span>
          </h1>
          <h2 className={styles.descTeam}>
            let&apos;s get to know those who work for you
          </h2>
        </div>
        <ul className={styles.cartContainer}>
          {newData?.map((item) => (
            <li key={item.slug} className={styles.cartItem}>
              <div className={styles.cartImgContainer}>
                <CldImage
                  src={item.photo}
                  alt={item.nameEn}
                  fill="true"
                  className={styles.cartImg}
                  sizes="50vw"
                />
              </div>

              <h3 className={styles.cartName}>{item.nameEn}</h3>
              <p className={styles.cartJobTitle}>{item.positionEn}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TeamSection;
