"use client";
import axios from 'axios';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from "react";
import { useSwipeable } from 'react-swipeable';
import NavbarCarousel from "./components/MainPage/NavbarCarousel";
import NavbarCarouselFavorites from "./components/MainPage/NavbarCarouselFavorites";
import NavbarCarouselLastChecked from "./components/MainPage/NavbarCarouselLastChecked";
import NavbarCarouselMayAlsoLike from "./components/MainPage/NavbarCarouselMayAlsoLike";
import NavbarCarouselWeRecommend from "./components/MainPage/NavbarCarouselWeRecommend";
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
  const lastScrollY = useRef(0);
  const scrollContainerRef = useRef(null);
  const screens = ["home", "mealPlan", "map", "favorites", "profile"];

  useEffect(() => {
    const fetchLocations = async () => {
      setLoading(true);
      try {
        if (process.env.NEXT_PUBLIC_ENV === 'development') {
          const response = await axios.get("http://192.168.0.167:5001/getstuffdone-80541/us-central1/getAllCollections");
          const locationsArray = Object.entries(response.data).map(([uuid, details]) => ({
            uuid,
            ...details,
          }));
          setLocations(locationsArray);
        } else {
          // Use mock data in PROD mode
          setLocations(mockLocations);
        }
      } catch (error) {
        console.error("Error fetching locations:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLocations();
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

  const handlers = useSwipeable({
    onSwipedLeft: () => swipeScreenHandler("left"),
    onSwipedRight: () => swipeScreenHandler("right"),
    delta: 200,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const swipeScreenHandler = (direction) => {
    const currentIndex = screens.indexOf(currentScreen);
    if (direction === "left") {
      const nextScreen = screens[(currentIndex + 1) % screens.length];
      setScreen(nextScreen);
    } else if (direction === "right") {
      const prevScreen = screens[(currentIndex - 1 + screens.length) % screens.length];
      setScreen(prevScreen);
    }
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case "home":
        return (
          <div className="homeScreen">
            <NavbarCarousel />
            <NavbarCarouselLastChecked />
            <NavbarCarouselMayAlsoLike />
            <NavbarCarouselFavorites />
            <NavbarCarouselWeRecommend />
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

  const renderSpinner = () => (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-b-4 border-blue-500"></div>
    </div>
  );

  return (
    <div ref={scrollContainerRef} className="App h-screen flex flex-col overflow-y-auto bg-black scrollbar-hidden">
      <div className="relative z-10">
        {displayNavbar()}
      </div>
      <div className="sticky top-0 z-20 bg-white">
        <NavbarSearch setScreen={setScreen} currentScreen={currentScreen} />
      </div>
      <div className="flex-grow">
        {loading ? renderSpinner() : renderScreen()}
        <div style={{ marginTop: "100px" }}>
          {displayBottomNavigation()}
        </div>
      </div>
    </div>
  );
};

export default Home;