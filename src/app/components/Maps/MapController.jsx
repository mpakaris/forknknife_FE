"use client";
import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";
import { useState } from "react";
import BottomSheetDrawer from "../BottomSheetDrawer/BottomSheetDrawer";

// Dynamically load the Map component for client-side rendering
const Map = dynamic(() => import("./MapTiler"), { ssr: false });

const MapController = ({ locations = [], userLocation }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedLocationId, setSelectedLocationId] = useState(null);

  const openDrawer = (uuid) => {
    setSelectedLocationId(uuid);
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
    setSelectedLocationId(null);
  };

  const selectedLocation = locations.find((loc) => loc.uuid === selectedLocationId);

  return (
    <div className="App">
      <Map 
        onMarkerClick={openDrawer} 
        locations={locations} 
        userLocation={userLocation} // Use the passed user location
      />
      {selectedLocation && (
        <BottomSheetDrawer
          isOpen={isDrawerOpen}
          onClose={closeDrawer}
          selectedLocation={selectedLocation}
          currentLocation={userLocation}
        />
      )}
    </div>
  );
};

export default MapController;