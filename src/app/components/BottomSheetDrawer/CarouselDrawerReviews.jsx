import { useState } from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

const CarouselDrawerReviews = ({ options }) => {
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={30}
        slidesPerView={1.2}
        grabCursor={true}
      >
        {options && options.map((option, index) => (
          <SwiperSlide key={index}>
            <ReviewCard review={option} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const ReviewCard = ({ review }) => {
  const [expanded, setExpanded] = useState(false);
  const { user, review: reviewText, date, rating } = review; // Ensure the rating is part of the review object

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`p-4 my-3 border-2 border-gray-100 bg-white rounded-lg shadow-md transition-all duration-300 ${expanded ? 'h-auto' : 'h-50'}`}>
      <div className="flex justify-between items-center border-b-2 border-gray-100">
        <h3 className="font-semibold text-md text-teal-800">{user}</h3>
        <div className="flex">
          {Array.from({ length: 5 }, (_, index) => (
            <svg
              key={index}
              className={`w-4 h-4 ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`} // Change color based on rating
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 .587l3.668 7.431 8.157 1.193-5.887 5.724 1.388 8.063L12 18.897l-7.326 3.84 1.388-8.063-5.887-5.724 8.157-1.193z" />
            </svg>
          ))}
        </div>
      </div>
      <p className="text-gray-400 text-xs mt-1">{date}</p>
      <blockquote className="mt-5 text-center italic">
        <p className={`text-gray-800 text-sm ${expanded ? 'line-clamp-none' : 'line-clamp-3'}`}>
          {expanded ? reviewText : `${reviewText.slice(0, 100)}...`}
        </p>
      </blockquote>
      <div className='flex justify-end mb-3'>
        <button
          onClick={toggleExpanded}
          className="mt-2 text-teal-600 underline text-xs"
        >
          {expanded ? "See less" : "Read more"}
        </button>
      </div>
    </div>
  );
};

export default CarouselDrawerReviews;