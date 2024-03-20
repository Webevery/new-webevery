'use client';

import { GetDataFromSection } from '@/fetch/ClientFetch';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import BlogCardItem from '../BlogCardItem/BlogCardItem';
import styles from './BlogIdCards.module.scss';

const BlogIdCards = ({ slug }) => {
  const { i18n, t } = useTranslation();
  const { data, error, isLoading } = GetDataFromSection('blogs');

  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    if (!isLoading && !error) {
      const filteredData = data?.filter((blog) => blog.slug !== slug);
      const shuffledData = filteredData.sort(() => 0.5 - Math.random());
      const slicedData = shuffledData.slice(0, 2);
      setBlogData(slicedData);
    }
  }, [slug]);

  return (
    <ul className={styles.cartContainer}>
      {blogData.map(
        ({
          slug,
          images,
          titleEn,
          title,
          descriptionEn,
          description,
          updatedAt,
        }) => (
          <BlogCardItem
            key={slug}
            slug={slug}
            images={images}
            titleEn={titleEn}
            title={title}
            descriptionEn={descriptionEn}
            description={description}
            updatedAt={updatedAt}
          />
        )
      )}
      {!isLoading && blogData?.length <= 0 && (
        <li className={styles.notFoundTextStyles}>
          <p>{t('BlogPage.NoArticles')}</p>
        </li>
      )}
    </ul>
  );
};

export default BlogIdCards;
