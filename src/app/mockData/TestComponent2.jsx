/* eslint-disable @next/next/no-img-element */
"use client";

const TestComponent2 = ({ selectedLocalRoute }) => {
  return (
    <>
      {selectedLocalRoute && (
        <div className="user-profile px-4">
          <h1 className="text-teal-900 text-2xl text-bold text-center mb-3 border-white border-b-2 pb-2">
            Eat like a Local
          </h1>
          <div className="flex items-center justify-center mb-3 px-6">
            <img
              src={selectedLocalRoute.imgUrl}
              alt={`${selectedLocalRoute.name}'s Route`}
              className="w-20 h-20 rounded-full mr-4"
            />
          </div>
          <div className="p-4 text-gray-800">
            <p className="px-10 text-center">"Hey, I am {selectedLocalRoute.name}!</p>
            <p className="px-10 text-center">{selectedLocalRoute.description}"</p>
            <p className="text-gray-700 mt-5"> These are my favorite places: </p>
          </div>
          {selectedLocalRoute.locations.map((location, index) => (
            <div
              key={index}
              className="location-card bg-gray-100 p-4 m-4 rounded-lg shadow-lg"
            >
              <img
                src={location.imgUrl}
                alt={location.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />

              {/* location Details */}
              <div className="p-4">
                <h2 className="text-xl font-bold text-teal-800 mb-2">
                  {location.name}
                </h2>
                <p className="text-gray-600">
                  <strong>Address:</strong> {location.address}
                </p>
                <p className="text-teal-800 font-bold mt-2">Why I love this place: </p>
                <p className="text-gray-700 mt-2">{location.tip}</p>
                <p className="text-sm text-gray-500 mt-4">
                  <strong>Coordinates:</strong> {location.lat}, {location.lng}
                </p>
              </div>
            </div>
            ))}
        </div>
      )}
    </>
  );
};

export default TestComponent2;
