import MealPlanModalNoEntry from "./MealPlanModalNoEntry";

export default function MealPlanNonePast({ weekday }) {
  return (
    <MealPlanModalNoEntry 
      weekday={weekday} 
      isPast={true} // Indicates it's a past meal
    />
  );
}