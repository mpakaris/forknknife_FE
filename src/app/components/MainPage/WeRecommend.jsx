import CarouselSmall from "./CarouselSmall";
 
const NavbarCarousel = ({onRouteSelect}) => {
  const routes = [
    {
      "profile": "Budapest in 1 Day",
      "name": "Quick and Dirty",
      "locations": ["Onyx", "Menza", "New York Café", "Hungarikum Bistro", "Rosenstein"],
      "imgUrl": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/7d/c8/44/caption.jpg?w=1200&h=-1&s=1&cx=1920&cy=1080&chk=v1_9817f79058fd368e8b32"
    },
    {
      "profile": "Long Weekend",
      "name": "Budapest's Gems",
      "locations": ["Borkonyha Winekitchen", "Mazel Tov", "Könyvbár & Restaurant", "Fricska Gastropub", "Café Gerbeaud"],
      "imgUrl": "https://media.nomadicmatt.com/2023/budapestwhere.jpeg"
    },
    {
      "profile": "Female Bachelor Party",
      "name": "Ladies' Night Out",
      "locations": ["Mazel Tov", "Spíler BistroPub", "Tuning Bar & Burger", "Borkonyha Winekitchen", "Fausto’s"],
      "imgUrl": "https://static.wixstatic.com/media/7fe25f_4a0c4d37a43d4383823807ecb166647d~mv2.jpg/v1/fill/w_576,h_530,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/7fe25f_4a0c4d37a43d4383823807ecb166647d~mv2.jpg"
    },
    {
      "profile": "Male Bachelor Party",
      "name": "Boys' night out",
      "locations": ["Rosenstein", "Pesti Disznó", "Bock Bisztró", "Menza", "Fricska Gastropub"],
      "imgUrl": "https://europebachelorparty.com/uploads/budapest/budapest.jpeg"
    },
    {
      "profile": "Family is a Bliss",
      "name": "Fun and Flavor for All",
      "locations": ["Hungarikum Bistro", "Rosenstein", "Menza", "Paprika Vendéglő", "Kéhli Vendéglő"],
      "imgUrl": "https://images.squarespace-cdn.com/content/v1/56abec0001dbae35f26b2da0/1514688043952-E8XVG2NYCCRD4NUT0T6Z/Budapest+with+Kids"
    },
    {
      "profile": "Couples on Tour",
      "name": "A Taste of Romance",
      "locations": ["Könyvbár & Restaurant", "Borkonyha Winekitchen", "Onyx", "Fausto’s", "Kacsa Restaurant"],
      "imgUrl": "https://eventland.eu/wp-content/uploads/2023/05/Citadella-Panorama-restaurant-497x350-1.jpg"
    },
    {
      "profile": "Week-Long Tourist",
      "name": "Budapest's Hidden Culinary Treasures",
      "locations": [
        "Onyx",
        "Borkonyha Winekitchen",
        "New York Café",
        "Costes",
        "Könyvbár & Restaurant",
        "Mazel Tov",
        "Rosenstein",
        "Menza",
        "Hungarikum Bistro",
        "Fricska Gastropub",
        "St. Andrea Wine & Skybar",
        "Kéhli Vendéglő",
        "Pesti Disznó",
        "Babel Budapest",
        "Bock Bisztró"
      ],
      "imgUrl": "https://1.bp.blogspot.com/-3WRiC7dK4fw/Xdp8_54U5CI/AAAAAAABXaA/3k7JV7rB-8kcusAK36TCoXcxvJi0vQMzwCLcBGAsYHQ/s1600/2017%2BEurope%2BBudapest%2B07%2BGreat%2BMarket%2BHall.jpg"
    },
    {
      "profile": "Business Lunch",
      "name": "Classy and Convenient",
      "locations": ["Onyx", "Costes", "Borkonyha Winekitchen", "St. Andrea Wine & Skybar", "Babel Budapest"],
      "imgUrl": "https://budapestglobal.org/wp-content/uploads/2024/03/shutterstock_1078814498-min-2-1024x571.jpg"
    }
  ]
  
  const [selectedOption, setOption] = "";

  return (
    <div className="flex flex-col items-start px-3 my-3">
      <h4 className="text-white w-full text-md font-bold mb-2 border-gray-200 border-b-2 pb-2">
        We Recommend
      </h4>
      <div className="w-full">
        <CarouselSmall options={routes} onRouteSelect={onRouteSelect}/>
      </div>
    </div>
  );
}

export default NavbarCarousel;