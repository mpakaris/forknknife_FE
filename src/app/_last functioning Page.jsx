// Home.jsx (or page.tsx)
"use client";
import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";
import { useState } from "react";
import BottomSheetDrawer from "./components/BottomSheetDrawer";
import { ModalContent } from "./components/ModalContent";
import Navbar from "./components/Navbar";

const Map = dynamic(() => import("./components/MapTiler"), { ssr: false });

const Home = () => {
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

  const locations = [
    { id: "abc", name: "Budapest Jazz Club", lat: 47.51374, lng: 19.04976 },
    { id: "def", name: "Cafe Vian", lat: 47.50644, lng: 19.05866 },
    { id: "ghi", name: "Gettó Gulyás", lat: 47.49791, lng: 19.05468 },
  ];

  // Find location details based on selected ID
  const selectedLocation = locations.find(
    (loc) => loc.id === selectedLocationId
  );

  return (
    <div className="App">
      <Navbar />
      <Map onMarkerClick={openDrawer} locations={locations} />
      {selectedLocation && (
        <BottomSheetDrawer isOpen={isDrawerOpen} onClose={closeDrawer}>
          <ModalContent
            name={selectedLocation.name}
            address="Sample Address"
            contact="Sample Contact"
          />
        </BottomSheetDrawer>
      )}
    </div>
  );
};

export default Home;
