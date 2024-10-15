"use client";
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from "react";
import BottomSheetDrawer from "./components/BottomSheetDrawer/BottomSheetDrawer";
import FunFacts from "./components/Home/FunFacts";
import Spinner from "./components/Home/Spinner";
import CloseToYourLocation from './components/MainPage/CloseToYourLocation';
import InYourDistrict from "./components/MainPage/InYourDistrict";
import NavbarSearch from "./components/MainPage/NavbarSearch";
import MapController from "./components/Maps/MapController";
import MealPlanController from './components/MealPlan/MealPlanController';
import BottomNavigation from "./components/Navigation/BottomNavigation";
import { handleLocationPermission } from './utils/locationUtils';
import { useFetchLocations } from './utils/useFetchLocations';

const Home = () => {
  const [currentScreen, setScreen] = useState("home");
  const [showBottomNavigation, setShowBottomNavigation] = useState(true);
  const [progress, setProgress] = useState(10); 
  const [userLocation, setUserLocation] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedLocationId, setSelectedLocationId] = useState(null);
  const lastScrollY = useRef(0);
  const scrollContainerRef = useRef(null);

  const { locations, loading } = useFetchLocations();

  // Progress Bar Simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => Math.min(oldProgress + 10, 100));
    }, 300);

    handleLocationPermission(setUserLocation); 

    return () => clearInterval(interval);
  }, []);

  // Scroll event handler to toggle BottomNavigation based on scroll direction
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      const handleScroll = () => {
        const currentScrollY = scrollContainer.scrollTop;
        setShowBottomNavigation(currentScrollY <= lastScrollY.current || currentScrollY < 50);
        lastScrollY.current = currentScrollY;
      };
      scrollContainer.addEventListener("scroll", handleScroll);
      return () => scrollContainer.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const openDrawer = (uuid) => {
    setSelectedLocationId(uuid);
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
    setSelectedLocationId(null);
  };

  const selectedLocation = locations.find((loc) => loc.uuid === selectedLocationId);

  const renderScreen = () => {
    switch (currentScreen) {
      case "home":
        return (
          <div className="homeScreen">
            <InYourDistrict locations={locations} onLocationSelect={openDrawer} />
            <CloseToYourLocation locations={locations} onLocationSelect={openDrawer} />
            <FunFacts />
          </div>
        );
      case "map":
        return <MapController locations={locations} userLocation={userLocation} onLocationSelect={openDrawer} />;
      case "mealPlan":
        return <MealPlanController mealPlan={mockMealPlan} />;
      case "profile":
        return <p className="text-white text-center">PROFILE</p>;
      default:
        return <div style={{ height: "750px" }} className="bg-gray-300 opacity-40">Screen not found: {currentScreen}</div>;
    }
  };

  const displayBottomNavigation = () => (
    currentScreen !== "map" && (
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: showBottomNavigation ? 0 : 100, opacity: showBottomNavigation ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed bottom-0 left-0 right-0 z-50"
      >
        <BottomNavigation setScreen={setScreen} />
      </motion.div>
    )
  );

  return (
    <div ref={scrollContainerRef} className="App h-screen flex flex-col overflow-y-auto bg-black scrollbar-hidden">
      {loading ? (
        <Spinner progress={progress} />
      ) : (
        <>
          <div className="sticky top-0 z-20 bg-white">
            <NavbarSearch setScreen={setScreen} currentScreen={currentScreen} />
          </div>
          <div className="flex-grow">
            {renderScreen()}
            <div style={{ marginTop: "100px" }}>{displayBottomNavigation()}</div>
          </div>
        </>
      )}

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

export default Home;