import MealPlanModalNoEntry from './MealPlanModalNoEntry';

export default function MealPlanNone({ weekday }) {
  return (
    <MealPlanModalNoEntry 
      weekday={weekday} 
      isPast={false} // Indicates it's not a past meal
    />
  );
}