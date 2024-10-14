import CarouselBig from './CarouselBig';
 
export default function NavbarCarouselFavorites({nearbyLocations}) {

  const [selectedOption, setOption] = "";

  return (
    <div className="flex flex-col items-start bg-gray-900 px-3 mt-3 py-3">
      <h4 className="text-md font-bold text-white text-center mb-2">Placeholder </h4>
      <div className="w-full">
        <CarouselBig options={nearbyLocations} />
      </div>
    </div>
  );
}