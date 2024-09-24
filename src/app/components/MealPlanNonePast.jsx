import Image from 'next/image';
import { FaCalendarAlt } from 'react-icons/fa'; // Import icons

export default function MealplanNonePast({ weekday }) {
  return (
    <div className="bg-white flex rounded-lg border-2 border-gray-300 opacity-50 cursor-not-allowed h-48"> {/* Blurred effect */}
      <div className="relative w-1/3 h-full"> {/* Image section */}
        <Image 
          src="/images/noMealPlan.png" 
          alt="No meal available" 
          layout="fill" 
          objectFit="contain" 
        />
      </div>
      <div className="flex flex-col justify-center p-4 w-2/3"> {/* Text and button section */}
        <div className="flex items-center mb-2">
          <FaCalendarAlt className="text-gray-500" />
          <h3 className="text-sm font-semibold ml-2">{weekday}</h3> {/* Display Day name */}
        </div>
        <p className="text-md mb-2">No meal available</p>
      </div>
    </div>
  );
}