import { useEffect, useRef, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa'; // Import the icon for the handle
import { animated, useSpring } from 'react-spring';
import BottomSheetContentController from "./BottomSheetContentController";
import CarouselDrawerImages from './CarouselDrawerImages';

const BottomSheetDrawer = ({ isOpen, onClose, selectedLocation, currentLocation }) => {
  const [isDragging, setDragging] = useState(false);
  const [{ y }, api] = useSpring(() => ({ y: 0 }));
  const scrollContainerRef = useRef(null);

  // Function to handle swipe down to close
  const handleSwipeToClose = () => {
    const scrollTop = scrollContainerRef.current.scrollTop;
    if (scrollTop === 0) {
      onClose(); // Close the BottomSheetDrawer when at the top of the scroll
    }
  };

  // Detect scroll event and trigger swipe down to close
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const handleScroll = () => {
      if (scrollContainer.scrollTop === 0 && isDragging) {
        handleSwipeToClose();
      }
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
    };
  }, [isDragging]);

  // Extract image URLs from selectedLocation.serpAPI.images_results
  const imageUrls = selectedLocation?.pictures || [];

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-yellow bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}
      <animated.div
        style={{ y, touchAction: 'none' }}
        className="fixed top-0 left-0 right-0 bg-black z-50 shadow-lg 
          rounded-t-xl h-full overflow-y-auto scrollbar-hidden"
      >
        <div className="flex items-center justify-center cursor-pointer my-3 rounded-lg">
          <FaChevronDown
            className="text-teal-600 text-2xl mt-2"
            onClick={onClose}
          />
        </div>
        <div
          ref={scrollContainerRef}
          className="h-full overflow-y-auto scrollbar-hidden relative bg-black"
        >
          <div className="relative heroImage h-[400px]">
            <CarouselDrawerImages images={imageUrls} slidesPerView={1} />
            <div className="absolute inset-x-0 -bottom-10 h-[200px] bg-gradient-to-t from-black via-gray-950 to-transparent z-10"></div>
          </div>
          <div className="relative z-20 p-4 bg-black -mt-20">
            <BottomSheetContentController 
              selectedLocation={selectedLocation}
              currentLocation={currentLocation}
            />
          </div>
        </div>
      </animated.div>
    </>
  );
};

export default BottomSheetDrawer;