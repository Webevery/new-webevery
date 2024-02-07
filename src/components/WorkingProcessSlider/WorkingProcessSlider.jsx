"use client"
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './WorkingProcessSlider.css';

// import required modules
import { Pagination } from 'swiper/modules';

const WorkingProcessSlider = () => {
    return (
        <>
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
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 24,
                    },
                    1440: {
                        slidesPerView: 4,
                        spaceBetween: 24,
                    },
                }}
                modules={[Pagination]}
                className='WorkingProcessSwiper'
            >
                <SwiperSlide>
                    <div className="slideContentWrapper">
                        <h4>
                            First call with manager
                        </h4>
                        <p>
                            You call by phone or leave a request for a call in the form, we call you in 1 minute. We discuss the idea of your project.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide><div className="slideContentWrapper">
                    <h4>
                        Discussion and preparation of T.A.
                    </h4>
                    <p>
                        We’ll attentively listen to all your preferences and finalize the project’s specifications according to your needs. Your satisfaction is our priority.
                    </p>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slideContentWrapper">
                        <h4>
                            Design alignment and development process
                        </h4>
                        <p>
                            Once the design is agreed, the team proceeds to develop a complete final product.
                        </p>
                    </div></SwiperSlide>
                <SwiperSlide>
                    <div className="slideContentWrapper">
                        <h4>
                            Final Product and Access Transfer
                        </h4>
                        <p>
                            After completing the project, we provide you with all the necessary files and access passwords.
                        </p>
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    );
}


export default WorkingProcessSlider;
