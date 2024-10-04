"use client";
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
import Locations from "./mockData/locations";

const Home = () => {
  const [currentScreen, setScreen] = useState("home");
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [infoBanner, setInfoBanner] = useState(false);
  const [showBottomNavigation, setShowBottomNavigation] = useState(true); // For BottomNavigation
  const screens = ["home", "mealPlan", "map", "favorites", "profile"];
  const scrollContainerRef = useRef(null); // Reference for scrollable container
  const lastScrollY = useRef(0); // Reference for last scroll position

  const mockMealPlan = [
    { date: "2024-09-24", restaurant: Locations[0].name, meal: Locations[0].menu.Tuesday.description, address: "Hollán Ernő u. 7, 1136 Budapest" },
    { date: "2024-09-25", restaurant: Locations[1].name, meal: Locations[1].menu.Wednesday.description, address: "Hollán Ernő u. 7, 1136 Budapest" },
    { date: "2024-09-26", restaurant: Locations[2].name, meal: Locations[2].menu.Thursday.description, address: "Hollán Ernő u. 7, 1136 Budapest" },
  ];

  // Scroll event handler to toggle BottomNavigation based on scroll direction
  const handleScroll = () => {
    const currentScrollY = scrollContainerRef.current.scrollTop; // Use scrollTop for the container
    if (currentScrollY > lastScrollY.current && currentScrollY > 5) {
      // Scrolling down
      setShowBottomNavigation(false);
    } else if (currentScrollY < lastScrollY.current) {
      // Scrolling up
      setShowBottomNavigation(true);
    }

    lastScrollY.current = currentScrollY;
  };

  // Attach scroll event listener to the container
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
    if (currentScreen !== "map" && showBottomNavigation) return <BottomNavigation setScreen={setScreen} />;
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
        {renderScreen()}
        <div style={{ marginTop: "100px" }}>
          {displayBottomNavigation()}
        </div>
      </div>
    </div>
  );
};

export default Home;