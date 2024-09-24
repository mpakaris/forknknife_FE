import Image from 'next/image';
import { FaUtensils } from 'react-icons/fa'; // Font Awesome for the fork/knife icon
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function CarouselBig({options}) {


  return (
    <div className="w-full">
      <Swiper
        spaceBetween={20}
        slidesPerView={1.1} // Only 1 card per view since they are larger now
        grabCursor={true}
      >
        {options.map((option, index) => (
          <SwiperSlide key={index}>
            <div className="flex bg-white rounded-lg shadow-md mb-2 overflow-hidden h-26">
              <div className="w-1/3">
                <Image
                  src={`/images/${option.pic}`}
                  width={100}
                  height={100}
                  alt={`${option.name}`}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="w-2/3 p-3 flex flex-col justify-between">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm font-bold text-teal-500 bold">{option.label}</p>
                  <div className="flex items-center text-gray-600">
                    <FaUtensils className="mr-1" />
                    <span>{option.rating}</span>
                  </div>
                </div>
                <h2 className="text-md font-bold text-gray-900 mb-2">{option.name}</h2>
                <p className="text-sm text-gray-600 mb-4">{option.description}</p>
                <p className="text-md font-semibold text-gray-600">{option.price}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}