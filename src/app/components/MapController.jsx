"use client";
import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Locations from "../mockData/locations"; // Importing mock data
import BottomSheetDrawer from "./BottomSheetDrawer";

// Dynamically load the Map component for client-side rendering
const Map = dynamic(() => import("./MapTiler"), { ssr: false });

const MapController = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedLocationId, setSelectedLocationId] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null); // State to store current location

  // Open drawer for the selected location
  const openDrawer = (id) => {
    setSelectedLocationId(id);
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
    setSelectedLocationId(null);
  };

  const selectedLocation = Locations.find((loc) => loc.id === selectedLocationId);

  // Function to handle location permission and get current location
  const handleLocationPermission = () => {
    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(
    //     (position) => {
    //       const { latitude, longitude } = position.coords;
    //       setCurrentLocation({ lat: latitude, long: longitude });

    //       // Save permission status in localStorage
    //       localStorage.setItem("hasLocationPermission", "true");
    //     },
    //     (error) => {
    //       console.error("Error fetching location:", error);
    //     }
    //   );
    // }
  };

  // UseEffect to check location permission from localStorage when the component mounts
  useEffect(() => {
    const hasLocationPermission = localStorage.getItem("hasLocationPermission");

    // if (!hasLocationPermission || hasLocationPermission === "false") {
    if (!hasLocationPermission || hasLocationPermission === "true") {
      // Ask for permission if not granted previously
      const userWantsToAllow = window.confirm("Allow to access current location?");
      if (userWantsToAllow) {
        handleLocationPermission();
      } else {
        localStorage.setItem("hasLocationPermission", "false"); // Save the denial
      }
    } else if (hasLocationPermission === "true") {
      // If permission was already granted, just log the current location
      handleLocationPermission(); // Fetch the location and log it to the console
      // console.log("Location permission already granted. Fetching current location...");
    }
  }, []);

  return (
    <div className="App">
      <Map onMarkerClick={openDrawer} locations={Locations} />
      {/* {console.log(currentLocation)} */}
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