'use client';

import { useRouter } from 'next/navigation';
import styles from './BlogIdSection.module.scss';
import { GetIdDataFromSection } from '@/fetch/ClientFetch';
import { CldImage } from 'next-cloudinary';

const BlogIdSection = ({ params }) => {
  const router = useRouter();
  const { slug } = params;
  const { data, error, isLoading } = GetIdDataFromSection('blogs', slug);

  // const selectedBlogPost = blog?.find(
  //   (post) => post.id === parseInt(params.slug)
  // );
  // const { title, desc, image, img } = selectedBlogPost;

  // if (!data) {
  //   return <section>Пост не знайдено</section>;
  // }

  return (
    <section className={styles.blog}>
      <div className={`container ${styles.blogIdContainer}`}>
        <div className={styles.backContainer} onClick={() => router.back()}>
          <svg className={styles.backIcon}>
            <use href="sprite.svg#icon-arrowReadMore" />
          </svg>
          <p>To page with all articles</p>
        </div>
        <h1 className={styles.blogTitle}>{data?.titleEn}</h1>
        <div className={styles.blogContent}>
          <p className={styles.blogDesc}>{data?.descriptionEn}</p>
          <figure className={styles.firstImgContainer}>
            <CldImage
              src={data?.images[0]}
              alt="картинка для блогу"
              fill={true}
              className={styles.img}
            />
          </figure>
        </div>
        <div className={styles.blogContent}>
          <figure className={styles.lastImgContainer}>
            <CldImage
              src={data?.images[1]}
              alt="картинка для блогу"
              fill={true}
              className={styles.img}
            />
          </figure>
          <p className={styles.blogDesc}>{data?.descriptionEn}</p>
        </div>
      </div>
    </section>
  );
};

export default BlogIdSection;
