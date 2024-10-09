import { useState } from 'react';
import CarouselDrawerImages from "./CarouselDrawerImages";

export default function BottomSheetImpressions() {
  const [activeCarousel, setActiveCarousel] = useState('restaurants'); // State to track active carousel

  // Define the images for both carousels
  const carouselImages = {
    restaurants: [
      '/images/vian1.jpeg', 
      '/images/stex1.jpeg', 
      '/images/jazz1.jpeg', 
      '/images/getto1.jpeg'
    ],
    foods: [
      '/images/dish1.jpg', 
      '/images/dish2.jpeg', 
      '/images/dish3.jpeg', 
      '/images/dish4.jpeg',
      '/images/dish5.jpeg',
    ],
  };

  const handleCarouselSwitch = (type) => {
    setActiveCarousel(type);
  };

  return (
    <div className='pills'>
      {/* Image Carousel */}
      <div className="overflow-x-auto">
        <h2 className="text-md font-bold text-gray-200 mt-2 mb-3">Impressions</h2>
        <div className="flex mb-4">
          <div 
            className={`flex-1 p-4 text-center cursor-pointer transition-transform transform ${
              activeCarousel === 'restaurants' ? 'bg-teal-800 text-white shadow-lg' : 'bg-gray-200'
            } rounded-l-sm hover:scale-100`}
            onClick={() => handleCarouselSwitch('restaurants')}
          >
            Location
          </div>
          <div 
            className={`flex-1 p-4 text-center cursor-pointer transition-transform transform ${
              activeCarousel === 'foods' ? 'bg-teal-800 text-white shadow-lg' : 'bg-gray-200'
            } rounded-r-sm hover:scale-100`}
            onClick={() => handleCarouselSwitch('foods')}
          >
            Food
          </div>
        </div>
        <CarouselDrawerImages
          images={carouselImages[activeCarousel]}
        />
      </div>
    </div>
  );
}