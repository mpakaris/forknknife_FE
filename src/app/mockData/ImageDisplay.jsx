/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import { useState } from "react";

const ImageDisplay = ({ locations }) => {
  const [currentLocationIndex, setCurrentLocationIndex] = useState(0); // Track the current location
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Track the current image in the location
  const [images, setImages] = useState([]); // Saved images
  const [imagesDis, setImagesDis] = useState([]); // Discarded images
  const [isLoading, setIsLoading] = useState(false); // Loading state

  // Filter locations to show only those without impressions (Type 1)
  const type1Locations = locations.filter(location => !Array.isArray(location.pictures) || location.pictures.length === 0);
  
  // Filter locations that have pictures (Type 2)
  const type2Locations = locations.filter(location => Array.isArray(location.pictures) && location.pictures.length > 0);

  // If there are no Type 1 locations available, return a message
  if (type1Locations.length === 0) {
    return <div>No locations available without impressions.</div>;
  }

  const currentLocation = type1Locations[currentLocationIndex]; // Get the current location
  const currentImage = currentLocation?.serpAPI?.images_results?.[currentImageIndex]?.original; // Get the current image

  const handleSaveImage = () => {
    if (currentImage) {
      setImages((prev) => [...prev, currentImage]); // Save image to saved array
    }
    handleNextImage();
  };

  const handleDiscardImage = () => {
    if (currentImage) {
      setImagesDis((prev) => [...prev, currentImage]); // Save image to discarded array
    }
    handleNextImage();
  };

  const handleNextImage = () => {
    // If more images are available in the current location, show the next image
    if (currentImageIndex < currentLocation?.serpAPI?.images_results?.length - 1) {
      setCurrentImageIndex((prev) => prev + 1);
    }
  };

  const handleNextLocation = async () => {
    setIsLoading(true);
    try {
      // POST request to save impressions with the entire location object
      const response = await axios.post("http://192.168.0.167:5001/getstuffdone-80541/us-central1/savePictures", {
        location: {
          ...currentLocation, // Send the entire currentLocation object
          pictures: images, // Add the impressions to the object
        },
      });
  
      if (response.status === 200) {
        setIsLoading(false);
        // Proceed to the next location and reset image index
        if (currentLocationIndex < type1Locations.length - 1) {
          setCurrentLocationIndex((prev) => prev + 1);
          setCurrentImageIndex(0); // Reset to the first image of the next location
          setImages([]); // Reset saved images for the new location
        } else {
          alert("No more locations available.");
        }
      } else {
        alert(`${currentLocation.name} was not saved successfully`);
        setIsLoading(false);
      }
    } catch (error) {
      alert(`${currentLocation.name} was not saved successfully: ${error.message}`);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-2xl text-teal-500 mt-4 text-center">{currentLocation.name}</h1>
      <p className="text-xs text-gray-200 mb-5 text-center">{currentImage?.slice(0, 60)}{currentImage?.length > 40 ? '...' : ''}</p>
      {console.log(locations)}

      <div className="image-wrapper">
        <img
          src={currentImage}
          alt="Location Image"
          className="w-full h-[50vh] object-cover"
        />
      </div>

      {/* Save/Discard buttons */}
      <div className="flex justify-center mt-4">
        <button onClick={handleSaveImage} className="bg-green-500 text-white px-4 py-2 rounded mr-4">
          KEEP
        </button>
        <button onClick={handleDiscardImage} className="bg-red-500 text-white px-4 py-2 rounded">
          DISCARD
        </button>
      </div>

      {/* Next Location button */}
      <div className="mt-4 text-center">
        <button onClick={handleNextLocation} className="bg-blue-500 text-white px-4 py-2 rounded">
          Next Location
        </button>
      </div>

      {/* Show loading spinner while POST request is executing */}
      {isLoading && (
        <div className="flex items-center justify-center mt-4">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-500"></div>
        </div>
      )}

      {/* Display saved URLs */}
      <div className="mt-4">
        <h3>Saved URLs:</h3>
        <ol className="list-decimal list-inside text-white">
          {images.map((url, index) => (
            <li key={index}>{url}</li>
          ))}
        </ol>
      </div>

      {/* List of Type 2 locations */}
      <div className="mt-4">
        <h3>Locations with Impressions:</h3>
        <ul className="list-disc list-inside text-white">
          {type2Locations.map((location, index) => (
            <li key={index}>{location.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ImageDisplay;