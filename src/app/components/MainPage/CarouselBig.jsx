import { FaUtensils } from 'react-icons/fa';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { getDistanceBetweenLocations } from "../../utils/getDistanceBetweenLocations";

export default function CarouselBig({ options, onLocationSelect }) {
  const userLocation = { lat: 47.48958612315468, lng: 19.06244937021245 };

  return (
    <div className="w-full">
      <Swiper
        spaceBetween={20}
        slidesPerView={1.1} // Only 1 card per view since they are larger now
        grabCursor={true}
      >
        {options.map((option, index) => (
          <SwiperSlide key={index}>
            <div 
              className="flex bg-white rounded-lg shadow-md mb-2 overflow-hidden h-60"
              onClick={() => onLocationSelect(option.uuid)}
            >
              <div className="w-1/2 h-full">
                {option.pictures && option.pictures.length > 0 ? (
                  <img
                    src={option.pictures[0]}
                    alt={`${option.name}`}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span>No Image</span>
                  </div>
                )}
              </div>
              <div className="w-1/2 p-3 flex flex-col justify-between">
                <div className="flex justify-between items-center">
                  <p className="text-sm font-bold text-teal-800">
                    {getDistanceBetweenLocations(
                      userLocation,
                      { lat: option.lat, lng: option.lng }
                    )} km
                  </p>
                  <div className="flex items-center text-teal-800">
                    <FaUtensils className="mr-1" />
                    <span>4.5</span>
                  </div>
                </div>
                <h2 className="text-md font-bold text-teal-900 mb-2">{option.name}</h2>
                <p className="text-sm text-gray-600 mb-4">{option.address}</p>
                <p className="text-md font-semibold text-gray-600">{option.price}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}