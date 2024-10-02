import Image from 'next/image';
import { FaShareAlt } from "react-icons/fa";

const MenuCard = ({ menu, inviter, date, time, place }) => {
  const handleShare = async () => {
    const imgUrl = `${window.location.origin}/images/dinner.jpeg`; // Image path

    if (navigator.canShare && navigator.canShare({ files: [new File([], "dinner.jpeg")] })) {
      try {
        const response = await fetch(imgUrl);
        const blob = await response.blob();
        const file = new File([blob], "dinner.jpeg", { type: blob.type });

        await navigator.share({
          title: "Lunch Invitation",
          text: `You are invited by Niko to a lunch on 04-10-2024 1.30PM @Cafe Vian at Lisz Ferenc Tét!\n\nMenu: ${menu.description}\nDessert: ${menu.dessert}\n\n Go ahead and let him know how much you love him!`,
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

  return (
    <div className='px-8 py-3'>
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto mt-1 border-gray-100 border-2">
        <Image 
          className="w-full max-h-[30vh] object-cover rounded-md mb-4" 
          src="/images/dinner.jpeg" 
          alt="Lunch Invitation" 
          width={640}
          height={500}
        />
        <h3 className="text-lg font-bold mb-2">{menu.description}</h3>
        <p className="text-gray-700 mb-2">Dessert: {menu.dessert}</p>
        <p className="text-gray-500 mb-4">Tags: {menu.tags.join(", ")}</p>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-lg flex items-center justify-center w-full hover:bg-blue-600 transition duration-300"
          onClick={handleShare}
        >
          <FaShareAlt className="mr-2" /> Share Invitation
        </button>
      </div>
    </div>
  );
};

// Example usage:
const menu = {
  description: "Tomato Soup + Grilled Salmon",
  price: "2490 Ft",
  dessert: "Chestnut Puree",
  dessertPrice: "810 Ft",
  tags: ["seafood", "healthy", "light", "grilled"],
};

const App = () => (
  <div>
    <MenuCard
      menu={menu}
      inviter="Niko"
      date="2024-10-01"
      time="12:30 PM"
      place="Riverside Cafe"
    />
  </div>
);

export default App;
