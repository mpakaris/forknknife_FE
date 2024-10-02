import Image from 'next/image';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function CarouselDrawerImages({ images }) {
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={10}  
        slidesPerView={1.2}   
        grabCursor={true}
      >
        {images.map((option, index) => (
          <SwiperSlide key={index}>
            <div className="h-60 flex items-center justify-center overflow-hidden">
              <Image
                src={`${option}`}
                width={240} // Base width
                height={240} // Fixed height to ensure a good aspect ratio
                alt={`${option.label} dish`} // Alt description for accessibility
                className="rounded-sm mx-auto object-cover h-full w-auto" // Image styling
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}