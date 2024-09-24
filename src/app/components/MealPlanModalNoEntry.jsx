import Image from 'next/image';
import { FaCalendarAlt } from 'react-icons/fa'; // Import icons

export default function MealPlanEntryNoEntry({ weekday, isPast }) {
  const placeholderImage = '/images/noMealPlan.png'; // Placeholder image path

  return (
    <div className={`bg-white flex rounded-lg border-2 ${isPast ? 'border-gray-300 opacity-50 cursor-not-allowed' : 'border-red-600'} h-48`}>
      <div className="relative w-1/3 h-full"> {/* Image section */}
        <Image 
          src={placeholderImage} 
          alt="No meal available" 
          layout="fill" // Fill the parent div
          objectFit="contain" // Keep aspect ratio
        />
      </div>
      <div className="flex flex-col justify-center p-4 w-2/3"> {/* Text section */}
        <div className="flex items-center mb-2">
          <FaCalendarAlt className={isPast ? "text-gray-500" : "text-teal-800"} />
          <h3 className="text-sm font-semibold ml-2">{weekday}</h3> {/* Display Day name */}
        </div>
        {isPast ? (
          <p className="text-md mb-2">No meal available</p>
        ) : (
          <>
            <p className="text-xs mb-2">Find yourself a good meal!</p>
            <button className="bg-teal-800 text-white text-sm px-4 py-2 rounded">Find a Meal</button>
          </>
        )}
      </div>
    </div>
  );
}