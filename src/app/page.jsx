"use client";
import axios from 'axios';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from "react";
import Spinner from "./components/Home/Spinner";
// import NavbarCarousel from "./components/MainPage/NavbarCarousel";
// import NavbarCarouselFavorites from "./components/MainPage/NavbarCarouselFavorites";
// import NavbarCarouselLastChecked from "./components/MainPage/NavbarCarouselLastChecked";
// import NavbarCarouselMayAlsoLike from "./components/MainPage/NavbarCarouselMayAlsoLike";
// import NavbarCarouselWeRecommend from "./components/MainPage/NavbarCarouselWeRecommend";
import CloseToYourLocation from './components/MainPage/CloseToYourLocation';
import InYourDistrict from "./components/MainPage/InYourDistrict";
import NavbarSearch from "./components/MainPage/NavbarSearch";
import TopInfoBanner from "./components/MainPage/TopInfoBanner";
import MapController from "./components/Maps/MapController";
import MealPlanController from './components/MealPlan/MealPlanController';
import BottomNavigation from "./components/Navigation/BottomNavigation";
import Navbar from "./components/Navigation/Navbar";
import mockLocations from './mockData/locations';

const Home = () => {
  const [currentScreen, setScreen] = useState("home");
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [showBottomNavigation, setShowBottomNavigation] = useState(true);
  const [infoBanner, setInfoBanner] = useState(false);
  const [locations, setLocations] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [progress, setProgress] = useState(10); // Progress for loading bar
  const lastScrollY = useRef(0);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        const newProgress = oldProgress + 10;
        if (newProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return newProgress;
      });
    }, 900);
  
    fetchLocations();
  
    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  const fetchLocations = async () => {
    setLoading(true);
    try {
      let fetchedLocations;
      if (process.env.NEXT_PUBLIC_ENV === 'development') {
        const response = await axios.get(
          "http://0.0.0.0:5001/getstuffdone-80541/us-central1/getAllCollections"
        );
        fetchedLocations = Object.entries(response.data).map(([uuid, details]) => ({
          uuid,
          ...details,
        }));
      } else {
        // Use mock data in PROD mode
        fetchedLocations = mockLocations;
      }

      setLocations(fetchedLocations);
    } catch (error) {
      console.error("Error fetching locations:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  // Scroll event handler to toggle BottomNavigation based on scroll direction
  const handleScroll = () => {
    const currentScrollY = scrollContainerRef.current.scrollTop;
    if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
      setShowBottomNavigation(false);
    } else if (currentScrollY < lastScrollY.current) {
      setShowBottomNavigation(true);
    }
    lastScrollY.current = currentScrollY;
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case "home":
        return (
          <div className="homeScreen">
            <InYourDistrict locations={locations} />
            <InYourDistrict locations={locations} />
            <CloseToYourLocation locations={locations} />
            <CloseToYourLocation locations={locations} />
            {/* <NavbarCarousel /> 
            <NavbarCarouselLastChecked nearbyLocations={nearbyLocations}/>
            <NavbarCarouselMayAlsoLike />
            <NavbarCarouselFavorites nearbyLocations={nearbyLocations}/>
            <NavbarCarouselWeRecommend /> */}
          </div>
        );
      case "map":
        return <MapController locations={locations} />;
      case "mealPlan":
        return <MealPlanController mealPlan={mockMealPlan} />;
      case "profile":
        return <p className="text-white text-center">PROFILE</p>
      default:
        return <div style={{ height: "750px" }} className="bg-gray-300 opacity-40">Screen not found: {currentScreen}</div>;
    }
  };

  const renderInfoBanner = () => {
    if (infoBanner) return <TopInfoBanner message={"Sample Info Banner"} />;
  };

  const displayNavbar = () => {
    if (currentScreen !== "map" && navbarVisible) return <Navbar />;
  };

  const displayBottomNavigation = () => {
    if (currentScreen !== "map") {
      return (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: showBottomNavigation ? 0 : 100, opacity: showBottomNavigation ? 1 : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed bottom-0 left-0 right-0 z-50"
        >
          <BottomNavigation setScreen={setScreen} />
        </motion.div>
      );
    }
  };

  return (
    <div ref={scrollContainerRef} className="App h-screen flex flex-col overflow-y-auto bg-black scrollbar-hidden">
      {loading ? (
        <Spinner progress={progress} />
      ) : (
        <>
          <div className="relative z-10">
            {displayNavbar()}
          </div>
          <div className="sticky top-0 z-20 bg-white">
            <NavbarSearch setScreen={setScreen} currentScreen={currentScreen} />
          </div>
          <div className="flex-grow">
            {renderScreen()}
            <div style={{ marginTop: "100px" }}>
              {displayBottomNavigation()}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;