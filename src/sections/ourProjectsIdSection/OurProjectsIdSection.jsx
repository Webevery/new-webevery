import OurProjectId from '@/components/OurProjectId/OurProjectId';
import { getOurProject } from '@/lib/data';
import styles from './OurProjectsIdSection.module.scss';

const OurProjectsIdSection = async ({ params }) => {
  const data = await getOurProject(params.id);
  return (
    <section>
      <OurProjectId data={data} />
    </section>
  );
};

export default OurProjectsIdSection;
