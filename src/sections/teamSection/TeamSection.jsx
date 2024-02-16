"use client"

import styles from "./TeamSection.module.scss";
import { team } from '@/data/team';
//import Image from 'next/image';
import { CldImage } from 'next-cloudinary';

const TeamSection = () => {
  return (
    <section>
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
            {team.map(({ id, img, alt, name, jobTitle }) => (
              <li key={id} className={styles.cartItem}>
                <div className={styles.cartImgContainer}>
                  <CldImage
                    src={img}
                    alt={alt}
                    fill="true"
                    className={styles.cartImg}
                  />
                </div>

                <h3 className={styles.cartName}>{name}</h3>
                <p className={styles.cartJobTitle}>{jobTitle}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </section>
  );
};

export default TeamSection;
