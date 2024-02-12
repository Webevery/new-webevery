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
import { Keyboard, Mousewheel, Navigation, Pagination } from 'swiper/modules';
import { CldImage } from 'next-cloudinary';
// import { workingProcessData } from '@/data/workingProcessData';


const HomeOurProjectsSlider = () => {
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
                mousewheel={true}

                breakpoints={{
                    320: {
                        spaceBetween: 16,
                        mousewheel: false,
                    },
                    360: {
                        spaceBetween: 16,
                        mousewheel: false,
                    },
                    768: {
                        loop: false,
                        spaceBetween: 16,
                        mousewheel: true,
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
                modules={[Keyboard, Mousewheel, Navigation, Pagination]}
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
                                src="photo_2024-02-10_22-09-26_vkvkrm"
                                sizes="(max-width: 1023px) 100vw, (max-width: 1440px) 70vw, 1000px"
                                alt="Project photo 3 Maks"
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
                                src="photo_2024-02-10_22-09-36_nhibgv"
                                sizes="(max-width: 1023px) 100vw, (max-width: 1440px) 70vw, 1000px"
                                alt="Project photo 7 Dimka"
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
                                src="photo_2024-02-10_22-09-31_dapqnd"
                                sizes="(max-width: 1023px) 100vw, (max-width: 1440px) 70vw, 1000px"
                                alt="Project photo 10 Andrey"
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
                                src="photo_2024-02-10_22-09-54_a5obbu"
                                sizes="(max-width: 1023px) 100vw, (max-width: 1440px) 70vw, 1000px"
                                alt="Project photo 12 Maks"
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
