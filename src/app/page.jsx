"use client";
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

const Home = () => {
  const [currentScreen, setScreen] = useState("home");
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [showBottomNavigation, setShowBottomNavigation] = useState(true);
  const [infoBanner, setInfoBanner] = useState(false);
  const lastScrollY = useRef(0); // useRef to track scroll position
  const scrollContainerRef = useRef(null); // Scroll container reference
  const screens = ["home", "mealPlan", "map", "favorites", "profile"];
  // const mockMealPlan = [
  //   { date: "2024-09-24", restaurant: Locations[0].name, meal: Locations[0].menu.Tuesday.description, address: "Hollán Ernő u. 7, 1136 Budapest" },
  //   { date: "2024-09-25", restaurant: Locations[1].name, meal: Locations[1].menu.Wednesday.description, address: "Hollán Ernő u. 7, 1136 Budapest" },
  //   { date: "2024-09-26", restaurant: Locations[2].name, meal: Locations[2].menu.Thursday.description, address: "Hollán Ernő u. 7, 1136 Budapest" },
  // ];

  // Scroll event handler to toggle BottomNavigation based on scroll direction
  const handleScroll = () => {
    const currentScrollY = scrollContainerRef.current.scrollTop; // Use the ref to track the scroll position
    if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
      // Scrolling down
      setShowBottomNavigation(false);
    } else if (currentScrollY < lastScrollY.current) {
      // Scrolling up
      setShowBottomNavigation(true);
    }
    lastScrollY.current = currentScrollY; // Update ref value
  };

  // Attach scroll event listener to the scrollable container
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
        return <MapController />;
      case "mealPlan":
        return <MealPlanController mealPlan={mockMealPlan} />;
      case "profile":
        return <p>PROFILE</p>;
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
          initial={{ y: 100, opacity: 0 }} // Hidden initially
          animate={{ y: showBottomNavigation ? 0 : 100, opacity: showBottomNavigation ? 1 : 0 }} // Animate based on visibility
          transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth animation
          className="fixed bottom-0 left-0 right-0 z-50"
        >
          <BottomNavigation setScreen={setScreen} />
        </motion.div>
      );
    }
  };

  return (
    <div ref={scrollContainerRef} className="App h-screen flex flex-col overflow-y-auto bg-black scrollbar-hidden">
      <div className="relative z-10">
        {displayNavbar()}
      </div>
      <div className="sticky top-0 z-20 bg-white">
        <NavbarSearch setScreen={setScreen} currentScreen={currentScreen} />
      </div>
      <div className="flex-grow">
        {/* {renderInfoBanner()} */}
        {renderScreen()}
        <div style={{ marginTop: "100px" }}>
          {displayBottomNavigation()}
        </div>
      </div>
    </div>
  );
};

export default Home;