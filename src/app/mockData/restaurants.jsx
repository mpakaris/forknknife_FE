const restaurants = [
 {
   "name": "Onyx",
   "address": "1051 Budapest, Vörösmarty tér 7-8",
   "lat": 47.497913,
   "lng": 19.051237,
   "tip": "Michelin-star experience in the heart of Budapest",
   "description": "Onyx is one of Budapest's most prestigious restaurants, known for its fine dining and modern interpretations of Hungarian classics. The interior exudes luxury, and the team behind Onyx focuses on delivering high-quality food with fresh, local ingredients."
 },
 {
   "name": "Menza",
   "address": "1061 Budapest, Liszt Ferenc tér 2",
   "lat": 47.504081,
   "lng": 19.065006,
   "tip": "Retro-style bistro with a contemporary twist",
   "description": "Menza's nostalgic interior takes you back to Hungary's socialist era, but the food is modern, vibrant, and full of flavor. It is popular with locals and tourists alike, offering a mix of Hungarian and international dishes in a casual yet trendy setting."
 },
 {
   "name": "New York Café",
   "address": "1073 Budapest, Erzsébet körút 9-11",
   "lat": 47.497837,
   "lng": 19.065081,
   "tip": "A luxurious café experience in a historic setting",
   "description": "Often referred to as 'the most beautiful café in the world', New York Café is a must-visit for first-time tourists. With its opulent, Baroque-style decor and rich history, this place offers coffee, pastries, and Hungarian delicacies."
 },
 {
   "name": "Borkonyha Winekitchen",
   "address": "1051 Budapest, Sas utca 3",
   "lat": 47.500579,
   "lng": 19.048072,
   "tip": "Fine dining with a focus on Hungarian wines",
   "description": "A Michelin-star restaurant that combines modern Hungarian cuisine with an extensive selection of local wines. Borkonyha is a favorite for those seeking a sophisticated yet approachable dining experience."
 },
 {
   "name": "Mazel Tov",
   "address": "1072 Budapest, Akácfa utca 47",
   "lat": 47.498718,
   "lng": 19.063371,
   "tip": "A trendy ruin bar with Mediterranean flair",
   "description": "Mazel Tov blends Middle Eastern flavors with a cool ruin bar vibe. Located in Budapest's Jewish quarter, it's a lively spot perfect for groups, offering dishes like hummus, falafel, and shawarma in a spacious, plant-filled courtyard."
 },
 {
   "name": "Könyvbár & Restaurant",
   "address": "1073 Budapest, Dob utca 45",
   "lat": 47.497912,
   "lng": 19.060072,
   "tip": "A unique dining experience where the menu is inspired by books",
   "description": "At Könyvbár, every week a different book inspires the chef’s menu. The restaurant offers a creative take on both international and Hungarian cuisine, making it a great spot for foodies and literary enthusiasts alike."
 },
 {
   "name": "Hungarikum Bistro",
   "address": "1054 Budapest, Steindl Imre utca 13",
   "lat": 47.504432,
   "lng": 19.045218,
   "tip": "Traditional Hungarian dishes in a cozy setting",
   "description": "Hungarikum Bistro celebrates authentic Hungarian flavors. From goulash to duck liver, every dish is made from locally-sourced ingredients. The bistro is a favorite among those seeking traditional dishes in a welcoming, homey environment."
 },
 {
   "name": "Fricska Gastropub",
   "address": "1072 Budapest, Dob utca 56-58",
   "lat": 47.499254,
   "lng": 19.068617,
   "tip": "A modern gastropub offering innovative Hungarian dishes",
   "description": "Fricska Gastropub combines a laid-back atmosphere with high-quality, contemporary Hungarian cuisine. The constantly changing menu is designed to showcase seasonal ingredients, prepared with modern techniques."
 },
 {
   "name": "Costes",
   "address": "1092 Budapest, Ráday utca 4",
   "lat": 47.488515,
   "lng": 19.060984,
   "tip": "Budapest's first Michelin-star restaurant",
   "description": "Costes set the standard for fine dining in Budapest, being the first restaurant in the city to receive a Michelin star. It offers a fusion of international and Hungarian flavors, with a focus on precise technique and seasonal ingredients."
 },
 {
   "name": "Rosenstein",
   "address": "1087 Budapest, Mosonyi utca 3",
   "lat": 47.493985,
   "lng": 19.083524,
   "tip": "A family-run restaurant known for Jewish-Hungarian cuisine",
   "description": "Rosenstein is one of Budapest’s most beloved family-owned restaurants. Specializing in Hungarian-Jewish dishes, the restaurant is known for its generous portions, warm atmosphere, and traditional recipes passed down through generations."
 },
 {
   "name": "Paprika Vendéglő",
   "address": "1071 Budapest, Dózsa György út 72",
   "lat": 47.511006,
   "lng": 19.082472,
   "tip": "Traditional Hungarian dishes in a rustic setting",
   "description": "Paprika is a rustic restaurant that serves hearty Hungarian meals in a cozy, old-world atmosphere. Known for its generous portions and friendly service, it is a favorite among locals and tourists alike."
 },
 {
   "name": "Café Gerbeaud",
   "address": "1051 Budapest, Vörösmarty tér 7",
   "lat": 47.497839,
   "lng": 19.050125,
   "tip": "Historic café offering traditional Hungarian pastries",
   "description": "Café Gerbeaud is one of Budapest's oldest and most famous cafés, known for its elegant interior and rich history. Its pastries, including the signature Gerbeaud cake, are must-tries for anyone visiting the city."
 },
 {
   "name": "Kéhli Vendéglő",
   "address": "1036 Budapest, Mókus utca 22",
   "lat": 47.536376,
   "lng": 19.043951,
   "tip": "A classic Hungarian tavern with live Gypsy music",
   "description": "Kéhli is a traditional Hungarian restaurant located in the Óbuda district. It offers hearty Hungarian dishes in a lively atmosphere, often accompanied by live Gypsy music. The restaurant has a long history and is a great spot for tourists looking for a taste of classic Hungary."
 },
 {
   "name": "Frici Papa",
   "address": "1066 Budapest, Király utca 55",
   "lat": 47.503557,
   "lng": 19.063302,
   "tip": "Affordable Hungarian comfort food in a laid-back setting",
   "description": "Frici Papa is a budget-friendly restaurant known for its simple, hearty Hungarian dishes. It's a great spot for tourists who want to experience traditional Hungarian comfort food without breaking the bank."
 },
 {
   "name": "Belvárosi Disznótoros",
   "address": "1054 Budapest, Károlyi utca 17",
   "lat": 47.496072,
   "lng": 19.056727,
   "tip": "A carnivore's dream with traditional Hungarian meats",
   "description": "Belvárosi Disznótoros is a small eatery that specializes in Hungarian meat dishes, including sausages, roast pork, and other traditional favorites. It's a perfect stop for meat lovers looking for an authentic and quick meal in the city center."
 },
 {
   "name": "Fausto’s",
   "address": "1071 Budapest, Székely Mihály utca 2",
   "lat": 47.500441,
   "lng": 19.062187,
   "tip": "High-end Italian dining in Budapest",
   "description": "Fausto’s is one of Budapest’s top Italian restaurants, known for its elegant atmosphere and exquisite dishes. The restaurant combines classic Italian cuisine with modern techniques and is a must-visit for those seeking refined dining."
 },
 {
   "name": "Babel Budapest",
   "address": "1051 Budapest, Piarista köz 2",
   "lat": 47.497743,
   "lng": 19.048243,
   "tip": "Modern fine dining with a focus on Hungarian ingredients",
   "description": "Babel offers a unique fine dining experience that highlights modern Hungarian cuisine with a creative twist. The restaurant’s tasting menu takes diners on a culinary journey, showcasing locally-sourced ingredients and innovative techniques."
 },
 {
   "name": "St. Andrea Wine & Skybar",
   "address": "1052 Budapest, Váci utca 1",
   "lat": 47.495904,
   "lng": 19.051925,
   "tip": "A rooftop wine bar with stunning views",
   "description": "St. Andrea Wine & Skybar offers not only a great selection of Hungarian wines but also stunning panoramic views of the city. Located on a rooftop in downtown Budapest, it’s an ideal spot for both wine lovers and those looking to enjoy the cityscape."
 },
 {
   "name": "Gundel",
   "address": "1146 Budapest, Gundel Károly út 4",
   "lat": 47.514947,
   "lng": 19.083785,
   "tip": "One of Budapest’s most iconic restaurants",
   "description": "Gundel is a historic restaurant that has been serving Hungarian and international cuisine since 1894. Known for its elegance and tradition, it’s a must-visit for those looking to experience classic Hungarian dishes in a refined setting."
 },
 {
   "name": "Szimpla Kert",
   "address": "1075 Budapest, Kazinczy utca 14",
   "lat": 47.497831,
   "lng": 19.063532,
   "tip": "The original ruin pub with eclectic decor and street food",
   "description": "Szimpla Kert is Budapest's first and most famous ruin pub, known for its quirky decor and laid-back atmosphere. It's a popular spot for tourists, offering a variety of street food and drinks in a vibrant, bohemian setting."
 },
 {
   "name": "Déryné Bisztró",
   "address": "1013 Budapest, Krisztina tér 3",
   "lat": 47.498799,
   "lng": 19.034121,
   "tip": "A chic bistro with French-inspired cuisine",
   "description": "Déryné is a stylish bistro offering French-inspired dishes with a touch of Hungarian flair. Known for its chic interior and high-quality food, it's a popular spot for locals and tourists alike who want to enjoy a sophisticated meal."
 },
 {
   "name": "Spíler BistroPub",
   "address": "1075 Budapest, Király utca 13",
   "lat": 47.497779,
   "lng": 19.058301,
   "tip": "Trendy bistro offering comfort food with a modern twist",
   "description": "Spíler BistroPub is located in the heart of the city, serving modern takes on comfort food classics. The lively atmosphere and creative menu make it a great spot for a casual night out with friends or family."
 },
 {
   "name": "ESCA Studio Restaurant",
   "address": "1073 Budapest, Dohány utca 27",
   "lat": 47.497688,
   "lng": 19.065731,
   "tip": "An intimate, minimalist restaurant with a focus on fresh ingredients",
   "description": "ESCA is a small, cozy restaurant that focuses on using fresh, high-quality ingredients to create a constantly changing menu. The minimalist interior and personalized service make it a great choice for those seeking a more intimate dining experience."
 },
 {
   "name": "Tuning Bar & Burger",
   "address": "1073 Budapest, Király utca 60",
   "lat": 47.502171,
   "lng": 19.064998,
   "tip": "Gourmet burgers with creative toppings",
   "description": "Tuning Bar & Burger offers some of the best burgers in Budapest, with a menu that includes a variety of creative toppings and flavor combinations. It’s a favorite spot for locals and tourists craving a hearty meal."
 },
 {
   "name": "Pesti Disznó",
   "address": "1061 Budapest, Nagymező utca 19",
   "lat": 47.505409,
   "lng": 19.059869,
   "tip": "Modern Hungarian cuisine with a focus on pork",
   "description": "Pesti Disznó is a trendy bistro that offers modern Hungarian dishes, with a particular focus on pork-based meals. The atmosphere is laid-back, making it a great spot for a casual but flavorful dining experience."
 },
 {
   "name": "Bock Bisztró",
   "address": "1073 Budapest, Erzsébet körút 43-49",
   "lat": 47.500652,
   "lng": 19.069574,
   "tip": "Hungarian bistro fare with a sophisticated touch",
   "description": "Bock Bisztró combines traditional Hungarian cuisine with modern techniques, offering a refined but approachable dining experience. The restaurant is known for its excellent wine list and innovative takes on classic dishes."
 },
 {
   "name": "Csalogány 26",
   "address": "1015 Budapest, Csalogány utca 26",
   "lat": 47.506366,
   "lng": 19.031863,
   "tip": "Fine dining in a relaxed, minimalist setting",
   "description": "Csalogány 26 is a small, fine dining restaurant that offers a seasonal menu focusing on high-quality, local ingredients. The minimalist décor and friendly service make it a great place for those seeking a more intimate dining experience."
 },
 {
   "name": "Kacsa Restaurant",
   "address": "1027 Budapest, Fő utca 75",
   "lat": 47.510004,
   "lng": 19.038426,
   "tip": "Famous for its duck dishes and live music",
   "description": "Kacsa Restaurant is renowned for its duck dishes, offering a variety of traditional Hungarian meals in a cozy setting. With live piano music, it’s a great spot for a relaxed and elegant evening."
 },
 {
   "name": "Stand25 Bistro",
   "address": "1013 Budapest, Ybl Miklós tér 4",
   "lat": 47.496682,
   "lng": 19.041431,
   "tip": "Casual dining with a focus on Hungarian comfort food",
   "description": "Stand25 is a bistro that offers a more casual take on Hungarian comfort food. The menu features classic dishes like goulash and chicken paprikash, making it a great spot for tourists looking to sample Hungarian favorites in a laid-back environment."
 }
]

export default restaurants;