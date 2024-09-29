import BottomSheetHeadInfo from "./BottomSheetHeadInfo";
import BottomSheetImpressions from "./BottomSheetImpressions";
import BottomSheetReviews from "./BottomSheetReviews";
import BottomSheetTagPills from "./BottomSheetTagPills";
import BottomSheetWeeklyMenu from "./BottomSheetWeeklyMenu";

const BottomSheetDrawerModalContent = ({ location }) => {
  return (
    <div className="max-h-[80vh] overflow-y-auto">
      {/* Head Info */}
      <div className="my-4">
        <BottomSheetHeadInfo 
          name={location.name}
          address={location.address}
          contact={location.contact}
          website={location.website}
          rating={location.rating}
        />
      </div>
      {/* Tags and Pills */}
      <BottomSheetTagPills tags={location.tags} />
      
      <div className="h-[2px] bg-gray-200 mt-6"></div>
      
      {/* Impressions-Switch */}
      <div className="mt-3">
        <BottomSheetImpressions />  
      </div>

      <div className="h-[2px] bg-gray-200 mt-6"></div>
      
      {/* Weekly Menu */}
      <div className="weeklyMenu mt-5">
        <BottomSheetWeeklyMenu menu={location.menu}/>
      </div>

      <div className="h-[2px] bg-gray-200 mt-6"></div>

      <div className="reviews mt-5">
        <BottomSheetReviews reviews={location.reviews} />
      </div>
    </div>
  );
};

export default BottomSheetDrawerModalContent;