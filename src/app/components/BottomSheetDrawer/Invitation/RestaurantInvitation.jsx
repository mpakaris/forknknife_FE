import { motion } from 'framer-motion'; // Import Framer Motion
import Image from 'next/image';
import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt, FaEnvelope, FaShareAlt, FaTimes } from "react-icons/fa";

const RestaurantInvitation = ({ setModalScreen, handleShare }) => {
  const [customMessage, setCustomMessage] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [invitationSent, setInvitationSent] = useState(false);

  const location = {
    name: "Cafe Vian",
    address: "Liszt Ferenc Ter 10, 1078 Budapest"
  };

  const resetInputs = () => {
    setCustomMessage('');
    setSelectedDate(new Date());
    setSelectedTime('');
  };

  const shareInvitation = async () => {
    const imgUrl = `${window.location.origin}/images/restaurant1.jpg`; // Corrected URL
    const formattedTime = selectedTime ? `Time: ${selectedTime}` : '';
    const formattedDate = selectedDate ? `Date: ${selectedDate.toLocaleDateString()}` : '';
  
    const defaultMessage = `Niko wants to share with you via FORK 'n KNIFE the following:\n\nMeet me at *${location.name}* located at ${location.address}\n\nOn ${formattedDate} @${formattedTime}\n\n`;
    const message = customMessage ? `${defaultMessage}Custom Message:\n${customMessage}\n\n` : defaultMessage;
  
    if (navigator.canShare && navigator.canShare({ files: [new File([], "FORK 'n KNIFE")] })) {
      try {
        const response = await fetch(imgUrl);
        const blob = await response.blob();
        const file = new File([blob], "image.jpeg", { type: blob.type });
  
        await navigator.share({
          title: location.name,
          text: message,
          files: [file],
        });
        
        setInvitationSent(true);

        // Wait for 2 seconds before resetting and closing
        setTimeout(() => {
          resetInputs();
          setInvitationSent(false);
          handleShare(); // Close the component
        }, 5000);
      } catch (error) {
        console.error("Error sharing content:", error);
      }
    } else {
      alert("Sharing files is not supported in your browser.");
    }
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
    <motion.div 
      className='py-3'
      initial={{ opacity: 0, y: 50 }}  
      animate={{ opacity: 1, y: 0 }}   
      exit={{ opacity: 100, y: 50 }}      
      transition={{ duration: 1.5 }}    
    >
      <div className="h-[2px] bg-gray-200 mt-6"></div>
      <div className="flex items-center justify-between my-5">
        {/* Conditional rendering for the title */}
        {!invitationSent ? (
          <h1 className="text-basic font-bold text-teal-800">
            Invite a friend to Lunch
            <FaEnvelope size={18} className="inline-block ml-1" />
          </h1>
        ) : (
          <h1 className="text-basic font-bold text-teal-800">
            {/* Title when invitation is sent */}
          </h1>
        )}
        
        {/* X Button always present */}
        <button onClick={handleShare} className="text-teal-800">
          <FaTimes size={24} />
        </button>
      </div>
      
      {!invitationSent ? (
        <motion.div 
          className="mt-5"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.3 }}
        >
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
                  className="w-full border-2 border-gray-200 rounded-lg pl-10 h-12 bg-white"
                >
                  {timeOptions.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="flex space-x-4">
            <textarea
              className="w-1/2 border-2 border-gray-200 p-2 rounded-lg"
              rows="4"
              placeholder="Add a custom message here..."
              value={customMessage}
              onChange={(e) => setCustomMessage(e.target.value)}
            />
            
            <div className="w-1/2 my-auto">
              <Image 
                src="/images/restaurant1.jpg" 
                alt="Description of the image"
                layout="responsive"
                width={200} 
                height={200} 
                className="rounded-lg" 
              />
            </div>
          </div>

          <button
            className="bg-teal-800 text-white py-2 px-4 mt-5 rounded-lg flex items-center justify-center w-full hover:bg-teal-600 transition duration-300"
            onClick={shareInvitation}
          >
            <FaShareAlt className="mr-2" /> Send to a Friend
          </button>
        </motion.div>
      ) : (
        <motion.div 
          className="flex justify-between items-center w-full mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Left Box - Text */}
          <div className="w-1/2 flex justify-center items-center">
            <h2 className="text-basic font-bold text-teal-800">Your invitation was sent!</h2>
          </div>

          {/* Right Box - Image */}
          <div className="w-1/2 flex justify-center items-center">
            <Image 
              src="/images/invitation_bro.png" 
              alt="Success Image" 
              width={150} 
              height={150} 
              layout="intrinsic" 
              className="rounded-lg"
            />
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default RestaurantInvitation;