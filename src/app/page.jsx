"use client";
import { useState } from "react";
import BottomNavigation from "./components/BottomNavigation";
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
import TopInfoBanner from "./components/TopInfoBanner";
import Locations from './mockData/locations';

const Home = () => {
  const [currentScreen, setScreen] = useState("mealPlan");
  const [currentLocation, setLocation] = useState(undefined);
  const [infoBanner, setInfoBanner] = useState(false);
  const [infoMsg, setInfoMsg] = useState("New FORK 'n KNIFE Version available!");
  const mockMealPlan = [
    {
      date: "2024-09-24", // current date
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
    // {
    //   date: "2024-09-26",
    //   restaurant: Locations[2].name, // Gettó Gulyás
    //   meal: Locations[2].menu.Thursday.description, // Vegetable Stew + Sausages
    //   address: "Hollán Ernő u. 7, 1136 Budapest",
    // },
    // {
    //   date: "2024-09-27",
    //   restaurant: Locations[0].name, // Budapest Jazz Club
    //   meal: Locations[0].menu.Friday.description, // Tomato Soup + Grilled Salmon
    //   address: "Hollán Ernő u. 7, 1136 Budapest",
    // }
  ];

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
        return (
          <div className="mapScreen">
            <MapController />
          </div>
        );
      case "mealPlan": 
        return(
          <div className="mealPlan">
            <MealPlanController mealPlan={mockMealPlan} />
          </div>
      );
      default:
        return <div className="homeScreen">Screen not found: {currentScreen}</div>;
    }
  };

  const renderInfoBanner = () => {
    if (infoBanner) return <TopInfoBanner message={infoMsg}/>
  }

  return (
    <div className="App h-screen flex flex-col">
      <div className="sticky top-0 z-10 bg-white">
        <Navbar />
        <NavbarSearch setScreen={setScreen}/>
      </div>
      <div className="flex-grow overflow-y-auto">
        {renderInfoBanner()}
        {renderScreen()}
        <ScrollingBuffer />
      </div>
      <BottomNavigation setScreen={setScreen} />
    </div>
  );
};

export default Home;