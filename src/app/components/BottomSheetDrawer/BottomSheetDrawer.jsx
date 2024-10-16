import { useEffect, useRef } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { animated, useSpring } from 'react-spring';

const BottomSheetDrawer = ({ isOpen, onClose, children }) => {
  const scrollContainerRef = useRef(null);
  const [{ y }, api] = useSpring(() => ({
    y: 100,  
    config: { tension: 250, friction: 30 },  
  }));

  useEffect(() => {
    if (isOpen) {
      api.start({ y: 0 });
    } else {
      api.start({ y: 100 });
    }
  }, [isOpen, api]);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-opacity-50 z-40" onClick={onClose} />
      )}
      <animated.div
        style={{
          transform: y.to((value) => `translateY(${value}%)`),
        }}
        className="fixed left-0 right-0 bg-white backdrop-blur-2xl bg-white/30 z-50 shadow-lg h-full overflow-y-auto scrollbar-hidden will-change-transform"
      >
        <div className="sticky top-0 flex items-center justify-center cursor-pointer my-3 rounded-lg bg-transparent z-50">
          <FaChevronDown
            className="text-white text-3xl mt-2"
            onClick={onClose}
          />
        </div>
        <div ref={scrollContainerRef} className="h-full overflow-y-auto scrollbar-hidden relative scroll-smooth -webkit-overflow-scrolling-touch">
          {children}
        </div>
      </animated.div>
    </>
  );
};

export default BottomSheetDrawer;