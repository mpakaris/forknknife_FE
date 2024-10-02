import { useEffect, useRef, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa'; // Import the icon for the handle
import { animated, useSpring } from 'react-spring';
import BottomSheetContentController from "./BottomSheetContentController";

const BottomSheetDrawer = ({ isOpen, onClose, selectedLocation, currentLocation }) => {
  const [isDragging, setDragging] = useState(false);
  const [{ y }, api] = useSpring(() => ({ y: 0 }));
  const scrollContainerRef = useRef(null);

  // Function to handle the additional swipe down to close
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSwipeToClose = () => {
    const scrollTop = scrollContainerRef.current.scrollTop;

    // If at the top of the scroll and user swipes down
    if (scrollTop === 0) {
      onClose(); // Close the BottomSheetDrawer
    }
  };

  // Detect scroll event and trigger the swipe down to close at the top
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
  }, [handleSwipeToClose, isDragging]);

  const closeDrawer = () => {
    setModal(null);
    onClose();
  }

  const setModalScreen = (newScreen) => {
    setModal(newScreen);
  }

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeDrawer}
        />
      )}
      <animated.div
        style={{ y, touchAction: 'none' }} // Disable touch scroll while dragging
        className="fixed top-0 left-0 right-0 bg-white z-50 shadow-lg 
        rounded-t-3xl p-4 h-full overflow-y-auto"
      >
        {/* New down arrow icon for closing the sheet */}
        <div className="flex items-center justify-center cursor-pointer mb-4">
          <FaChevronDown
            className="text-teal-600 text-2xl"
            onClick={onClose} // Close the sheet when the icon is tapped
          />
        </div>

        <div
          ref={scrollContainerRef}
          className="h-full overflow-y-auto"
        >
          <BottomSheetContentController 
            selectedLocation={selectedLocation}
            currentLocation={currentLocation}
          />
        </div>
      </animated.div>
    </>
  );
};

export default BottomSheetDrawer;