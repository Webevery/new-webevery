'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { blog } from '@/data/blog';
import styles from './BlogIdSection.module.scss';

const BlogIdSection = ({ params }) => {
  const router = useRouter();
  const selectedBlogPost = blog?.find(
    (post) => post.id === parseInt(params.id)
  );
  const { title, desc, image, img } = selectedBlogPost;

  if (!selectedBlogPost) {
    return <section>Пост не знайдено</section>;
  }

  return (
    <section className={styles.blog}>
      <div className={`container ${styles.blogIdContainer}`}>
        <div className={styles.backContainer} onClick={() => router.back()}>
          <svg className={styles.backIcon}>
            <use href="sprite.svg#icon-arrowReadMore" />
          </svg>
          <p>To page with all articles</p>
        </div>
        <h1 className={styles.blogTitle}>{title}</h1>
        <div className={styles.blogContent}>
          <p className={styles.blogDesc}>{desc}</p>
          <figure className={styles.firstImgContainer}>
            <Image
              src={image}
              alt="картинка для блогу"
              fill={true}
              className={styles.img}
            />
          </figure>
        </div>
        <div className={styles.blogContent}>
          <figure className={styles.lastImgContainer}>
            <Image
              src={img}
              alt="картинка для блогу"
              fill={true}
              className={styles.img}
            />
          </figure>
          <p className={styles.blogDesc}>{desc}</p>
        </div>
      </div>
    </section>
  );
};

export default BlogIdSection;
