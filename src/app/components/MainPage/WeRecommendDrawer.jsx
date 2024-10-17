/* eslint-disable @next/next/no-img-element */
"use client";
import Restaurants from "../../mockData/restaurants";

const WeRecommendDrawer = ({ selectedTour }) => {

  const  getMatchingRestaurants= (arrayA, arrayB)=> {
    return arrayA.map(name => {
      return arrayB.find(restaurant => restaurant.name === name);
    }).filter(Boolean);
  }

  const resultsDTO = getMatchingRestaurants(selectedTour.locations, Restaurants);

  return (
    <div className="restaurant-list">
      <div className="flex items-center justify-center mb-6 px-6">
        <div className="w-1/3 flex justify-center">
          <img
            src={selectedTour.imgUrl}
            alt="Eszter Profile"
            className="w-20 h-20 rounded-full"
          />
        </div>
        <div className="w-2/3 pl-4">
          <h1 className="text-2xl text-gray-800">
            {selectedTour.name}
          </h1>
          <p className="text-xl text-gray-600">
            {selectedTour.profile}
          </p>
        </div>
      </div>
      {resultsDTO.map((restaurant, index) => (
        <div
          key={index}
          className="restaurant-card bg-gray-100 p-4 m-4 rounded-lg shadow-lg"
        >
          <img
            src={selectedTour.imgUrl}
            alt={restaurant.name}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold text-teal-800 mb-2">
              {restaurant.name}
            </h2>
            <p className="text-gray-600">
              <strong>Address:</strong> {restaurant.address}
            </p>
            <p className="text-gray-700 mt-2">{restaurant.description}</p>
            <p className="text-sm text-gray-500 mt-4">
              <strong>Coordinates:</strong> {restaurant.lat}, {restaurant.lng}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeRecommendDrawer;