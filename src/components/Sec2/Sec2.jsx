import React from 'react';
import "react-multi-carousel/lib/styles.css";
import slide1 from '../../assets/home/slide1.jpg'
import slide2 from '../../assets/home/slide2.jpg'
import slide3 from '../../assets/home/slide3.jpg'
import slide4 from '../../assets/home/slide4.jpg'
import slide5 from '../../assets/home/slide5.jpg'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";


// import required modules
import { FreeMode, Pagination } from "swiper";

const Sec2 = () => {
    return (
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={20}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><img src={slide1} alt="" className='w-full' /> <h3 className='text-center -mt-12 font-medium text-white text-xl md:text-3xl'>salad</h3></SwiperSlide>
                <SwiperSlide><img src={slide2} alt="" className='w-full' /> <h3 className='text-center -mt-12 font-medium text-white text-xl md:text-3xl'>pizza</h3></SwiperSlide>
                <SwiperSlide><img src={slide3} alt="" className='w-full' /><h3 className='text-center -mt-12 font-medium text-white text-xl md:text-3xl'>soup</h3></SwiperSlide>
                <SwiperSlide><img src={slide4} alt="" className='w-full' /><h3 className='text-center -mt-12 font-medium text-white text-xl md:text-3xl'>dessert</h3></SwiperSlide>
                <SwiperSlide><img src={slide5} alt="" className='w-full' /><h3 className='text-center -mt-12 font-medium text-white text-xl md:text-3xl'>salad</h3></SwiperSlide>
            </Swiper>
        </>
    );
};

export default Sec2;