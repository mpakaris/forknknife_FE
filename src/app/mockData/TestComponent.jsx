/* eslint-disable @next/next/no-img-element */
"use client";

const TestComponent = ({ locations }) => {
 
 return (
  <div className="restaurant-list">
     <div className="flex items-center justify-center mb-6 px-6">
       <img
         src="https://randomuser.me/api/portraits/women/10.jpg"
         alt="Eszter Profile"
         className="w-20 h-20 rounded-full mr-4"
       />
       <h1 className="text-2xl text-gray-800 text-center">
         Eszter's 7 Must-Visit Restaurants in Budapest
       </h1>
     </div>    
     {locations.map((restaurant, index) => (
      <div
        key={index}
        className="restaurant-card bg-gray-100 p-4 m-4 rounded-lg shadow-lg"
      >
        {/* Image at the top */}
        <img
          src={restaurant.imageUrl}
          alt={restaurant.name}
          className="w-full h-48 object-cover rounded-t-lg"
        />

        {/* Restaurant Details */}
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

export default TestComponent;