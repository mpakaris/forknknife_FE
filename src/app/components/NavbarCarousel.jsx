import CarouselSmall from './CarouselSmall';
 
export default function NavbarCarousel() {

  const options = [
    { 
      label: "Vegetarian",
      pic: "dish1.jpg"
    },
    { 
      label: "Gluten free",
      pic: "dish2.jpeg"
    },
    { 
      label: "Meat Lover",
      pic: "dish1.jpg"
    },
    { 
      label: "Italian",
      pic: "dish2.jpeg"
    }
  ]

  const [selectedOption, setOption] = "";

  return (
    <div className="flex flex-col items-start px-3 my-3">
      <h4 className="text-md font-bold text-center mb-2">Quick and dirty</h4>
      <div className="w-full">
        <CarouselSmall options={options} />
      </div>
    </div>
  );
}