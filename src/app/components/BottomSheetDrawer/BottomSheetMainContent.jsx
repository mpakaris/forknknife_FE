import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";
import BottomSheetImpressions from "./BottomSheetImpressions";
import BottomSheetReviews from "./BottomSheetReviews";
import BottomSheetWeeklyMenu from "./BottomSheetWeeklyMenu";

// Dynamically load the Map component for client-side rendering
const Map = dynamic(() => import("../Maps/MapTilerModal"), { ssr: false });

const BottomSheetMainContent = ({ selectedLocation, currentLocation, }) => {

  return (
    <div className="mt-8">
      <div className="h-[2px] bg-gray-200 mt-6"></div>

      {/* Map Component */}
      <div className="reviews mt-4">
        <Map 
          currentLocation={{
            lat: 47.51367275414454,
            lng: 19.046562515873084
          }} 
          destinationLocation={{
            lat: selectedLocation.lat, 
            lng: selectedLocation.lng
          }} 
        />
      </div>
      
      <div className="h-[2px] bg-gray-200"></div>

      {/* Impressions Section */}
      <div className="mt-3">
        <BottomSheetImpressions />
      </div>

      <div className="h-[2px] bg-gray-200 mt-6"></div>

      {/* Weekly Menu */}
      <div className="weeklyMenu mt-5">
        <BottomSheetWeeklyMenu menu={selectedLocation.menu}/>
      </div>

      <div className="h-[2px] bg-gray-200 mt-6"></div>

      {/* Reviews Section */}
      <div className="reviews mt-5">
        <BottomSheetReviews reviews={selectedLocation.reviews} />
      </div>
    </div>
  );
};

export default BottomSheetMainContent;