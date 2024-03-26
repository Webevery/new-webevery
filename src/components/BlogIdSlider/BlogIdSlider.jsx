'use client';

import { currentLanguages } from '@/data';
import { GetDataFromSection } from '@/fetch/ClientFetch';
import { CldImage } from 'next-cloudinary';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './BlogIdSlider.module.scss';
import './BlogIdSlider.css';

// Import Swiper styles

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { Pagination } from 'swiper/modules';
import ReadMore from '../Buttons/ReadMore/ReadMore';
import { formatDate } from '@/utils/dateUtils';

const BlogIdSlider = ({ slug }) => {
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
    <Swiper
      slidesPerView={1}
      spaceBetween={24}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
      }}
      modules={[Pagination]}
      className="blogIdCards"
    >
      {blogData?.map(
        ({
          slug,
          mainImage,
          titleEn,
          title,
          mainTextEn,
          mainText,
          updatedAt,
        }) => {
          const formattedDate = formatDate(updatedAt);
          return (
            <SwiperSlide className="cartItem" key={slug}>
              <div className={styles.cartImgContainer}>
                <CldImage
                  src={mainImage}
                  alt="img blog"
                  fill="true"
                  as="image"
                  priority={true}
                  className={styles.cartImg}
                  sizes="(max-width: 768px) 329px, (max-width: 1440px) 320px"
                />
              </div>

              <h3 className={styles.cartTitle}>
                {i18n.language === currentLanguages.EN ? titleEn : title}
              </h3>
              <p className={styles.cartDesc}>
                {i18n.language === currentLanguages.EN ? mainTextEn : mainText}
              </p>
              <div className={styles.bottomContainer}>
                <p className={styles.date}>{formattedDate}</p>
                <ReadMore href="blog" slug={slug} />
              </div>
            </SwiperSlide>
          );
        }
      )}
      {!isLoading && blogData?.length <= 0 && (
        <li className={styles.notFoundTextStyles}>
          <p>{t('BlogPage.NoArticles')}</p>
        </li>
      )}
    </Swiper>
  );
};

export default BlogIdSlider;
