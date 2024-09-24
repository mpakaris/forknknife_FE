"use client";
import { useState } from "react";
import BottomNavigation from "./components/BottomNavigation";
import MapController from "./components/MapController";
import Navbar from "./components/Navbar";
import NavbarCarousel from "./components/NavbarCarousel";
import NavbarCarouselFavorites from "./components/NavbarCarouselFavorites";
import NavbarCarouselLastChecked from "./components/NavbarCarouselLastChecked";
import NavbarCarouselMayAlsoLike from "./components/NavbarCarouselMayAlsoLike";
import NavbarCarouselWeRecommend from "./components/NavbarCarouselWeRecommend";
import NavbarSearch from "./components/NavbarSearch";
import ScrollingBuffer from "./components/ScrollingBuffer";
import TopInfoBanner from "./components/TopInfoBanner";

const Home = () => {
  const [currentScreen, setScreen] = useState("map");
  const [currentLocation, setLocation] = useState(undefined);
  const [infoBanner, setInfoBanner] = useState(false);
  const [infoMsg, setInfoMsg] = useState("New FORK 'n KNIFE Version available!");

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