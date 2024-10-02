import { useState } from 'react';
import { FaShareAlt } from "react-icons/fa";
import CarouselDrawerImages from '../CarouselDrawerImages';

const RestaurantInvitation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false); 
  const [customMessage, setCustomMessage] = useState(''); 

  const carouselImages = [
    '/images/restaurant1.jpg', 
    '/images/restaurant2.jpg', 
    '/images/restaurant3.jpg', 
    '/images/restaurant4.jpg'
  ];

  const location = {
    name: "Cafe Vian",
    address: "Liszt Ferenc Ter 10, 1078 Budapest"
  }

  const handleShare = async () => {
    const imgUrl = `${window.location.origin}${carouselImages[currentSlide]}`;
    
    // Construct the message dynamically
    const defaultMessage = `Niko wants to share with you via FORK 'n KNIFE the following:\n\n${location.name} located at ${location.address}.\n\n`;
    const message = customMessage ? `${defaultMessage}Custom Message:\n${customMessage}\n\n` : defaultMessage; // Attach custom message if provided
    
    if (navigator.canShare && navigator.canShare({ files: [new File([], "image.jpeg")] })) {
      try {
        const response = await fetch(imgUrl);
        const blob = await response.blob();
        const file = new File([blob], "image.jpeg", { type: blob.type });

        await navigator.share({
          title: location.name,
          text: message,  // Pass the constructed message with custom message if exists
          files: [file],
        });
        console.log("Content shared successfully");
      } catch (error) {
        console.error("Error sharing content:", error);
      }
    } else {
      alert("Sharing files is not supported in your browser.");
    }
  };

  const handleSlideChange = (newIndex) => {
    setCurrentSlide(newIndex);
  };

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  return (
    <div className='px-2 py-3'>
      <h1 className="text-xl mb-4 font-bold text-teal-800">Recommend to a friend</h1>
      <div className='border-2 border-gray-100 p-2 pb-5 pt-3 rounded-lg bg-white'>
        <h2 className="text-basic mb-4 font-bold text-teal-800">Choose your pic</h2>
        <div className="flex items-center justify-center px-3">
          <CarouselDrawerImages
            images={carouselImages}
            slidesPerView={1}
            currentSlide={currentSlide}
            onSlideChange={handleSlideChange} 
          />
        </div>

        <div className="mt-5 px-5">
          <h3 className="text-lg font-bold mb-2">{location.name}</h3>
          <p className="text-gray-700 mb-2">{location.address}</p>
          
          {/* Accordion button */}
          <button
            className="w-full text-teal-800 py-2 mt-2 flex items-center justify-between border-b-2 border-teal-800"
            onClick={toggleAccordion}
          >
            Add Custom Message {isAccordionOpen ? "▲" : "▼"}
          </button>

          {isAccordionOpen && (
            <div className="mt-3">
              <textarea
                className="w-full border-2 border-teal-800 p-2 rounded-lg"
                rows="4"
                placeholder="Write your custom message here..."
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
              />
            </div>
          )}

          <button
            className="bg-teal-800 text-white py-2 px-4 mt-5 rounded-lg flex items-center justify-center w-full hover:bg-teal-600 transition duration-300"
            onClick={handleShare}
          >
            <FaShareAlt className="mr-2" /> Send to a Friend
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantInvitation;