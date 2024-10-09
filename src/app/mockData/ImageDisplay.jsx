"use client";

const ImageDisplay = () => {

 const imgUrl = 
 "https://media-cdn.tripadvisor.com/media/photo-s/19/fa/0a/2c/belso-design-wwwbartfaivendegl.jpg"
    
  return (
    <div className="App">
     {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
     <img src={imgUrl} style={{width: "90vw", margin: "0 auto"}}/>
    </div>
  );
};

export default ImageDisplay;