'use client';

import styles from './OurProjectsSection.module.scss';
import OurProjects from '@/components/OurProjects/OurProjects';
import { GetOurProjects } from '@/fetch/ClientFetch';

const OurProjectsSection = () => {
  const { data, error, isLoading } = GetOurProjects();
  // console.log("data", data);
  return (
    <section>
      <div className={`container ${styles.projectContainer}`}>
        <h1 className={styles.title}>Our Projects</h1>
        <ul className={styles.ourProjectsList}>
          <OurProjects data={data} />
        </ul>
      </div>
    </section>
  );
};

export default OurProjectsSection;