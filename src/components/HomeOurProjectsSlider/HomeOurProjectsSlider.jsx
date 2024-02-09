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
                                // deliveryType='fetch'
                                // width="960"
                                // height="600"
                                fill
                                src="cld-sample"
                                // sizes="(max-width: 359px) 100%,
                                //   (max-width: 1024px) 50vw,
                                //   33vw"
                                alt="Project photo 1"
                            />
                        </div>
                        <h2 className='slideTitle'>Project <span className='gradient'>Title 1</span></h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slideContentWrapper">
                        <div className='imgWrapper'>
                            <CldImage
                                className='slideImg'
                                fill
                                src="sample"
                                alt="Project photo 1"
                            />
                        </div>
                        <h2 className='slideTitle'>Project <span className='gradient'>Title 2</span></h2>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slideContentWrapper">
                        <div className='imgWrapper'>
                            <CldImage
                                className='slideImg'
                                fill
                                src="cld-sample-4"
                                alt="Project photo 1"
                            />
                        </div>
                        <h2 className='slideTitle'>Project <span className='gradient'>Title 3</span></h2>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}


export default HomeOurProjectsSlider;
