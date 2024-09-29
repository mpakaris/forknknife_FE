import { useDrag } from '@use-gesture/react';
import { useEffect, useRef, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa'; // Import the icon for the handle
import { animated, useSpring } from 'react-spring';
import BottomSheetDrawerModalContent from "./BottomSheetDrawerModalContent";

const BottomSheetDrawer = ({ isOpen, onClose, location }) => {
  const [isDragging, setDragging] = useState(false);
  const [{ y }, api] = useSpring(() => ({ y: 0 }));
  const scrollContainerRef = useRef(null);

  // Handle swipe when user is at the top
  const bind = useDrag(
    ({ last, movement: [, my], cancel }) => {
      if (my < -50) cancel(); // Prevent upward swipe
      if (last) {
        // Close the sheet if the drag is long enough
        if (my > 250) {
          onClose();
        } else {
          api.start({ y: 0 }); // Reset position if not swiped enough
        }
        setDragging(false);
      } else {
        api.start({ y: Math.max(my, 0) }); // Allow only downward dragging
        setDragging(true);
      }
    },
    {
      from: () => [0, y.get()],
      bounds: { top: 0 },
      rubberband: true,
    }
  );

  // Function to handle the additional swipe down to close
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
  }, [isDragging]);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}
      <animated.div
        style={{ y, touchAction: 'none' }} // Disable touch scroll while dragging
        className="fixed top-0 left-0 right-0 bg-white z-50 shadow-lg rounded-t-3xl p-4 h-full overflow-y-auto"
      >
        {/* New down arrow icon for closing the sheet */}
        <div className="flex items-center justify-center cursor-pointer mb-4">
          <FaChevronDown
            className="text-teal-600 text-2xl"
            onClick={onClose} // Close the sheet when the icon is tapped
          />
        </div>

        {/* Scrollable content with reference */}
        <div
          ref={scrollContainerRef}
          className="h-full overflow-y-auto"
        >
          <BottomSheetDrawerModalContent location={location} />
        </div>
      </animated.div>
    </>
  );
};

export default BottomSheetDrawer;