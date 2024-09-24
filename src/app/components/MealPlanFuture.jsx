import MealPlanModalEntry from './MealPlanModalEntry';

export default function MealPlanFuture({ mealEntry, weekday, date }) {
  return (
    <MealPlanModalEntry 
      mealEntry={mealEntry} 
      weekday={weekday} 
      date={date} 
      borderColor="" // Gray border for future days
    />
  );
}