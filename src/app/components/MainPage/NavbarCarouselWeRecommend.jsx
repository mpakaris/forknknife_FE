import CarouselSmall from './CarouselSmall';
 
export default function NavbarCarouselWeRecommend() {

  const iconColor = "92CAE3";

  const options = [
    { 
      label: "Most checked",
      pic: "mostWatched.png"
    },
    { 
      label: "Best rated",
      pic: "bestRating.png"
    },
    { 
      label: "Best priced",
      pic: "bestPrice.png"
    },
    { 
      label: "Best varied",
      pic: "bestVariaty.png"
    }
  ]

  const [selectedOption, setOption] = "";

  return (
    <div className="flex flex-col items-start px-3 my-4">
      <h4 className="text-white text-md font-bold text-center mb-2">Fork and Knife recommends</h4>
      <div className="w-full">
        <CarouselSmall options={options} />
      </div>
    </div>
  );
}