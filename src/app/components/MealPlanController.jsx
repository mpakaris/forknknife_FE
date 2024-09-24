import { FaBuilding, FaCalendarAlt, FaUtensils } from 'react-icons/fa'; // Import icons
import NoMealPLan from "./NoMealPlan";

export default function MealPlanController({ mealPlan }) {
  // Sort mealPlan by date
  const sortedMealPlan = [...mealPlan].sort((a, b) => new Date(a.date) - new Date(b.date));

  // Define weekdays (Monday to Friday)
  const weekdays = [
    { weekday: 'Monday', date: new Date(new Date().setDate(new Date().getDate() + (1 - new Date().getDay() + 7) % 7)).toISOString().split('T')[0] },
    { weekday: 'Tuesday', date: new Date(new Date().setDate(new Date().getDate() + (2 - new Date().getDay() + 7) % 7)).toISOString().split('T')[0] },
    { weekday: 'Wednesday', date: new Date(new Date().setDate(new Date().getDate() + (3 - new Date().getDay() + 7) % 7)).toISOString().split('T')[0] },
    { weekday: 'Thursday', date: new Date(new Date().setDate(new Date().getDate() + (4 - new Date().getDay() + 7) % 7)).toISOString().split('T')[0] },
    { weekday: 'Friday', date: new Date(new Date().setDate(new Date().getDate() + (5 - new Date().getDay() + 7) % 7)).toISOString().split('T')[0] },
  ];

  const currentDate = new Date().toISOString().split('T')[0]; // Get the current date in yyyy-mm-dd format

  return (
    <div className="overflow-y-auto max-h-screen">
      <div className="flex flex-col px-4">
        {weekdays.map((day) => {
          const mealEntry = sortedMealPlan.find(meal => meal.date === day.date);
          const isCurrentDay = day.date === currentDate; // Check if the day is the current date
          return (
            <div key={day.date} className="flex-none w-full mb-4"> {/* Added margin bottom for spacing */}
              {mealEntry ? (
                <div className={`bg-white shadow-md rounded-lg p-4 flex flex-col ${isCurrentDay ? 'border-teal-800 border-2' : 'border-gray-100 border'}`}> {/* Card Design */}
                  <div className="flex items-center mb-2">
                    <FaCalendarAlt className="text-teal-800" />
                    <h3 className="text-sm font-semibold ml-2">
                      {`${day.weekday} | ${day.date.split('-').reverse().join('/')}`} {/* Display Day name and formatted date */}
                    </h3>
                  </div>
                  <div className="flex flex-col mb-2">
                    <div className="flex items-center">
                      <FaBuilding className="text-teal-800" />
                      <h2 className="text-lg font-bold ml-2">{mealEntry.restaurant}</h2>
                    </div>
                    <h4 className="text-xs text-gray-500 ml-6">{mealEntry.address}</h4> {/* Indent address for clarity */}
                  </div>
                  <div className="flex items-center">
                    <FaUtensils className="text-teal-800" />
                    <p className="ml-2 text-sm">{mealEntry.meal}</p>
                  </div>
                </div>
              ) : (
                <NoMealPLan weekday={`${day.weekday} | ${day.date.split('-').reverse().join('/')}`}/>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}