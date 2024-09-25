import MealPlanCurrent from "./MealPlanCurrent";
import MealPlanFuture from "./MealPlanFuture";
import MealPlanNone from "./MealPlanNone";
import MealPlanNonePast from "./MealPlanNonePast";
import MealPlanPast from "./MealPlanPast";

export default function MealPlanController({ mealPlan }) {
  const sortedMealPlan = [...mealPlan].sort((a, b) => new Date(a.date) - new Date(b.date));

  // Get the current date
  const currentDate = new Date();
  const currentDateStr = currentDate.toISOString().split('T')[0]; // Current date in yyyy-mm-dd format

  // Calculate the start of the week (Monday)
  const startOfWeek = new Date(currentDate.setDate(currentDate.getDate() - (currentDate.getDay() + 6) % 7));

  // Generate weekdays for the current week (Monday to Friday)
  const weekdays = [
    { weekday: 'Monday', date: new Date(startOfWeek).toISOString().split('T')[0] },
    { weekday: 'Tuesday', date: new Date(startOfWeek.setDate(startOfWeek.getDate() + 1)).toISOString().split('T')[0] },
    { weekday: 'Wednesday', date: new Date(startOfWeek.setDate(startOfWeek.getDate() + 1)).toISOString().split('T')[0] },
    { weekday: 'Thursday', date: new Date(startOfWeek.setDate(startOfWeek.getDate() + 1)).toISOString().split('T')[0] },
    { weekday: 'Friday', date: new Date(startOfWeek.setDate(startOfWeek.getDate() + 1)).toISOString().split('T')[0] },
  ];

  return (
    <div className="max-h-[90vh] mt-5">
      <div className="flex flex-col px-4 space-y-4">
        {weekdays.map((day) => {
          const mealEntry = sortedMealPlan.find(meal => meal.date === day.date);
          const isCurrentDay = day.date === currentDateStr;
          const isPastDay = new Date(day.date) < new Date(currentDateStr);
          const isFutureDay = new Date(day.date) > new Date(currentDateStr);

          if (mealEntry) {
            if (isCurrentDay) {
              return <MealPlanCurrent key={day.date} mealEntry={mealEntry} weekday={day.weekday} date={day.date} />;
            } 
            if (isFutureDay) {
              return <MealPlanFuture key={day.date} mealEntry={mealEntry} weekday={day.weekday} date={day.date} />;
            } 
            // Past meal entry should be rendered as inactive
            return <MealPlanPast key={day.date} mealEntry={mealEntry} weekday={day.weekday} date={day.date} />;
          } else {
            if (isPastDay) {
              return <MealPlanNonePast key={day.date} weekday={`${day.weekday} | ${day.date.split('-').reverse().join('/')}`} />;
            }
            // Future or current day with no meal plan
            return <MealPlanNone key={day.date} weekday={`${day.weekday} | ${day.date.split('-').reverse().join('/')}`} />;
          }
        })}
      </div>
      <div style={{ height: "450px", width: "100%", backgroundColor: "yellow" }}></div>
    </div>
  );
}

// 1.	PastMealPlan: This component displays a meal plan for a day that is in the past but is “blurred” out, indicating no action is possible.
// 2.	CurrentMealPlan: This component represents a meal plan for the current date and is highlighted, showing it is active.
// 3.	FutureMealPlan: This component displays a meal plan for a day in the future, with a gray border indicating it’s coming up.
// 4.	NoMealPlan: This existing component shows when there are no meal plans available for today or in the future.
// 5.	PastNoMealPlan: This component indicates that there is no meal plan available for a day in the past and should be grayed out.