import Image from 'next/image';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function CarouselDrawerImages({ images, slidesPerView = 1.2, onSlideChange }) {
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={10}  
        slidesPerView={slidesPerView}   
        grabCursor={true}
        onSlideChange={(swiper) => onSlideChange(swiper.activeIndex)} // Pass active slide index to parent
      >
        {images.map((option, index) => (
          <SwiperSlide key={index}>
            <div className="h-80 flex items-center justify-center overflow-hidden">
              <Image
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