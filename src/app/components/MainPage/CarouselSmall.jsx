import Image from 'next/image';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

const CarouselSmall = ({ options }) => {
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={20}
        slidesPerView={2.2}
        grabCursor={true}
      >
        {options.map((option, index) => (
          <SwiperSlide key={index}>
            <div className="rounded-lg shadow-md bg-white my-2 overflow-hidden">
              <div className="relative w-full" style={{ height: '120px' }}>
                <Image
                  src={`/images/${option.pic}`}
                  alt={`${option.label} dish`}
                  layout="fill" 
                  className="object-cover rounded-t-lg" />
              </div>
              <div className="p-3 text-center">
                <p className="text-sm font-semibold">{option.label}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CarouselSmall;