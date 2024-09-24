import MealPlanModalEntry from './MealPlanModalEntry';

export default function MealPlanCurrent({ mealEntry, weekday, date }) {
  return (
    <MealPlanModalEntry 
      mealEntry={mealEntry} 
      weekday={weekday} 
      date={date} 
      borderColor="border-teal-600" // Highlighted border for current day
    />
  );
}