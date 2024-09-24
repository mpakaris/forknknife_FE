import MealPlanModalEntry from './MealPlanModalEntry';

export default function MealPlanPast({ mealEntry, weekday, date }) {
  return (
    <MealPlanModalEntry 
      mealEntry={mealEntry} 
      weekday={weekday} 
      date={date} 
      borderColor="border-gray-300" // Different border for past days
    />
  );
}