import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Import Swiper styles
import { shuffleLocations } from "../../utils/shuffleLocations";
import { useFetchFunFacts } from "../../utils/useFetchFunFacts"; // Adjust the import path if necessary
const FunFacts = () => {
  const { funFacts, loading } = useFetchFunFacts();
  const [selectedOption, setSelectedOption] = useState("All"); // State for dropdown selection

  if (loading) {
    return <p className="text-white text-center">Loading...</p>;
  }

  const shuffledFunFacts = shuffleLocations(funFacts);

  // Filter facts based on selected option
  const filteredFunFacts =
    selectedOption === "All"
      ? shuffledFunFacts
      : shuffledFunFacts.filter((option) => option.type === selectedOption);

  return (
    <div className="w-full px-3 text-gray-200">
      <div className="flex items-center justify-between my-3 border-b-2 border-gray-200 pb-2">
        <h1>Facts about Budapest:</h1>
        <select
          className="bg-gray-700 text-gray-200 border border-gray-600 
            text-xs rounded p-2 w-1/2"
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          <option value="All">All</option>
          <option value="History">History</option>
          <option value="Culture">Culture</option>
          <option value="Food">Food</option>
          <option value="Architecture">Architecture</option>
          <option value="City">City</option>
          <option value="Monuments">Monuments</option>
          <option value="Language">Language</option>
          <option value="Misc">Misc</option>
        </select>
      </div>
      <div className="mt-5">
        <Swiper
          spaceBetween={20}
          slidesPerView={1.1}
          grabCursor={true}
        >
          {filteredFunFacts.map((option, index) => (
            <SwiperSlide key={index}>
              <div className="flex bg-gray-900 rounded-lg mb-2 overflow-hidden h-40 shadow-inner transition-shadow duration-300">
                {/* 1/3 for the image */}
                <div className="w-1/3">
                  <Image
                    width={50}
                    height={100}
                    src="/images/historical_cultural.png" // Adjust the path if necessary
                    alt="Historical Cultural"
                    className="object-cover h-full w-full" // Make the image cover the area
                  />
                </div>
                {/* 2/3 for the text */}
                <div className="w-2/3 p-3 flex flex-col items-center my-auto text-gray-200">
                  <p className="text-xs mb-5">{option.id} | {option.type}</p>
                  <p className="text-xs flex-grow text-center">{option.fact}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FunFacts;