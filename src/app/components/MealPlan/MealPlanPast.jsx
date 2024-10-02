import MealPlanModalEntry from './MealPlanModalEntry';

export default function MealPlanPast({ mealEntry, weekday, date }) {
  return (
    <MealPlanModalEntry 
      mealEntry={mealEntry} 
      weekday={weekday} 
      date={date} 
      borderColor="border-gray-300" // Gray border for past entries
      isPast={true} // Pass an additional prop to indicate this is a past meal plan
    />
  );
}