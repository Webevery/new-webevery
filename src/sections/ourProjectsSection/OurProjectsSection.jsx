import { getOurProjects } from '@/lib/data';
import styles from './OurProjectsSection.module.scss';
import OurProjects from '@/components/OurProjects/OurProjects';

const OurProjectsSection = async () => {
  const data = await getOurProjects();

  console.log(data);
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
