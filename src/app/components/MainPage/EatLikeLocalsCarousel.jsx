/* eslint-disable @next/next/no-img-element */
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

const EatLikeLocalsCarousel = ({ routes, setLocalRoute }) => {
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={20}
        slidesPerView={2.5}
        grabCursor={true}
      >
        {routes && routes.map((route, index) => (
          <SwiperSlide key={index}>
            <div onClick={() => setLocalRoute(route)} className="flex flex-col items-center rounded-md shadow-md bg-black my-2 overflow-hidden w-40 h-40">
              <div className="relative w-24 h-24"> 
                <img
                  src={route.imgUrl}
                  alt={`Budapest Hungary`}
                  className="object-cover w-full h-full rounded-full"
                />
              </div>
              <div className="flex-grow p-2 text-center flex flex-col justify-center items-center">
                <p className="text-md font-semibold text-white">{route.name}</p> 
                <p className="text-sm text-gray-400">local for {route.time}</p> 
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default EatLikeLocalsCarousel;