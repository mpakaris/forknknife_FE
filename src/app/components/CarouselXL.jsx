import Image from 'next/image';
import { FaUtensils } from 'react-icons/fa'; // Font Awesome for the fork/knife icon
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function CarouselXL({options}) {


  return (
    <div className="w-full">
      <Swiper
        spaceBetween={30}
        slidesPerView={1.2} // Only 1 card per view since they are larger now
        grabCursor={true}
      >
        {options.map((option, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden mb-2">
              <div className="h-40">
                <Image
                  src={`/images/${option.pic}`}
                  width={400}
                  height={300}
                  alt={`${option.name}`}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-4 flex flex-col mb-2">
                <div className="flex justify-between items-center">
                  <p className="text-sm text-teal-500 font-bold">{option.label}</p>
                  <div className="flex items-center text-gray-600">
                    <FaUtensils className="mr-1" />
                    <span>{option.rating}</span>
                  </div>
                </div>
                <h2 className="text-md font-bold text-gray-900">{option.name}</h2>
                <p className="text-sm text-gray-600">{option.description}</p>
                <span className="mt-5">
                  <p className="bg-teal-700 text-white font-bold text-xs py-2 px-4 rounded-full inline-flex items-center">{option.comment}</p>
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}