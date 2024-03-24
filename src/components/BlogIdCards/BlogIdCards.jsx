'use client';

import { currentLanguages } from '@/data';
import { GetDataFromSection } from '@/fetch/ClientFetch';
import { CldImage } from 'next-cloudinary';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { format } from 'date-fns';

import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './BlogIdCards.module.scss';
import './BlogIdCards.css';

// Import Swiper styles

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { Autoplay, Pagination } from 'swiper/modules';

const BlogIdCards = ({ slug }) => {
  const { i18n, t } = useTranslation();
  const { data, error, isLoading } = GetDataFromSection('blogs');

  console.log(data);

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
      // autoplay={{
      //   delay: 5000,
      //   disableOnInteraction: false,
      //   pauseOnMouseEnter: true,
      // }}
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
      }}
      modules={[Pagination]}
      className="blogIdCards"
    >
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
          <SwiperSlide className="cartItem" key={slug}>
            <div className={styles.cartImgContainer}>
              <CldImage
                src={images[0]}
                alt="img blog"
                fill="true"
                priority={true}
                className={styles.cartImg}
                sizes="(max-width: 768px) 704px, (max-width: 1440px) 966px"
              />
            </div>

            <h3 className={styles.cartTitle}>
              {i18n.language === currentLanguages.EN ? titleEn : title}
            </h3>
            <p className={styles.cartDesc}>
              {i18n.language === currentLanguages.EN
                ? descriptionEn
                : description}
            </p>
            <div className={styles.bottomContainer}>
              <p className={styles.date}>
                {format(new Date(updatedAt), 'dd.MM.yyyy')}
              </p>
              <Link href={`/blog/${slug}`} className={styles.readMore}>
                <span className={styles.readMoreTitle}>
                  {t('Buttons.CardDetailsBtn')}
                </span>
                <svg
                  className={styles.readMoreIcon}
                  viewBox="0 0 24 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 3.5L19 0.613249L19 6.38675L24 3.5ZM-1.15607e-09 4L19.5 4L19.5 3L1.15607e-09 3L-1.15607e-09 4Z"
                    fill="url(#paint0_linear_945_6287)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_945_6287"
                      x1="5.16375e-08"
                      y1="3.78477"
                      x2="11.8197"
                      y2="-8.20395"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FAFF00" />
                      <stop offset="0.466629" stopColor="#00F0FF" />
                      <stop offset="1" stopColor="#0400B3" />
                    </linearGradient>
                  </defs>
                </svg>
              </Link>
            </div>
          </SwiperSlide>
        )
      )}
      {!isLoading && blogData?.length <= 0 && (
        <li className={styles.notFoundTextStyles}>
          <p>{t('BlogPage.NoArticles')}</p>
        </li>
      )}
    </Swiper>
    // <ul className={styles.cartContainer}>
    //   {blogData.map(
    //     ({
    //       slug,
    //       images,
    //       titleEn,
    //       title,
    //       descriptionEn,
    //       description,
    //       updatedAt,
    //     }) => (
    //       <li className={styles.cartItem} key={slug}>
    //         <div className={styles.cartImgContainer}>
    //           <CldImage
    //             src={images[0]}
    //             alt="img blog"
    //             fill="true"
    //             priority={true}
    //             className={styles.cartImg}
    //             sizes="(max-width: 768px) 704px, (max-width: 1440px) 966px"
    //           />
    //         </div>

    //         <h3 className={styles.cartTitle}>
    //           {i18n.language === currentLanguages.EN ? titleEn : title}
    //         </h3>
    //         <p className={styles.cartDesc}>
    //           {i18n.language === currentLanguages.EN
    //             ? descriptionEn
    //             : description}
    //         </p>
    //         <div className={styles.bottomContainer}>
    //           <p className={styles.date}>
    //             {format(new Date(updatedAt), 'dd.MM.yyyy')}
    //           </p>
    //           <Link href={`/blog/${slug}`} className={styles.readMore}>
    //             <span className={styles.readMoreTitle}>
    //               {t('Buttons.CardDetailsBtn')}
    //             </span>
    //             <svg
    //               className={styles.readMoreIcon}
    //               viewBox="0 0 24 7"
    //               fill="none"
    //               xmlns="http://www.w3.org/2000/svg"
    //             >
    //               <path
    //                 d="M24 3.5L19 0.613249L19 6.38675L24 3.5ZM-1.15607e-09 4L19.5 4L19.5 3L1.15607e-09 3L-1.15607e-09 4Z"
    //                 fill="url(#paint0_linear_945_6287)"
    //               />
    //               <defs>
    //                 <linearGradient
    //                   id="paint0_linear_945_6287"
    //                   x1="5.16375e-08"
    //                   y1="3.78477"
    //                   x2="11.8197"
    //                   y2="-8.20395"
    //                   gradientUnits="userSpaceOnUse"
    //                 >
    //                   <stop stopColor="#FAFF00" />
    //                   <stop offset="0.466629" stopColor="#00F0FF" />
    //                   <stop offset="1" stopColor="#0400B3" />
    //                 </linearGradient>
    //               </defs>
    //             </svg>
    //           </Link>
    //         </div>
    //       </li>
    //       // <BlogCardItem
    //       //   key={slug}
    //       //   slug={slug}
    //       //   images={images}
    //       //   titleEn={titleEn}
    //       //   title={title}
    //       //   descriptionEn={descriptionEn}
    //       //   description={description}
    //       //   updatedAt={updatedAt}
    //       // />
    //     )
    //   )}
    //   {!isLoading && blogData?.length <= 0 && (
    //     <li className={styles.notFoundTextStyles}>
    //       <p>{t('BlogPage.NoArticles')}</p>
    //     </li>
    //   )}
    // </ul>
  );
};

export default BlogIdCards;
