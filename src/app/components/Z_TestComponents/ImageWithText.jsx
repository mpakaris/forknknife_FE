import Image from 'next/image';
import { useState } from 'react';

const ImageWithTextInputs = () => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    name: '',
    restaurant: '',
    address: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* Container for Image and Text */}
      <div className="relative flex flex-col items-center w-full h-[70vh]">
        {/* Image */}
        <div className="relative w-auto h-full flex items-center justify-center px-4 pt-1">
          <Image
            src="https://i.postimg.cc/gx859M0d/sample-image.jpg"
            alt="Sample Image"
            width={640}
            height={960}
            className="object-cover"
          />
        </div>

        {/* Overlay text - dynamically rendered */}
        <div className="absolute flex flex-col items-center top-0 left-0 w-full h-full justify-center">
          <p className="text-white text-2xl">{formData.date}</p>
          <p className="text-white text-2xl">{formData.time}</p>
          <p className="text-white text-2xl">{formData.name}</p>
          <p className="text-white text-2xl">{formData.restaurant}</p>
          <p className="text-white text-2xl">{formData.address}</p>
          <p className="text-white text-2xl">{formData.message}</p>
        </div>
      </div>

      {/* Input Fields */}
      <div className="w-full h-[30vh] p-4 flex flex-col items-center justify-around">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          className="border border-gray-300 p-2 rounded"
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          placeholder="Date"
          className="border border-gray-300 p-2 rounded"
        />
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          placeholder="Time"
          className="border border-gray-300 p-2 rounded"
        />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="border border-gray-300 p-2 rounded"
        />
        <input
          type="text"
          name="restaurant"
          value={formData.restaurant}
          onChange={handleChange}
          placeholder="Restaurant"
          className="border border-gray-300 p-2 rounded"
        />
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
          className="border border-gray-300 p-2 rounded"
        />
      </div>
    </div>
  );
};

export default ImageWithTextInputs;