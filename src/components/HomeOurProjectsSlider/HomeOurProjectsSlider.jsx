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
// import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules';
import { Keyboard, Navigation, Pagination } from 'swiper/modules';
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
                // mousewheel={true}

                breakpoints={{
                    320: {
                        spaceBetween: 16,
                        // mousewheel: false,
                    },
                    360: {
                        spaceBetween: 16,
                        // mousewheel: false,
                    },
                    768: {
                        loop: false,
                        spaceBetween: 16,
                        // mousewheel: true,
                    },
                    1024: {
                        loop: false,
                        spaceBetween: 24,
                    },
                    1440: {
                        loop: false,
                        spaceBetween: 48,
                    },
                }}
                // modules={[Keyboard, Mousewheel, Navigation, Pagination]}
                modules={[Keyboard, Navigation, Pagination]}

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
                                        alt="Project photo 1 Vova"
                                    />
                                </div></Link>
                            <h2 className='slideTitle'> {item.titleEn} <span className='gradient'>{item.titleGradientEn}</span></h2>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}


export default HomeOurProjectsSlider;
