import { useState } from 'react';
import BottomSheetMainContent from "./BottomSheetMainContent";
import RestaurantInvitation from "./Invitation/RestaurantInvitation";

const BottomSheetContentController = ({selectedLocation, currentLocation}) => {
 
 const [currentModalScreen, setCurrentModalScreen] = useState(undefined) 

 const setModalScreen = (screen) => {
  setCurrentModalScreen(screen)
 }
 
  const renderDrawerContent = () => {
   switch (currentModalScreen) {
     case "invitation_location":
       return (
        <RestaurantInvitation />
       );
     case "invitation_menu":
       return (
         <p>Test 3</p>
       );
     default:
       return (
         <BottomSheetMainContent
           selectedLocation={selectedLocation} 
           currentLocation={currentLocation}
           setModalScreen={setModalScreen}
         />
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