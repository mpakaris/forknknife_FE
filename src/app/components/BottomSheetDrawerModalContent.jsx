import BottomSheetHeadInfo from "./BottomSheetHeadInfo";
import BottomSheetImpressions from "./BottomSheetImpressions";
import BottomSheetReviews from "./BottomSheetReviews";
import BottomSheetTagPills from "./BottomSheetTagPills";
import BottomSheetWeeklyMenu from "./BottomSheetWeeklyMenu";

const BottomSheetDrawerModalContent = ({ selectedLocation, currentLocation}) => {
  return (
    <div className="max-h-[90vh] overflow-y-auto">
      {/* Head Info */}
        <div>{JSON.stringify(currentLocation)}</div>
      <div className="my-4">
        <BottomSheetHeadInfo 
          name={selectedLocation.name}
          address={selectedLocation.address}
          contact={selectedLocation.contact}
          website={selectedLocation.website}
          rating={selectedLocation.rating}
        />
      </div>
      {/* Tags and Pills */}
      <BottomSheetTagPills tags={selectedLocation.tags} />
      
      <div className="h-[2px] bg-gray-200 mt-6"></div>
      
      {/* Impressions-Switch */}
      <div className="mt-3">
        <BottomSheetImpressions />  
      </div>

      <div className="h-[2px] bg-gray-200 mt-6"></div>
      
      {/* Weekly Menu */}
      <div className="weeklyMenu mt-5">
        <BottomSheetWeeklyMenu menu={selectedLocation.menu}/>
      </div>


      <div className="h-[2px] bg-gray-200 mt-6"></div>

      {/* Reviews */}
      <div className="reviews mt-5">
        <BottomSheetReviews reviews={selectedLocation.reviews} />
      </div>
    </div>
  );
};

export default BottomSheetDrawerModalContent;