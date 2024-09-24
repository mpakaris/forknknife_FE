import Image from 'next/image';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function CarouselSmall({options}) {

  

  return (
    <div className="w-full">
      <Swiper
        spaceBetween={20}  
        slidesPerView={2.4}   
        grabCursor={true}
      >
        {options.map((option, index) => (
          <SwiperSlide key={index}>
            <div className="rounded-lg shadow-md items-center my-2 pb-2 ">
              <Image
                src={`/images/${option.pic}`}
                width={240}
                height={240}
                alt={`${option.label} dish`}
                className="rounded-sm  mx-auto"
              />
              <p className="mt-2 text-center text-sm font-semibold">{option.label}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}