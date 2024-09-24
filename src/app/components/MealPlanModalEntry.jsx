import { FaBuilding, FaCalendarAlt, FaUtensils } from 'react-icons/fa';

export default function MealPlanModalEntry({ mealEntry, weekday, date, borderColor }) {
  return (
    <div className={`bg-white shadow-md rounded-lg p-4 flex flex-col border-2 ${borderColor}`}> {/* Dynamic border color */}
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
      <div className="flex items-center">
        <FaUtensils className="text-teal-800" />
        <p className="ml-2 text-sm">{mealEntry.meal}</p>
      </div>
    </div>
  );
}