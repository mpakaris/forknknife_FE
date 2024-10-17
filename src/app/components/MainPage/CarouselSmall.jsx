/* eslint-disable @next/next/no-img-element */
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

const CarouselSmall = ({ options, onRouteSelect }) => {
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={20}
        slidesPerView={1.4}
        grabCursor={true}
      >
        {options.map((option, index) => (
          <SwiperSlide key={index}>
            <div onClick={()=>onRouteSelect(option)} 
              className="flex flex-col items-center rounded-full shadow-md bg-white my-2 overflow-hidden w-60 h-60"> {/* Circular card dimensions */}
              <div className="relative w-full h-50"> {/* Set image container to 50% of the card height */}
                <img
                  src={option.imgUrl}
                  alt={`Budapest Hungary`}
                  className="object-cover w-full h-full rounded-t-full" 
                />
              </div>
              <div className="flex-grow text-center flex flex-col pt-2 items-center">
                <p className="text-lg font-semibold">{option.name}</p> 
                <p className="text-sm font-semibold">{option.profile}</p> 
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CarouselSmall;