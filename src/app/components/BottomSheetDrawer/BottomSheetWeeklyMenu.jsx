import { addDays, format, startOfWeek } from 'date-fns';
// import CarouselDrawerWeeklyMenu from "./CarouselDrawerWeeklyMenu";

// Helper function to get the current week's dates (Mon-Fri)
const getCurrentWeek = () => {
  const startOfWeekDate = startOfWeek(new Date(), { weekStartsOn: 1 }); // Get Monday
  const days = [];
  
  for (let i = 0; i < 5; i++) {
    const currentDay = addDays(startOfWeekDate, i);
    days.push({
      date: format(currentDay, 'EEEE, dd.MM.yyyy'), // e.g., Monday, 01.09.2024
      day: format(currentDay, 'EEEE'), // e.g., Monday
    });
  }
  
  return days;
};

export default function BottomSheetWeeklyMenu({ menu }) {
  const weekDays = getCurrentWeek();

  return (
    <div className="space-y-2 px-1">
      {/* Menu Section */}
      <h2 className="text-md font-bold text-gray-200 my-4">
        Weekly Menu | {weekDays[0].date.split(', ')[1]} - {weekDays[4].date.split(', ')[1]}
      </h2>

      {/* Swiper for Menu */}
      {/* <CarouselDrawerWeeklyMenu
        options={weekDays.map((day) => ({
          date: day.date, 
          name: menu[day.day].description, 
          description: menu[day.day].description, 
          price: menu[day.day].price,
          dessert: menu[day.day].dessert,
          tags: menu[day.day].tags || [], 
        }))}
      /> */}
    </div>
  );
}