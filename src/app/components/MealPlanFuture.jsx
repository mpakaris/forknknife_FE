import MealPlanModalEntry from './MealPlanModalEntry';

export default function MealPlanFuture({ mealEntry, weekday, date }) {
  return (
    <MealPlanModalEntry 
      mealEntry={mealEntry} 
      weekday={weekday} 
      date={date} 
      borderColor="border-gray-500" // Gray border for future days
    />
  );
}