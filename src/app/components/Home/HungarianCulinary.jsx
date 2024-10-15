import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const HungarianCulinary = () => {
  const [selectedOption, setSelectedOption] = useState("All"); 

  const filteredCulinaryList =
    selectedOption === "All"
      ? culinaryList
      : culinaryList.filter((option) => option.type === selectedOption);

  return (
    <div className="w-full px-3 text-gray-200 mt-5">
      <div className="flex items-center justify-between my-3 border-b-2 border-gray-200 pb-2">
        <h1>Hungarian Culinary Delights:</h1>
        <select
          className="bg-gray-700 text-gray-200 border border-gray-600 
            text-md rounded px-2 py-3 w-1/2"
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
        >
          <option value="All">All</option>
          <option value="main dish">Main Dish</option>
          <option value="dessert">Dessert</option>
          <option value="soup">Soup</option>
          <option value="snack">Snack</option>
          <option value="regional">Regional</option>
          <option value="beverage">Beverage</option>
          <option value="side dish">Side Dish</option>
          <option value="appetizer">Appetizer</option>
          <option value="breakfast">Breakfast</option>
        </select>
      </div>
      <div className="mt-5">
        <Swiper spaceBetween={20} slidesPerView={1.1} grabCursor={true}>
          {filteredCulinaryList.map((option, index) => (
            <SwiperSlide key={index}>
              <div className="flex bg-gray-900 rounded-lg mb-2 overflow-hidden h-40 shadow-inner transition-shadow duration-300">
                {/* 1/3 for the image */}
                <div className="w-1/3">
                  <Image
                    width={50}
                    height={100}
                    src="/images/invitation15.jpg" // Adjust the image path if necessary
                    alt={option.menu}
                    className="object-cover h-full w-full" // Make the image cover the area
                  />
                </div>
                {/* 2/3 for the text */}
                <div className="w-2/3 p-3 flex flex-col items-center my-auto text-gray-200">
                  <p className="text-xs mb-5 font-bold">{option.menu} | {option.type}</p>
                  <p className="text-xs flex-grow text-center">{option.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

const culinaryList = [
    // Main Dish
    {
      "menu": "Gulyás",
      "desc": "A hearty soup made with beef, vegetables, and spices, often flavored with paprika.",
      "type": "main dish"
    },
    {
      "menu": "Pörkölt",
      "desc": "A thick meat stew, traditionally made with beef or pork, simmered with onions and paprika.",
      "type": "main dish"
    },
    {
      "menu": "Halászlé",
      "desc": "A spicy fish soup made from river fish like catfish, seasoned with paprika.",
      "type": "main dish"
    },
    {
      "menu": "Rántott hús",
      "desc": "Breaded and fried meat, usually pork or chicken, served with potatoes or rice.",
      "type": "main dish"
    },
    {
      "menu": "Rakott Krumpli",
      "desc": "Layered potatoes with sausage, hard-boiled eggs, and sour cream, baked until golden.",
      "type": "main dish"
    },
    {
      "menu": "Töltött káposzta",
      "desc": "Stuffed cabbage rolls filled with a mix of meat and rice, served in a rich tomato sauce.",
      "type": "main dish"
    },
    {
      "menu": "Sült ponty",
      "desc": "Fried carp, often served with potatoes and a fresh salad.",
      "type": "main dish"
    },
    {
      "menu": "Töltött paprika",
      "desc": "Stuffed peppers filled with a mixture of meat and rice, served in a rich tomato sauce.",
      "type": "main dish"
    },
    {
      "menu": "Pulyka pörkölt",
      "desc": "Turkey stew with paprika and vegetables, served with dumplings.",
      "type": "main dish"
    },
    {
      "menu": "Hortobágyi palacsinta",
      "desc": "Savory pancakes filled with meat and topped with paprika sauce.",
      "type": "main dish"
    },
    {
      "menu": "Káposztás tészta",
      "desc": "Pasta mixed with sautéed cabbage and spices.",
      "type": "main dish"
    },
    {
      "menu": "Cigánypecsenye",
      "desc": "Grilled pork dish seasoned with spices, served with side dishes.",
      "type": "main dish"
    },
    {
      "menu": "Főtt tojás",
      "desc": "Boiled eggs, commonly enjoyed as a snack or breakfast item.",
      "type": "main dish"
    },
    {
      "menu": "Jókai bableves",
      "desc": "A hearty bean soup with smoked meat and vegetables.",
      "type": "main dish"
    },
    {
      "menu": "Káposztaleves",
      "desc": "Cabbage soup, flavored with paprika and vegetables.",
      "type": "main dish"
    },
    {
      "menu": "Pálinka",
      "desc": "A traditional fruit brandy, often served as an aperitif.",
      "type": "beverage"
    },
  
    // Dessert
    {
      "menu": "Képviselőfánk",
      "desc": "Cream puffs filled with vanilla cream, often dusted with powdered sugar.",
      "type": "dessert"
    },
    {
      "menu": "Túrós sütemény",
      "desc": "A sweet curd cheese cake with a crumbly topping.",
      "type": "dessert"
    },
    {
      "menu": "Bejgli",
      "desc": "A rolled pastry filled with poppy seeds or walnuts, traditionally made during holidays.",
      "type": "dessert"
    },
    {
      "menu": "Fánk",
      "desc": "Hungarian doughnuts, often filled with jam or cream and dusted with powdered sugar.",
      "type": "dessert"
    },
    {
      "menu": "Diótorta",
      "desc": "A walnut cake layered with cream, popular in Hungarian pastry shops.",
      "type": "dessert"
    },
    {
      "menu": "Gyümölcsleves",
      "desc": "Chilled fruit soup, often made with seasonal fruits and a hint of cinnamon.",
      "type": "dessert"
    },
    {
      "menu": "Szilvás gombóc",
      "desc": "Plum dumplings, sweet and dusted with powdered sugar.",
      "type": "dessert"
    },
    {
      "menu": "Málnás túrós",
      "desc": "A cheesecake variant made with raspberries.",
      "type": "dessert"
    },
    {
      "menu": "Almás pite",
      "desc": "Apple pie, a sweet dessert filled with spiced apples.",
      "type": "dessert"
    },
    {
      "menu": "Krémsajtos sütemény",
      "desc": "Cream cheese cake, a sweet and rich dessert.",
      "type": "dessert"
    },
    {
      "menu": "Palacsinta",
      "desc": "Thin pancakes, often filled with jam, chocolate, or sweet cheese.",
      "type": "dessert"
    },
    {
      "menu": "Főtt tojás",
      "desc": "Boiled eggs, commonly enjoyed as a snack or breakfast item.",
      "type": "dessert"
    },
    {
      "menu": "Kókuszgolyó",
      "desc": "Coconut balls made with chocolate and covered in desiccated coconut.",
      "type": "dessert"
    },
    {
      "menu": "Karamellás süti",
      "desc": "Caramel cake, a sweet and rich dessert.",
      "type": "dessert"
    },
    {
      "menu": "Túrós palacsinta",
      "desc": "Pancakes filled with sweet curd cheese.",
      "type": "dessert"
    },
    {
      "menu": "Torta",
      "desc": "Layered cake with various fillings, often made for special occasions.",
      "type": "dessert"
    },
    {
      "menu": "Kekszes sütemény",
      "desc": "Cookie cake, made with layers of cookies and cream.",
      "type": "dessert"
    },
    {
      "menu": "Kis sütemény",
      "desc": "Small pastries filled with cream or fruit.",
      "type": "dessert"
    },
    {
      "menu": "Puncs torta",
      "desc": "Punch cake, a sweet layered cake soaked in punch syrup.",
      "type": "dessert"
    },
  
    // Soup
    {
      "menu": "Káposztaleves",
      "desc": "Cabbage soup, flavored with paprika and vegetables.",
      "type": "soup"
    },
    {
      "menu": "Jókai bableves",
      "desc": "A hearty bean soup with smoked meat and vegetables.",
      "type": "soup"
    },
    {
      "menu": "Húsleves",
      "desc": "A traditional meat soup, usually made with beef and vegetables.",
      "type": "soup"
    },
    {
      "menu": "Lencse leves",
      "desc": "Lentil soup, nutritious and filling, often flavored with smoked meat.",
      "type": "soup"
    },
    {
      "menu": "Zöldborsó krémleves",
      "desc": "Green pea soup with a creamy base, flavored with herbs.",
      "type": "soup"
    },
    {
      "menu": "Gombaleves",
      "desc": "Mushroom soup, creamy and rich, made with fresh mushrooms.",
      "type": "soup"
    },
    {
      "menu": "Fokhagymás krémleves",
      "desc": "Garlic cream soup, known for its intense flavor and creamy texture.",
      "type": "soup"
    },
    {
      "menu": "Sárgarépa leves",
      "desc": "Carrot soup, sweet and healthy, often garnished with herbs.",
      "type": "soup"
    },
    {
      "menu": "Póréhagyma leves",
      "desc": "Leek soup, a delicate and flavorful soup made with fresh leeks.",
      "type": "soup"
    },
    {
      "menu": "Savanyú káposzta leves",
      "desc": "Sour cabbage soup, hearty and tangy, often with meat.",
      "type": "soup"
    },
  
    // Snack
    {
      "menu": "Lángos",
      "desc": "Deep-fried flatbread typically topped with garlic, sour cream, and cheese.",
      "type": "snack"
    },
    {
      "menu": "Töltött tojás",
      "desc": "Stuffed eggs, often filled with a mix of yolk and spices.",
      "type": "snack"
    },
    {
      "menu": "Füstölt sajt",
      "desc": "Smoked cheese, enjoyed as a snack or appetizer.",
      "type": "snack"
    },
    {
      "menu": "Gyümölcskenyér",
      "desc": "Fruit bread, often enjoyed as a snack or breakfast item.",
      "type": "snack"
    },
    {
      "menu": "Sós sütemény",
      "desc": "Savory pastry, often filled with cheese or meat.",
      "type": "snack"
    },
    {
      "menu": "Húsos lepény",
      "desc": "Savory meat pastry, typically filled with spiced meat.",
      "type": "snack"
    },
    {
      "menu": "Savanyú uborka",
      "desc": "Pickled cucumbers, a crunchy and tangy snack.",
      "type": "snack"
    },
    {
      "menu": "Korpás kenyér",
      "desc": "Whole grain bread, often enjoyed with spreads.",
      "type": "snack"
    },
    {
      "menu": "Joghurtos uborka",
      "desc": "Cucumber salad with yogurt, refreshing and light.",
      "type": "snack"
    },
    {
      "menu": "Pikáns sajtos",
      "desc": "Spicy cheese bites, often served with beer.",
      "type": "snack"
    },
    {
      "menu": "Gyümölcssaláta",
      "desc": "Fruit salad, a refreshing mix of seasonal fruits.",
      "type": "snack"
    },
    {
      "menu": "Puffancs",
      "desc": "A type of deep-fried dough ball, often enjoyed as a snack.",
      "type": "snack"
    },
    {
      "menu": "Mogyoróvajas keksz",
      "desc": "Peanut butter cookies, sweet and crunchy.",
      "type": "snack"
    },
    {
      "menu": "Sült tök",
      "desc": "Roasted pumpkin, often served as a snack or side dish.",
      "type": "snack"
    },
    {
      "menu": "Savanyú káposzta",
      "desc": "Fermented cabbage, often served as a side dish with meat.",
      "type": "snack"
    },
  
    // Regional
    {
      "menu": "Gyulai kolbász",
      "desc": "Spicy sausage from Gyula, known for its robust flavor.",
      "type": "regional"
    },
  
    // Beverage
    {
      "menu": "Egri Bikavér",
      "desc": "A robust red wine, also known as Bull's Blood, originating from the Eger region.",
      "type": "beverage"
    },
    {
      "menu": "Fröccs",
      "desc": "Wine spritzer made by mixing wine with soda water.",
      "type": "beverage"
    },
  
    // Side Dish
    {
      "menu": "Savanyú káposzta",
      "desc": "Fermented cabbage, often served as a side dish with meat.",
      "type": "side dish"
    },
  
    // Appetizer
    {
      "menu": "Füstölt pisztráng",
      "desc": "Smoked trout, typically served as an appetizer.",
      "type": "appetizer"
    },
  
    // Breakfast
    {
      "menu": "Szalonnás tojás",
      "desc": "Eggs fried with lard, often served with bread.",
      "type": "breakfast"
    }
  ];

export default HungarianCulinary;