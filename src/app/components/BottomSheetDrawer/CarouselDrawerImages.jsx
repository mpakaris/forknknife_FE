/* eslint-disable @next/next/no-img-element */
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function CarouselDrawerImages({ images, slidesPerView = 1.2 }) {
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={10}  
        slidesPerView={slidesPerView}   
        grabCursor={true}
      >
        {images.map((option, index) => (
          <SwiperSlide key={index}>
            <div className="h-80 flex items-center justify-center overflow-hidden">
              <img
                src={`${option}`}
                width={440} 
                height={440} 
                alt={`${option.label} dish`} 
                className="rounded-sm mx-auto object-cover h-full w-auto"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}