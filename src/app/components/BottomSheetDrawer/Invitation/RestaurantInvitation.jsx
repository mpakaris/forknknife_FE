import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt, FaClock, FaShareAlt } from "react-icons/fa";
import CarouselDrawerImages from '../CarouselDrawerImages';

const RestaurantInvitation = ({ setModalScreen }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPicAccordionOpen, setIsPicAccordionOpen] = useState(false);
  const [isDateAccordionOpen, setIsDateAccordionOpen] = useState(false);
  const [isCustomMessageAccordionOpen, setIsCustomMessageAccordionOpen] = useState(false);
  const [customMessage, setCustomMessage] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');

  const carouselImages = [
    '/images/restaurant1.jpg',
    '/images/restaurant2.jpg',
    '/images/restaurant3.jpg',
    '/images/restaurant4.jpg'
  ];

  const location = {
    name: "Cafe Vian",
    address: "Liszt Ferenc Ter 10, 1078 Budapest"
  };

  // Handle Share logic
  const handleShare = async () => {
    const imgUrl = `${window.location.origin}${carouselImages[currentSlide]}`;
    const formattedTime = selectedTime ? `Time: ${selectedTime}` : '';
    const formattedDate = selectedDate ? `Date: ${selectedDate.toLocaleDateString()}` : '';

    const defaultMessage = `Niko wants to share with you via FORK 'n KNIFE the following:\n\n${location.name} located at ${location.address}.\n\nMeet him on ${formattedDate} @${formattedTime}\n\n`;
    const message = customMessage ? `${defaultMessage}Custom Message:\n${customMessage}\n\n` : defaultMessage;

    if (navigator.canShare && navigator.canShare({ files: [new File([], "image.jpeg")] })) {
      try {
        const response = await fetch(imgUrl);
        const blob = await response.blob();
        const file = new File([blob], "image.jpeg", { type: blob.type });

        await navigator.share({
          title: location.name,
          text: message,
          files: [file],
        });
        setModalScreen("");
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

  const togglePicAccordion = () => {
    setIsPicAccordionOpen(!isPicAccordionOpen);
  };

  const toggleDateAccordion = () => {
    setIsDateAccordionOpen(!isDateAccordionOpen);
  };

  const toggleCustomMessageAccordion = () => {
    setIsCustomMessageAccordionOpen(!isCustomMessageAccordionOpen);
  };

  // Handle time selection in 15-minute intervals
  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  // Generate time options in 15-minute intervals from 11 AM to 9 PM
  const timeOptions = [];
  for (let hour = 11; hour <= 21; hour++) {
    for (let minute = 0; minute < 60; minute += 15) {
      const formattedHour = hour > 12 ? hour - 12 : hour;
      const suffix = hour >= 12 ? 'PM' : 'AM';
      const time = `${formattedHour}:${String(minute).padStart(2, '0')} ${suffix}`;
      timeOptions.push(time);
    }
  }

  return (
    <div className='px-2 py-3' style={{ marginBottom: "150px" }}>
      <h1 className="text-xl mb-4 font-bold text-teal-800">Invite a friend</h1>

      {/* Name and Address of Restaurant */}
      <div className="mt-5 px-5">
        <h3 className="text-lg font-bold mb-2">{location.name}</h3>
        <p className="text-gray-700 mb-2">{location.address}</p>

        {/* Accordion for Choosing a Pic */}
        <button
          className="bg-teal-800 text-white py-2 px-4 mt-5 rounded-lg flex items-center justify-center w-full hover:bg-teal-600 transition duration-300"
          onClick={togglePicAccordion}
        >
          Add a Pic {isPicAccordionOpen ? "▲" : "▼"}
        </button>
        {isPicAccordionOpen && (
          <div className="mt-3 flex items-center justify-center px-3">
            <CarouselDrawerImages
              images={carouselImages}
              slidesPerView={1}
              currentSlide={currentSlide}
              onSlideChange={handleSlideChange}
            />
          </div>
        )}

        {/* Accordion for Date and Time */}
        <button
          className="bg-teal-800 text-white py-2 px-4 mt-5 rounded-lg flex items-center justify-center w-full hover:bg-teal-600 transition duration-300"
          onClick={toggleDateAccordion}
        >
          Add Date and Time {isDateAccordionOpen ? "▲" : "▼"}
        </button>
        {isDateAccordionOpen && (
          <div className="mt-3 flex space-x-4">
            {/* Date Picker */}
            <div className="mb-4 w-1/2 relative">
              <div className="relative">
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  minDate={new Date()}
                  className="w-full border-2 border-gray-200 p-2 rounded-lg pl-10 h-12"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaCalendarAlt className="text-teal-800" />
                </div>
              </div>
            </div>

            {/* Time Picker */}
            <div className="mb-4 w-1/2 relative">
              <div className="relative">
                <select
                  value={selectedTime}
                  onChange={handleTimeChange}
                  className="w-full border-2 border-gray-200 rounded-lg pl-10 h-12 bg-white" // Set background to white
                >
                  {timeOptions.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
                {/* <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaClock className="text-teal-800" />
                </div> */}
              </div>
            </div>
          </div>
        )}

        {/* Accordion for Custom Message */}
        <button
          className="bg-teal-800 text-white py-2 px-4 mt-5 rounded-lg flex items-center justify-center w-full hover:bg-teal-600 transition duration-300"
          onClick={toggleCustomMessageAccordion}
        >
          Add Custom Message {isCustomMessageAccordionOpen ? "▲" : "▼"}
        </button>
        {isCustomMessageAccordionOpen && (
          <div className="mt-3">
            <textarea
              className="w-full border-2 border-gray-200 p-2 rounded-lg"
              rows="4"
              placeholder="Write your custom message here..."
              value={customMessage}
              onChange={(e) => setCustomMessage(e.target.value)}
            />
          </div>
        )}

        {/* Share Button */}
        <button
          className="bg-teal-800 text-white py-2 px-4 mt-5 rounded-lg flex items-center justify-center w-full hover:bg-teal-600 transition duration-300"
          onClick={handleShare}
        >
          <FaShareAlt className="mr-2" /> Send to a Friend
        </button>
      </div>
    </div>
  );
};

export default RestaurantInvitation;