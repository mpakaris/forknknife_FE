import CarouselBig from './CarouselBig';
 
export default function NavbarCarouselFavorites() {

  const options = [
    { label: "Vegetarian", name: "Green Salad", description: "A healthy green salad with fresh veggies.", price: "$12.99", rating: 4.5, pic: "dish1.jpg" },
    { label: "Gluten free", name: "Chicken Soup", description: "Delicious chicken soup with no gluten.", price: "$9.99", rating: 4.2, pic: "dish2.jpeg" },
    { label: "Meat Lover", name: "Steak", description: "Juicy grilled steak for meat lovers.", price: "$24.99", rating: 4.8, pic: "dish1.jpg" },
    { label: "Italian", name: "Pasta", description: "Classic Italian pasta with marinara sauce.", price: "$14.99", rating: 4.6, pic: "dish2.jpeg" }
  ];

  const [selectedOption, setOption] = "";

  return (
    <div className="flex flex-col items-start bg-teal-100 px-3 mt-3 py-3">
      <h4 className="text-md font-bold text-center mb-2">My Favorite Places</h4>
      <div className="w-full">
        <CarouselBig options={options} />
      </div>
    </div>
  );
}