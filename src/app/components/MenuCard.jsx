import React from "react";
import { FaShareAlt } from "react-icons/fa";

const MenuCard = ({ menu }) => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Menu of the Day",
          text: `${menu.description}\nDessert: ${menu.dessert} (${menu.dessertPrice})\nPrice: ${menu.price}\nTags: ${menu.tags.join(", ")}`,
        });
        console.log("Content shared successfully");
      } catch (error) {
        console.error("Error sharing content:", error);
      }
    } else {
      alert("Web Share API is not supported in your browser.");
    }
  };

  return (
    <div className="menu-card">
      <h3>{menu.description}</h3>
      <p>Price: {menu.price}</p>
      <p>Dessert: {menu.dessert} ({menu.dessertPrice})</p>
      <p>Tags: {menu.tags.join(", ")}</p>
      <button className="share-btn" onClick={handleShare}>
        <FaShareAlt /> Share
      </button>
    </div>
  );
};

// Example usage:
const menu = {
  description: "Tomato Soup + Grilled Salmon",
  price: "2490 Ft",
  dessert: "Chestnut Puree",
  dessertPrice: "810 Ft",
  tags: ["seafood", "healthy", "light", "grilled"],
};

const App = () => (
  <div>
    <MenuCard menu={menu} />
  </div>
);

export default App;
