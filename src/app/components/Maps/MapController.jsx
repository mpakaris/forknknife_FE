"use client";
import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import BottomSheetDrawer from "../BottomSheetDrawer/BottomSheetDrawer";

// Dynamically load the Map component for client-side rendering
const Map = dynamic(() => import("./MapTiler"), { ssr: false });

const MapController = ({ locations = [] }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedLocationId, setSelectedLocationId] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);

  const openDrawer = (uuid) => {
    setSelectedLocationId(uuid);
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
    setSelectedLocationId(null);
  };

  const selectedLocation = locations.find((loc) => loc.uuid === selectedLocationId);

  const handleLocationPermission = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation({ lat: latitude, lng: longitude });
          localStorage.setItem("hasLocationPermission", "true");
        },
        (error) => {
          console.error("Error fetching location:", error);
        }
      );
    }
  };

  useEffect(() => {
    const hasLocationPermission = localStorage.getItem("hasLocationPermission");
    if (!hasLocationPermission || hasLocationPermission === "false") {
      const userWantsToAllow = window.confirm("Allow to access current location?");
      if (userWantsToAllow) {
        handleLocationPermission();
      } else {
        localStorage.setItem("hasLocationPermission", "false");
      }
    } else if (hasLocationPermission === "true") {
      handleLocationPermission();
    }
  }, []);

  return (
    <div className="App">
      <Map 
        onMarkerClick={openDrawer} 
        locations={locations} 
        userLocation={currentLocation}
      />
      {selectedLocation && (
        <BottomSheetDrawer
          isOpen={isDrawerOpen}
          onClose={closeDrawer}
          selectedLocation={selectedLocation}
          currentLocation={currentLocation}
        />
      )}
    </div>
  );
};

export default MapController;