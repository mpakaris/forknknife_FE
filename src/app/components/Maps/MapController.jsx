"use client";
import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";

// Dynamically load the Map component for client-side rendering
const Map = dynamic(() => import("./MapTiler"), { ssr: false });

const MapController = ({ locations = [], userLocation, onLocationSelect }) => {

  return (
    <div className="App">
      <Map 
        onMarkerClick={onLocationSelect} 
        locations={locations} 
        userLocation={userLocation} 
      />
    </div>
  );
};

export default MapController;