'use client'
import { AnimatePresence, motion } from 'framer-motion'; // Import AnimatePresence for transitions
import { useState } from "react";
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
import ScrollingBuffer from "./components/ScrollingBuffer";
import Locations from "./mockData/locations";

const Home = () => {
  const [currentScreen, setScreen] = useState("home");
  const [direction, setDirection] = useState("right"); // Track swipe direction
  const screens = ["home", "mealPlan", "map", "favorites", "profile"];
  
  const mockMealPlan = [
    {
      date: "2024-09-24",
      restaurant: Locations[0].name, // Budapest Jazz Club
      meal: Locations[0].menu.Tuesday.description, // Chicken Paprikash + Noodles with Cottage Cheese
      address: "Hollán Ernő u. 7, 1136 Budapest",
    },
    {
      date: "2024-09-25",
      restaurant: Locations[1].name, // Cafe Vian
      meal: Locations[1].menu.Wednesday.description, // Mushroom Soup + Beef Bourguignon
      address: "Hollán Ernő u. 7, 1136 Budapest",
    },
    {
      date: "2024-09-26",
      restaurant: Locations[2].name, // Gettó Gulyás
      meal: Locations[2].menu.Thursday.description, // Vegetable Stew + Sausages
      address: "Hollán Ernő u. 7, 1136 Budapest",
    },
  ];

  const handlers = useSwipeable({
    onSwipedLeft: () => swipeScreenHandler("left"),
    onSwipedRight: () => swipeScreenHandler("right"),
    delta: 200,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const swipeScreenHandler = (direction) => {
    setDirection(direction); // Set direction for animation
    const currentIndex = screens.indexOf(currentScreen);
    if (direction === "left") {
      const nextScreen = screens[(currentIndex + 1) % screens.length]; 
      setScreen(nextScreen);
    } else if (direction === "right") {
      const prevScreen = screens[(currentIndex - 1 + screens.length) % screens.length]; 
      setScreen(prevScreen);
    }
  };

  const renderScreen = (screen) => {
    switch (screen) {
      case "home":
        return (
          <div key="home" {...handlers}>
            <NavbarCarousel />
            <NavbarCarouselLastChecked />
            <NavbarCarouselMayAlsoLike />
            <NavbarCarouselFavorites />
            <NavbarCarouselWeRecommend />
          </div>
        );
      case "map":
        return (
          <div key="map" {...handlers}>
            <MapController />
          </div>
        );
      case "mealPlan": 
        return (
          <div key="mealPlan" {...handlers}>
            <MealPlanController mealPlan={mockMealPlan} />
          </div>
        );
      default:
        return (
          <div key="default" className="homeScreen bg-gray-300 opacity-40" {...handlers}>
            Screen not found: {screen}
          </div>
        );
    }
  };

  const transitionVariants = {
    enter: (direction) => ({
      x: direction === "left" ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction === "left" ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  return (
    <div className="App h-screen flex flex-col overflow-hidden"> {/* Prevent overflow */}
      <div className="relative z-10">
        <Navbar />
      </div>
      <div className="sticky top-0 z-20 bg-white">
        <NavbarSearch setScreen={setScreen} />
      </div>
      <div className="flex-grow relative overflow-hidden"> {/* Allow content to grow and overflow */}
        <AnimatePresence custom={direction}>
          <motion.div
            key={currentScreen} // Set unique key for each screen
            custom={direction}
            variants={transitionVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
            style={{ position: "absolute", width: "100%", height: "100%", overflowY: "auto" }} // Ensure full-screen size and scrollability
          >
            {renderScreen(currentScreen)}
          </motion.div>
        </AnimatePresence>
        <ScrollingBuffer />
      </div>
    </div>
  );
};

export default Home;