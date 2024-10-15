"use client";
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from "react";
import Spinner from "./components/Home/Spinner";
import CloseToYourLocation from './components/MainPage/CloseToYourLocation';
import InYourDistrict from "./components/MainPage/InYourDistrict";
import NavbarSearch from "./components/MainPage/NavbarSearch";
import MapController from "./components/Maps/MapController";
import MealPlanController from './components/MealPlan/MealPlanController';
import BottomNavigation from "./components/Navigation/BottomNavigation";
import Navbar from "./components/Navigation/Navbar";
import { handleLocationPermission } from './utils/locationUtils';
import { useFetchLocations } from './utils/useFetchLocations';

const Home = () => {
  const [currentScreen, setScreen] = useState("home");
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [showBottomNavigation, setShowBottomNavigation] = useState(true);
  const [progress, setProgress] = useState(10); 
  const [userLocation, setUserLocation] = useState(null);
  const lastScrollY = useRef(0);
  const scrollContainerRef = useRef(null);

  const { locations, loading } = useFetchLocations();  // Fetch locations using hook

  // Progress Bar Simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => Math.min(oldProgress + 10, 100));
    }, 900);

    handleLocationPermission(setUserLocation);  // Handle location permission during initial load

    return () => clearInterval(interval); // Clear interval on component unmount
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

  const renderScreen = () => {
    switch (currentScreen) {
      case "home":
        return (
          <div className="homeScreen">
            <InYourDistrict locations={locations} />
            <CloseToYourLocation locations={locations} />
          </div>
        );
      case "map":
        return <MapController locations={locations} userLocation={userLocation} />;
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
          <div className="relative z-10">{navbarVisible && <Navbar />}</div>
          <div className="sticky top-0 z-20 bg-white">
            <NavbarSearch setScreen={setScreen} currentScreen={currentScreen} />
          </div>
          <div className="flex-grow">
            {renderScreen()}
            <div style={{ marginTop: "100px" }}>{displayBottomNavigation()}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;