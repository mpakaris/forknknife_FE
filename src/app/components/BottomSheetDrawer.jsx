import { useDrag } from '@use-gesture/react';
import { useState } from 'react';
import { animated, useSpring } from 'react-spring';

const BottomSheetDrawer = ({ isOpen, onClose, children }) => {
  const [isDragging, setDragging] = useState(false);
  const [{ y }, api] = useSpring(() => ({ y: 0 }));

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
        className="fixed bottom-0 left-0 right-0 bg-white z-50 shadow-lg rounded-t-3xl p-4 h-[90vh] overflow-y-auto"
      >
        {/* Apply drag functionality to the dash only */}
        <div {...bind()} className="flex items-center justify-center cursor-grab">
          <div className="bg-teal-700 w-[80px] h-[5px] rounded-full"></div>
        </div>

        {/* Content of the Bottom Sheet Drawer */}
        <div className="mt-8">{children}</div>
      </animated.div>
    </>
  );
};

export default BottomSheetDrawer;