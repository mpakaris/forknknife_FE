/* eslint-disable @next/next/no-img-element */
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

const CarouselSmall = ({ options }) => {
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={10}
        slidesPerView={1.6}
        grabCursor={true}
      >
        {options.map((option, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center rounded-full shadow-md bg-white my-2 overflow-hidden w-60 h-60"> {/* Circular card dimensions */}
              <div className="relative w-full h-50"> {/* Set image container to 50% of the card height */}
                <img
                  src={option.imgUrl}
                  alt={`Budapest Hungary`}
                  className="object-cover w-full h-full rounded-t-full" // Use w-full and h-full to make it fit the container
                />
              </div>
              <div className="flex-grow p-3 text-center flex flex-col justify-center items-center">
                <p className="text-lg font-semibold">{option.name}</p> {/* Increased text size */}
                <p className="text-sm font-semibold">{option.profile}</p> {/* Increased text size */}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CarouselSmall;