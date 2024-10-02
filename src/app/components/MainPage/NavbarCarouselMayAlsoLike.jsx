import CarouselXL from './CarouselXL';
 
export default function NavbarCarouselLastChecked() {

  const options = [
    { label: "Cafe Vian", name: "Green Salad", description: "Fresh, healthy, and delicious.", rating: 4.5, comment: "average price", pic: "vian1.jpeg" },
    { label: "Getto Gulyas", name: "Chicken Soup", description: "Delicious and gluten-free.", rating: 4.2, comment: "affordable", pic: "getto1.jpeg" },
    { label: "Budapest Jazz Bar", name: "Steak", description: "A juicy grilled steak.", rating: 4.8, comment: "premium price", pic: "jazz1.jpeg" },
    { label: "Stex", name: "Pasta", description: "Classic Italian pasta.", rating: 4.6, comment: "good value", pic: "stex1.jpeg" }
  ];

  const [selectedOption, setOption] = "";

  return (
    <div className="flex flex-col items-start px-3 mt-3 py-3">
      <h4 className="text-md font-bold text-center mb-2">You May Also Like (Sponsored)</h4>
      <div className="w-full">
        <CarouselXL options={options} />
      </div>
    </div>
  );
}