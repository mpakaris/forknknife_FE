import { FaBuilding, FaCalendarAlt, FaTrash, FaUtensils } from 'react-icons/fa';
import CarouselSmall from './CarouselSmall'; // Import the CarouselSmall component

export default function MealPlanModalEntry({ mealEntry, weekday, date, borderColor, border="border" }) {
  const options = [
    { pic: 'dish1.jpg', label: 'Dish 1' },
    { pic: 'dish2.jpeg', label: 'Dish 2' },
    { pic: 'dish3.jpeg', label: 'Dish 3' },
    { pic: 'dish4.jpeg', label: 'Dish 4' },
    { pic: 'dish5.jpeg', label: 'Dish 5' },
  ];
  
  return (
    <div className={`bg-white shadow-md rounded-lg p-4 flex flex-col ${border} ${borderColor}`}>
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

      <div className="flex justify-end mt-4">
        <button className="flex items-center bg-red-600 text-white px-3 py-2 rounded hover:bg-red-500">
          <FaTrash className="text-xs" />
        </button>
      </div>
    </div>
  );
}