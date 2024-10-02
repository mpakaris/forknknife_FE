import { FaBuilding, FaCalendarAlt, FaEdit, FaUtensils } from 'react-icons/fa';
import CarouselSmall from '../CarouselSmall'; // Import the CarouselSmall component

export default function MealPlanModalEntry({ mealEntry, weekday, date, borderColor, border="border", isPast = false }) {
  const options = [
    { pic: 'dish1.jpg', label: 'Dish 1' },
    { pic: 'dish2.jpeg', label: 'Dish 2' },
    { pic: 'dish3.jpeg', label: 'Dish 3' },
    { pic: 'dish4.jpeg', label: 'Dish 4' },
    { pic: 'dish5.jpeg', label: 'Dish 5' },
  ];

  // Conditional class to gray out the card if it's a past meal plan
  const pastMealClasses = isPast ? 'opacity-50 cursor-not-allowed' : '';

  return (
    <div  className={`bg-white shadow-lg rounded-lg p-4 flex flex-col ${border} ${borderColor} ${pastMealClasses}`}>
      <div className="flex items-center mb-2">
        <FaCalendarAlt className="text-teal-800" />
        <h3 className="text-sm font-semibold ml-2">{`${weekday} | ${date.split('-').reverse().join('/')}`}</h3>
      </div>
      <div className="flex flex-col mb-2">
        <div className="flex items-center">
          <FaBuilding className="text-teal-800" />
          <h2 className="text-lg font-bold ml-2">{mealEntry.restaurant}</h2>
        </div>
        <h4 className="text-xs text-gray-500 ml-6">{mealEntry.address}</h4>
      </div>
      <div className="flex items-center mb-2">
        <FaUtensils className="text-teal-800" />
        <p className="ml-2 text-sm">{mealEntry.meal}</p>
      </div>
      <CarouselSmall options={options} />

      {!isPast && (
        <div className="flex justify-end mt-4">
          <button className="flex items-center bg-teal-800 text-white px-6 py-3 rounded hover:bg-teal-700">
            <FaEdit className="text-lg mr-2" /> 
            <span>Swipe here to change meal</span>
          </button>
        </div>
      )}
    </div>
  );
}