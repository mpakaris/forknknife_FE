"use client";
import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";
import { useState } from "react";
import Locations from "../mockData/locations"; // Importing mock data
import BottomSheetDrawer from "./BottomSheetDrawer";
import { ModalContent } from "./ModalContent";

// Dynamically load the Map component for client-side rendering
const Map = dynamic(() => import("./MapTiler"), { ssr: false });

const MapController = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedLocationId, setSelectedLocationId] = useState(null);

  const openDrawer = (id) => {
    setSelectedLocationId(id);
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
    setSelectedLocationId(null);
  };

  const selectedLocation = Locations.find((loc) => loc.id === selectedLocationId);

  return (
    <div className="App">
      <Map onMarkerClick={openDrawer} locations={Locations} />
      {selectedLocation && (
        <BottomSheetDrawer isOpen={isDrawerOpen} onClose={closeDrawer}>
          <ModalContent location={selectedLocation} />
        </BottomSheetDrawer>
      )}
    </div>
  );
};

export default MapController;