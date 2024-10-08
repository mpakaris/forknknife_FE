import { useState } from 'react';
import BottomSheetHeadInfo from './BottomSheetHeadInfo';
import BottomSheetMainContent from "./BottomSheetMainContent";
import RestaurantInvitation from "./Invitation/RestaurantInvitation";

const BottomSheetContentController = ({selectedLocation, currentLocation}) => {
 
 const [currentModalScreen, setCurrentModalScreen] = useState(undefined) 
 const [showReservation, setShowReservation] = useState(false)

 const handleShare = () => {
  setShowReservation(!showReservation);
 }

 const setModalScreen = (screen) => {
  setCurrentModalScreen(screen)
 }
 
  const renderDrawerContent = () => {
   switch (currentModalScreen) {
     case "invitation_location":
       return (
        <RestaurantInvitation setModalScreen={setModalScreen}/>
       );
     case "invitation_menu":
       return (
         <p>Test 3</p>
       );
     default:
       return (

        <div className='max-h-[90vh] mb-9'>
          <BottomSheetHeadInfo 
            selectedLocation={selectedLocation}
            handleShare={handleShare}
            />
          {showReservation && 
            <RestaurantInvitation handleShare={handleShare}/> 
          }
          <p className='text-white'>Lat: {currentLocation.lat} | Lng: {currentLocation.lng}</p>
          <BottomSheetMainContent
            selectedLocation={selectedLocation} 
            currentLocation={currentLocation}
            setModalScreen={setModalScreen}
          />
        </div>
       )
   }
 }
 
 return (
   <div className='drawer-content'>
     {renderDrawerContent()}
   </div>
 )
}

export default BottomSheetContentController;