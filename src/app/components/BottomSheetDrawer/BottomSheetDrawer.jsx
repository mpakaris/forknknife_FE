import { useEffect, useRef, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa'; // Import the icon for the handle
import { animated, useSpring } from 'react-spring';
import BottomSheetContentController from "./BottomSheetContentController";

const BottomSheetDrawer = ({ isOpen, onClose, selectedLocation, currentLocation }) => {
  const [isDragging, setDragging] = useState(false);
  const scrollContainerRef = useRef(null);

  // useSpring to animate the Y value from bottom to top
  const [{ y }, api] = useSpring(() => ({
    y: 100,  // Start with y at 100% (off-screen at the bottom)
    config: { tension: 250, friction: 30 },  // Adjust the animation speed and smoothness
  }));

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

  // Animate the drawer when isOpen changes
  useEffect(() => {
    if (isOpen) {
      // If open, animate the drawer from the bottom (100%) to the top (0%)
      api.start({ y: 0 });
    } else {
      // If closed, move the drawer back down (off the screen)
      api.start({ y: 100 });
    }
  }, [isOpen, api]);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}
      <animated.div
        style={{
          transform: y.to((value) => `translateY(${value}%)`), // Translate based on y
          touchAction: 'none',
        }}
        className="fixed left-0 right-0 bg-white backdrop-blur-2xl 
        bg-white/30 z-50 shadow-lg rounded-t-xl h-full overflow-y-auto 
        scrollbar-hidden"
      >
        {/* Sticky ChevronDown div */}
        <div className="sticky top-0 flex items-center justify-center cursor-pointer my-3 rounded-lg bg-transparent z-50">
          <FaChevronDown
            className="text-white text-3xl mt-2"
            onClick={onClose}
          />
        </div>
        <div
          ref={scrollContainerRef}
          className="h-full overflow-y-auto scrollbar-hidden relative"
        >
          <div className="relative z-20">
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