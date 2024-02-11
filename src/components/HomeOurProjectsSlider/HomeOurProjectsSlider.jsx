"use client"
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './HomeOurProjectsSlider.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { CldImage } from 'next-cloudinary';
// import { workingProcessData } from '@/data/workingProcessData';


const HomeOurProjectsSlider = () => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                // spaceBetween={24}
                pagination={{
                    clickable: true,
                }}
                // breakpoints={{
                //     768: {
                //         slidesPerView: 2,
                //         spaceBetween: 24,
                //     },
                //     1024: {
                //         slidesPerView: 4,
                //         spaceBetween: 24,
                //     },
                //     1440: {
                //         slidesPerView: 4,
                //         spaceBetween: 24,
                //     },
                // }}
                modules={[Pagination]}
                className='HomeOurProjectsSwiper'
            >
                {/* {workingProcessData.map(item => (
                    <SwiperSlide key={item.id}>
                        <div className="slideContentWrapper">
                            <h4 className="titleGradient slideTitle">
                                {item.titleEn}
                            </h4>
                            <p className="slideText">
                                {item.textEn}
                            </p>
                        </div>
                    </SwiperSlide>
                ))} */}

                <SwiperSlide>
                    <div className="slideContentWrapper">
                        <div className='imgWrapper'>
                            <CldImage
                                className='slideImg'
                                fill
                                src="photo_2024-02-10_22-09-29_bfambo"
                                sizes="(max-width: 1023px) 100vw, (max-width: 1440px) 70vw, 1000px"
                                alt="Project photo 1 Vova"
                            />
                        </div>
                        <h2 className='slideTitle'> Site for <span className='gradient'>building company</span></h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slideContentWrapper">
                        <div className='imgWrapper'>
                            <CldImage
                                className='slideImg'
                                fill
                                src="photo_2024-02-10_22-09-38_yr2tka"
                                sizes="(max-width: 1023px) 100vw, (max-width: 1440px) 70vw, 1000px"
                                alt="Project photo 2 Natasha"
                            />
                        </div>
                        <h2 className='slideTitle'>Look at <span className='gradient'>your favorite flowers</span></h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slideContentWrapper">
                        <div className='imgWrapper'>
                            <CldImage
                                className='slideImg'
                                fill
                                src="photo_2024-02-10_22-10-03_mjul8p"
                                sizes="(max-width: 1023px) 100vw, (max-width: 1440px) 70vw, 1000px"
                                alt="Project photo 3 Dimka"
                            />
                        </div>
                        <h2 className='slideTitle'> You can try this <span className='gradient'>wonderful food</span></h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slideContentWrapper">
                        <div className='imgWrapper'>
                            <CldImage
                                className='slideImg'
                                fill
                                src="photo_2024-02-10_22-09-19_hodidj"
                                sizes="(max-width: 1023px) 100vw, (max-width: 1440px) 70vw, 1000px"
                                alt="Project photo 4 Den"
                            />
                        </div>
                        <h2 className='slideTitle'> Site for <span className='gradient'>building company</span></h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slideContentWrapper">
                        <div className='imgWrapper'>
                            <CldImage
                                className='slideImg'
                                fill
                                src="photo_2024-02-10_22-09-12_au6tvl"
                                sizes="(max-width: 1023px) 100vw, (max-width: 1440px) 70vw, 1000px"
                                alt="Project photo 5 Nastya"
                            />
                        </div>
                        <h2 className='slideTitle'>Look at <span className='gradient'>your favorite flowers</span></h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slideContentWrapper">
                        <div className='imgWrapper'>
                            <CldImage
                                className='slideImg'
                                fill
                                src="photo_2024-02-10_22-09-22_iofgqc"
                                sizes="(max-width: 1023px) 100vw, (max-width: 1440px) 70vw, 1000px"
                                alt="Project photo 6 Denis"
                            />
                        </div>
                        <h2 className='slideTitle'> You can try this <span className='gradient'>wonderful food</span></h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slideContentWrapper">
                        <div className='imgWrapper'>
                            <CldImage
                                className='slideImg'
                                fill
                                src="photo_2024-02-10_22-09-26_vkvkrm"
                                sizes="(max-width: 1023px) 100vw, (max-width: 1440px) 70vw, 1000px"
                                alt="Project photo 7 Maks"
                            />
                        </div>
                        <h2 className='slideTitle'> Site for <span className='gradient'>building company</span></h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slideContentWrapper">
                        <div className='imgWrapper'>
                            <CldImage
                                className='slideImg'
                                fill
                                src="photo_2024-02-10_22-09-41_hkjovi"
                                sizes="(max-width: 1023px) 100vw, (max-width: 1440px) 70vw, 1000px"
                                alt="Project photo 8 Vika"
                            />
                        </div>
                        <h2 className='slideTitle'>Look at <span className='gradient'>your favorite flowers</span></h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slideContentWrapper">
                        <div className='imgWrapper'>
                            <CldImage
                                className='slideImg'
                                fill
                                src="photo_2024-02-10_22-09-14_crk6ed"
                                sizes="(max-width: 1023px) 100vw, (max-width: 1440px) 70vw, 1000px"
                                alt="Project photo 9 Dima"
                            />
                        </div>
                        <h2 className='slideTitle'> You can try this <span className='gradient'>wonderful food</span></h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slideContentWrapper">
                        <div className='imgWrapper'>
                            <CldImage
                                className='slideImg'
                                fill
                                src="photo_2024-02-10_22-09-46_xv7zu9"
                                sizes="(max-width: 1023px) 100vw, (max-width: 1440px) 70vw, 1000px"
                                alt="Project photo 10 Maks"
                            />
                        </div>
                        <h2 className='slideTitle'> Site for <span className='gradient'>building company</span></h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slideContentWrapper">
                        <div className='imgWrapper'>
                            <CldImage
                                className='slideImg'
                                fill
                                src="photo_2024-02-10_22-09-50_sbou5l"
                                sizes="(max-width: 1023px) 100vw, (max-width: 1440px) 70vw, 1000px"
                                alt="Project photo 11 Ivika"
                            />
                        </div>
                        <h2 className='slideTitle'>Look at <span className='gradient'>your favorite flowers</span></h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slideContentWrapper">
                        <div className='imgWrapper'>
                            <CldImage
                                className='slideImg'
                                fill
                                src="photo_2024-02-10_22-09-31_dapqnd"
                                sizes="(max-width: 1023px) 100vw, (max-width: 1440px) 70vw, 1000px"
                                alt="Project photo 12 Andrey"
                            />
                        </div>
                        <h2 className='slideTitle'> You can try this <span className='gradient'>wonderful food</span></h2>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}


export default HomeOurProjectsSlider;
