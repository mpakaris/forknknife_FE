import Image from 'next/image';
import { FaCalendarAlt } from 'react-icons/fa'; // Import icons

export default function MealPlanNone({ weekday }) {
  const placeholderImage = '/images/noMealPlan.png'; // Replace with your placeholder image path

  return (
    <div className="bg-white flex rounded-lg border-2 border-red-600 overflow-hidden h-48"> {/* Red border for no meal plan */}
      <div className="relative w-1/3 h-full"> {/* Image section */}
        <Image 
          src={placeholderImage} 
          alt="No meal available" 
          layout="fill" // Fill the parent div
          objectFit="contain" // Keep aspect ratio
        />
      </div>
      <div className="flex flex-col justify-center p-4 w-2/3"> {/* Text and button section */}
        <div className="flex items-center mb-2">
          <FaCalendarAlt className="text-teal-800" />
          <h3 className="text-sm font-semibold ml-2">{weekday}</h3> {/* Display Day name */}
        </div>
        <p className="text-xs mb-2">Find yourself a good meal!</p>
        <button className="bg-teal-800 text-white text-sm px-4 py-2 rounded">Find a Meal</button>
      </div>
    </div>
  );
}