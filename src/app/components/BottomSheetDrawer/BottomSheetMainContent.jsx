import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";
import BottomSheetHeadInfo from "./BottomSheetHeadInfo";
import BottomSheetImpressions from "./BottomSheetImpressions";
import BottomSheetReviews from "./BottomSheetReviews";
import BottomSheetTagPills from "./BottomSheetTagPills";
import BottomSheetWeeklyMenu from "./BottomSheetWeeklyMenu";

// Dynamically load the Map component for client-side rendering
const Map = dynamic(() => import("../Maps/MapTilerModal"), { ssr: false });

const BottomSheetMainContent = ({ selectedLocation, currentLocation, setModalScreen }) => {

  return (
    <div className="max-h-[90vh] overflow-y-auto">
      {/* Display currentScreen state for debugging (can be removed later) */}
      <div>{JSON.stringify(currentLocation)}</div>
      
      {/* Head Info */}
      <div className="my-4">
        <BottomSheetHeadInfo 
          name={selectedLocation.name}
          address={selectedLocation.address}
          contact={selectedLocation.contact}
          website={selectedLocation.website}
          rating={selectedLocation.rating}
          setModalScreen={setModalScreen} 
        />
      </div>

      {/* Tags and Pills */}
      <BottomSheetTagPills tags={selectedLocation.tags} />

      <div className="h-[2px] bg-gray-200 mt-6"></div>

      {/* Map Component */}
      <div className="reviews mt-4">
        <Map 
          currentLocation={{
            lat: 47.51367275414454,
            lng: 19.046562515873084
          }} 
          destinationLocation={{
            lat: 47.48650052765575, 
            lng: 19.107689904921532
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