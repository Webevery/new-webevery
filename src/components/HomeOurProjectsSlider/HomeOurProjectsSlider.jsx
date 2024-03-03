"use client"
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './HomeOurProjectsSlider.css';

// import required modules
import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper/modules';
import { CldImage } from 'next-cloudinary';
import Link from 'next/link';


const HomeOurProjectsSlider = ({ data }) => {

    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={16}
                keyboard={{
                    enabled: true,
                }}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                // autoplay={{
                //     delay: 3000,
                //     disableOnInteraction: false,
                // }}

                breakpoints={{
                    320: {
                        spaceBetween: 16,
                    },
                    360: {
                        spaceBetween: 16,
                    },
                    768: {
                        spaceBetween: 16,
                    },
                    1024: {
                        spaceBetween: 24,
                    },
                    1440: {
                        spaceBetween: 48,
                    },
                }}
                modules={[Autoplay, Keyboard, Navigation, Pagination]}

                className='HomeOurProjectsSwiper'
            >
                {data?.map(item => (
                    <SwiperSlide key={item.slug}>
                        <div className="slideContentWrapper">
                            <Link className="projectLink" href={`/ourProjects/${item.slug}`}>
                                <div className='imgWrapper'>
                                    <CldImage
                                        className='slideImg'
                                        fill
                                        src={item.heroImage}
                                        sizes="(max-width: 1023px) 100vw, (max-width: 1440px) 70vw, 1000px"
                                        alt={`Photo of ${item.titleEn} ${item.titleGradientEn}`}
                                    />
                                </div>
                            </Link>
                            {/* <h3 className='slideTitle'> {item.titleEn} <span className='gradient'>{item.titleGradientEn}</span></h3> */}
                            <h3 className='slideTitle'> {item.title} <span className='gradient'>{item.titleGradient}</span></h3>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}


export default HomeOurProjectsSlider;
