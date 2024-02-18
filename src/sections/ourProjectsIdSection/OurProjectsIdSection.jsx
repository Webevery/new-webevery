import OurProjectId from '@/components/OurProjectId/OurProjectId';
// import styles from './OurProjectsIdSection.module.scss';

const OurProjectsIdSection = ({ params }) => {
  return (
    <section>
      <OurProjectId params={params} />
    </section>
  );
};

export default OurProjectsIdSection;
