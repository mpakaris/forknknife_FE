"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useSwipeable } from 'react-swipeable';
import MapController from "./components/MapController";
import MealPlanController from './components/MealPlanController';
import Navbar from "./components/Navbar";
import NavbarCarousel from "./components/NavbarCarousel";
import NavbarCarouselFavorites from "./components/NavbarCarouselFavorites";
import NavbarCarouselLastChecked from "./components/NavbarCarouselLastChecked";
import NavbarCarouselMayAlsoLike from "./components/NavbarCarouselMayAlsoLike";
import NavbarCarouselWeRecommend from "./components/NavbarCarouselWeRecommend";
import NavbarSearch from "./components/NavbarSearch";
import TopInfoBanner from "./components/TopInfoBanner";
import Locations from "./mockData/locations";

const Home = () => {
  const [currentScreen, setScreen] = useState("home");
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [infoBanner, setInfoBanner] = useState(false);
  const screens = ["home", "mealPlan", "map", "favorites", "profile"];
  const mockMealPlan = [
    { date: "2024-09-24", restaurant: Locations[0].name, meal: Locations[0].menu.Tuesday.description, address: "Hollán Ernő u. 7, 1136 Budapest" },
    { date: "2024-09-25", restaurant: Locations[1].name, meal: Locations[1].menu.Wednesday.description, address: "Hollán Ernő u. 7, 1136 Budapest" },
    { date: "2024-09-26", restaurant: Locations[2].name, meal: Locations[2].menu.Thursday.description, address: "Hollán Ernő u. 7, 1136 Budapest" },
  ];

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavbarVisible(false);
    } else {
      setNavbarVisible(true);
    }
  };

  // Attach scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
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
        return <MapController />;
      case "mealPlan":
        return <MealPlanController mealPlan={mockMealPlan} />;
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

  return (
    <div className="App h-screen flex flex-col overflow-y-auto">
      <div className="relative z-10">
        {displayNavbar()}
      </div>
      <div className="sticky top-0 z-20 bg-white"> 
        <NavbarSearch setScreen={setScreen} />
      </div>
      <div className="flex-grow">
        {renderInfoBanner()}
        <AnimatePresence>
          <motion.div
            key={currentScreen}
            initial={{ opacity: 0, x: currentScreen === "home" ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: currentScreen === "home" ? 50 : -50 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full"
            {...handlers}
          >
            {renderScreen()}
          </motion.div>
        </AnimatePresence>
        {/* <ScrollingBuffer /> */}
      </div>
    </div>
  );
};

export default Home;