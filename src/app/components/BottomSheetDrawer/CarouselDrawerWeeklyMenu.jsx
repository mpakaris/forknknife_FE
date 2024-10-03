import { useState } from "react";
import { FaBell, FaCheckCircle, FaCoffee, FaCoins, FaIceCream, FaUtensils, FaUtensilSpoon } from 'react-icons/fa'; // Added FaBell for "Alert me!" button
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import BottomSheetTagPills from "./BottomSheetTagPills";

// Function to get the current day index (0 for Monday, 1 for Tuesday, ..., 6 for Sunday)
const getCurrentDayIndex = () => {
  const today = new Date();
  const currentDay = today.getDay(); // Sunday = 0, Monday = 1, ..., Saturday = 6
  return (currentDay + 6) % 7; // Adjusting so Monday is 0
};

// Helper function to check if a date is today or in the future
const isTodayOrFuture = (dateStr) => {
  const today = new Date();
  const optionDate = new Date(dateStr);
  return optionDate >= today; // Compare dates
};

const CarouselDrawerWeeklyMenu = ({ options }) => {
  const currentIndex = getCurrentDayIndex();

  // Create a local state for isSaved for each card
  const [savedMeals, setSavedMeals] = useState(
    options.map(() => false) // Initialize an array of 'false' values, one for each option
  );

  // Toggle the 'isSaved' state for the given card index
  const toggleSaveMeal = (index) => {
    setSavedMeals((prevSavedMeals) =>
      prevSavedMeals.map((isSaved, i) =>
        i === index ? !isSaved : isSaved // Toggle only the meal at the specific index
      )
    );
  };

  return (
    <div className="w-full">
      <Swiper
        spaceBetween={30}
        slidesPerView={1.2}
        grabCursor={true}
        initialSlide={currentIndex}
      >
        {options && options.map((option, index) => (
          <SwiperSlide key={index}>
            <div className={`bg-gray-800 rounded-lg shadow-md overflow-hidden mb-2 p-4 border-2 ${index === currentIndex ? 'border-teal-600' : 'border-gray-100'}`}>
              <div className="mb-2 space-x-1 space-y-2">
                <div className="flex justify-between items-center mb-5 pb-3 border-b border-gray-300">
                  <p className="text-basic text-gray-200 font-bold">{option.date}</p>
                  {/* "Alert me!" button */}
                  <button
                    className="flex items-center text-teal-600 hover:text-teal-800 font-bold"
                    onClick={() => alert("ALERT!")}
                  >
                    <FaBell className="mr-1" />
                  </button>
                </div>
                <div className="flex items-center mb-1">
                  <FaCoffee className="mr-2 text-teal-600" />
                  <h2 className="text-sm ml-2 font-bold text-gray-200">Fish Soup</h2>
                </div>
                <div className="flex items-center mb-1">
                  <FaUtensils className="mr-2 text-teal-600" />
                  <h2 className="text-sm ml-2 font-bold text-gray-200">{option.name}</h2>
                </div>
                <div className="flex items-center mb-1">
                  <FaIceCream className="mr-2 text-teal-600" />
                  <p className="text-sm ml-2 text-gray-200 font-bold">{option.dessert}</p>
                </div>
                <div className="flex items-center">
                  <FaCoins className="mr-2 text-teal-600" />
                  <p className="text-sm ml-2 text-gray-200 font-bold">{option.price}</p>
                </div>
              </div>
              <div className='mt-3'>
                <BottomSheetTagPills tags={option.tags} paddingClass="py-1"/>
              </div>

              {/* Conditional rendering for the "Add to Meal Plan" or "Your Meal for Today" banner */}
              <div className='mt-4'>
                {savedMeals[index] ? (
                  <div className="bg-teal-800 text-white py-2 px-4 rounded-md flex items-center">
                    <FaCheckCircle className="mr-2" />
                    <p className="text-sm font-bold">Your Meal for Today!</p>
                  </div>
                ) : (
                  // Show "Add to Meal Plan" only if the date is today or in the future
                  isTodayOrFuture(option.date) && (
                    <div
                      className="flex items-center justify-center mt-2 text-teal-800 cursor-pointer"
                      onClick={() => toggleSaveMeal(index)}
                    >
                      <FaUtensilSpoon className="mr-2" />
                      <p className="text-sm font-bold">Add to Meal Plan</p>
                    </div>
                  )
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselDrawerWeeklyMenu;