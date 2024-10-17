"use client";
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from "react";
import BottomSheetDrawer from "./components/BottomSheetDrawer/BottomSheetDrawer";
import FunFacts from "./components/Home/FunFacts";
import HungarianCulinary from "./components/Home/HungarianCulinary";
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

  const locations2 = [
    { lat: 47.50060910372449, 
      lng:  19.084300931135 },
    { lat: 47.50750735967782, 
      lng: 19.045819700055304}
  ];


const mustVisitRestaurants = [
  {
    name: "New York Café",
    address: "1073 Budapest, Erzsébet krt. 9-11",
    description: "Often referred to as 'the most beautiful café in the world,' New York Café is a historical gem with ornate ceilings and elegant interiors. Opened in 1894, it was a favorite of Hungarian writers and intellectuals. Today, it remains a must-visit, offering a menu of fine Hungarian and international dishes. The café’s heritage and stunning decor make it an iconic dining destination in Budapest.",
    lat: 47.497912,
    lng: 19.063931,
    imageUrl: "https://images.squarespace-cdn.com/content/v1/5a3bb03b4c326d76de73ddaa/1646011440970-83IHDUUK8Z65OFCZGV4B/The+Common+Wanderer-406.jpg"
  },
  {
    name: "Gundel",
    address: "1146 Budapest, Állatkerti krt. 2",
    description: "A culinary institution since 1894, Gundel is known for its luxurious atmosphere and Hungarian cuisine with a fine dining twist. The restaurant has hosted royalty, politicians, and celebrities. Signature dishes include Gundel pancakes and various game meats. It's famous for preserving the tradition of Hungarian gastronomy while adding modern flair.",
    lat: 47.519684,
    lng: 19.083014,
    imageUrl: "https://www.budapestinfo.hu/storage/content-pages/1IR9IdPvJ1U6nV6u1Iwmnd4i2ZtsHIXTKrKKIiZD.jpg"

  },
  {
    name: "Onyx",
    address: "1051 Budapest, Vörösmarty tér 7-8",
    description: "One of the few Michelin-starred restaurants in Budapest, Onyx offers an upscale culinary experience. Opened in 2007, it has gained a reputation for contemporary Hungarian cuisine. The tasting menu, paired with Hungarian wines, highlights the best of local ingredients with innovative techniques. Onyx is a perfect spot for fine dining enthusiasts looking for a refined meal.",
    lat: 47.496960,
    lng: 19.050990,
    imageUrl: "https://www.elmenyterkep.hu/upload/upimages/19510.jpg"
  },
  {
    name: "Borkonyha Winekitchen",
    address: "1051 Budapest, Sas u. 3",
    description: "A Michelin-starred bistro that combines Hungarian traditions with French cuisine, Borkonyha is beloved for its excellent food and extensive wine list. Located near St. Stephen's Basilica, it offers a relaxed yet stylish dining experience. The menu changes frequently, highlighting fresh, seasonal ingredients and creative dishes.",
    lat: 47.500318,
    lng: 19.053360,
    imageUrl: "https://www.hungryformore-mag.com/wp-content/uploads/2016/07/restaurant_borkonyha_budapest_interior_2-1080x720.jpg"
  },
  {
    name: "Costes Downtown",
    address: "1051 Budapest, Vigyázó Ferenc u. 5",
    description: "Located near the Danube River, Costes Downtown is a Michelin-starred restaurant known for its contemporary international cuisine. Opened in 2015 as a sister restaurant to Costes, it emphasizes fresh, local ingredients and a farm-to-table concept. The relaxed, elegant setting and excellent service make it a top choice for fine dining in Budapest.",
    lat: 47.499842,
    lng: 19.048124,
    imageUrl: "https://i.szalas.hu/pois/19836/original/61164.jpg"
  },
  {
    name: "Menza",
    address: "1061 Budapest, Liszt Ferenc tér 2",
    description: "Menza is a trendy spot offering modern interpretations of classic Hungarian dishes in a retro-style atmosphere. Located in the vibrant Liszt Ferenc Square, it’s popular among both locals and tourists. The menu includes goulash, schnitzel, and other Hungarian favorites, all served in a laid-back, lively setting. A great place for casual yet authentic dining.",
    lat: 47.504021,
    lng: 19.065040,
    imageUrl: "https://www.55plus-magazin.net/uploads/medium/menza_bar.jpg"
  },
  {
    name: "Kollázs Brasserie & Bar",
    address: "1051 Budapest, Széchenyi István tér 5-6",
    description: "Part of the luxurious Four Seasons Hotel Gresham Palace, Kollázs Brasserie & Bar offers an upscale dining experience with a focus on contemporary European cuisine. The restaurant's art-deco design and stunning views of the Chain Bridge make it a memorable place for a meal. Kollázs is known for its refined yet approachable dishes, extensive wine list, and top-notch service.",
    lat: 47.499691,
    lng: 19.048290,
    imageUrl: "https://www.fourseasons.com/alt/img-opt/~70.1530.0,0000-308,3993-3000,0000-1687,5000/publish/content/dam/fourseasons/images/web/BUD/BUD_663_original.jpg"
  }
];

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
            <HungarianCulinary />
            <CloseToYourLocation locations={locations} onLocationSelect={openDrawer} />
            <FunFacts />          
            {/* <Picture 
              src="/images/cultural_historical.png" 
              alt="Girl dreaming about food" 
            /> */}
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
          selectedRoute={mustVisitRestaurants}
          userLocation={userLocation}
          type="showSelectedRoute"
        />
      )}
    </div>
  );
};

export default Home;
