import axios from "axios";
import { useEffect, useState } from "react";

export const useFetchFunFacts = () => {
  const [funFactsData, setFunFactsData] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state

  useEffect(() => {
    const fetchFacts = async () => {
      try {
        let fetchedFacts;
        if (process.env.NEXT_PUBLIC_ENV === "development") {
          const response = await axios.get(
            "http://0.0.0.0:5001/getstuffdone-80541/us-central1/getAllFunFacts" // Adjusted the URL to match the intended function
          );
          fetchedFacts = Object.entries(response.data).map(
            ([uuid, details]) => ({
              uuid,
              ...details,
            })
          );
        } else {
          // Use mock data in PROD mode
          fetchedFacts = funFacts;
        }
        setFunFactsData(fetchedFacts); // Updated to set funFactsData
      } catch (error) {
        console.error("Error fetching fun facts:", error);
      } finally {
        setLoading(false); // Moved loading state to finally block
      }
    };

    fetchFacts();
  }, []);

  return { funFacts: funFactsData, loading }; // Return funFacts instead of locations
};

const funFacts = [
  // History
  {
    fact: "Did you know that Budapest was originally two cities, Buda and Pest, which were officially united in 1873?",
    type: "History",
  },
  {
    fact: "Did you know that the Chain Bridge, the first permanent bridge connecting Buda and Pest, was completed in 1849?",
    type: "History",
  },
  {
    fact: "Did you know that Budapest played a significant role in the 1956 Hungarian Revolution against Soviet rule?",
    type: "History",
  },
  {
    fact: "Did you know that the Parliament Building, one of the largest in the world, was completed in 1904 and has 691 rooms?",
    type: "History",
  },
  {
    fact: "Did you know that the Buda Castle has been a royal palace since the 13th century and is now a UNESCO World Heritage site?",
    type: "History",
  },
  {
    fact: "Did you know that Budapest is home to the second oldest metro line in the world, built in 1896?",
    type: "History",
  },
  {
    fact: "Did you know that the city's name comes from the Old Hungarian word 'Buda,' which means 'water'?",
    type: "History",
  },
  {
    fact: "Did you know that Budapest was once the capital of the Austro-Hungarian Empire?",
    type: "History",
  },
  {
    fact: "Did you know that the Great Synagogue in Budapest is the largest in Europe and the second largest in the world?",
    type: "History",
  },
  {
    fact: "Did you know that Hungary has a rich tradition of folk art, which includes colorful embroidery and pottery?",
    type: "History",
  },
  {
    fact: "Did you know that Hungary has one of the highest numbers of Nobel Prize winners per capita in the world?",
    type: "History",
  },
  {
    fact: "Did you know that Budapest is home to the largest thermal water system in the world, with over 100 springs?",
    type: "History",
  },
  {
    fact: "Did you know that the city's name was first mentioned in 1000 AD when Stephen I became the first king of Hungary?",
    type: "History",
  },
  {
    fact: "Did you know that the city's history includes periods of Ottoman, Habsburg, and Soviet rule, shaping its cultural landscape?",
    type: "History",
  },
  {
    fact: "Did you know that the Hungarian language is unique in Europe, belonging to the Finno-Ugric group, making it unrelated to most other languages on the continent?",
    type: "History",
  },
  {
    fact: "Did you know that the city experienced rapid industrialization in the late 19th century, leading to significant urban development?",
    type: "History",
  },
  {
    fact: "Did you know that the Buda Castle District is a UNESCO World Heritage site, showcasing its historical significance?",
    type: "History",
  },
  {
    fact: "Did you know that the 1848 Revolution was a pivotal moment in Hungary’s fight for independence from Austria?",
    type: "History",
  },
  {
    fact: "Did you know that the Hungarian Parliament was inspired by the British Parliament in its architectural design?",
    type: "History",
  },
  {
    fact: "Did you know that the 1970s saw the construction of the M1 metro line, showcasing Budapest’s commitment to modern transportation?",
    type: "History",
  },
  {
    fact: "Did you know that the city played a crucial role in the end of the Iron Curtain in 1989?",
    type: "History",
  },

  // Culture
  {
    fact: "Did you know that Budapest is known as the 'Paris of the East' due to its stunning architecture and vibrant culture?",
    type: "Culture",
  },
  {
    fact: "Did you know that Hungarian folk music has UNESCO recognition as an Intangible Cultural Heritage?",
    type: "Culture",
  },
  {
    fact: "Did you know that Budapest hosts the annual Budapest Wine Festival, celebrating the country's winemaking traditions?",
    type: "Culture",
  },
  {
    fact: "Did you know that the Hungarian State Opera House is renowned for its stunning architecture and acoustics?",
    type: "Culture",
  },
  {
    fact: "Did you know that the city is famous for its thermal baths, with the Széchenyi Thermal Bath being one of the largest in Europe?",
    type: "Culture",
  },
  {
    fact: "Did you know that the city has a vibrant ruin bar scene, where abandoned buildings are transformed into lively pubs and cafes?",
    type: "Culture",
  },
  {
    fact: "Did you know that Budapest has a rich tradition of coffeehouses, which were important cultural hubs in the 19th century?",
    type: "Culture",
  },
  {
    fact: "Did you know that the city celebrates numerous festivals, including the Budapest Spring Festival and Sziget Festival?",
    type: "Culture",
  },
  {
    fact: "Did you know that Hungary has a unique tradition of thermal bath culture, with many baths offering spa treatments?",
    type: "Culture",
  },
  {
    fact: "Did you know that Budapest has been a UNESCO City of Design since 2017?",
    type: "Culture",
  },
  {
    fact: "Did you know that the city's libraries, such as the Széchényi National Library, are rich in historical manuscripts?",
    type: "Culture",
  },
  {
    fact: "Did you know that the Hungarian folk dance, the csárdás, is recognized for its fast tempo and lively movements?",
    type: "Culture",
  },
  {
    fact: "Did you know that the city has a vibrant street art scene, with murals and installations throughout various districts?",
    type: "Culture",
  },
  {
    fact: "Did you know that Budapest is home to numerous film festivals, showcasing both local and international cinema?",
    type: "Culture",
  },
  {
    fact: "Did you know that the Hungarian National Museum, founded in 1802, houses significant artifacts from Hungary’s history?",
    type: "Culture",
  },
  {
    fact: "Did you know that the city has a dedicated 'House of Terror' museum that commemorates the victims of both the Nazi and Soviet regimes?",
    type: "Culture",
  },
  {
    fact: "Did you know that the city hosts the Budapest International Documentary Festival, highlighting global issues through film?",
    type: "Culture",
  },
  {
    fact: "Did you know that the Hungarian National Ballet is one of the oldest ballet companies in Europe, founded in 1884?",
    type: "Culture",
  },
  {
    fact: "Did you know that the Hungarian gastronomy includes influences from Turkish, German, and Slovak cuisines?",
    type: "Culture",
  },
  {
    fact: "Did you know that Budapest's Jewish Quarter has a rich cultural history and is a hub for Jewish heritage tours?",
    type: "Culture",
  },

  // Food
  {
    fact: "Did you know that goulash, a hearty stew made with beef and paprika, is considered Hungary's national dish?",
    type: "Food",
  },
  {
    fact: "Did you know that the iconic chimney cake (kürtőskalács) is a popular street food in Budapest, often coated in sugar and cinnamon?",
    type: "Food",
  },
  {
    fact: "Did you know that Hungarian paprika, known for its rich flavor and vibrant color, is a key ingredient in many traditional dishes?",
    type: "Food",
  },
  {
    fact: "Did you know that lángos, a deep-fried flatbread, is a beloved snack often topped with sour cream and cheese?",
    type: "Food",
  },
  {
    fact: "Did you know that Hungarian desserts, such as Dobos torte, are known for their intricate layers and flavors?",
    type: "Food",
  },
  {
    fact: "Did you know that the traditional Hungarian breakfast often includes fresh bread, cold cuts, and the famous Hungarian salami?",
    type: "Food",
  },
  {
    fact: "Did you know that Hungary is famous for its wines, particularly Tokaji, a sweet dessert wine?",
    type: "Food",
  },
  {
    fact: "Did you know that the city has a rich culinary scene, with many Michelin-starred restaurants showcasing modern Hungarian cuisine?",
    type: "Food",
  },
  {
    fact: "Did you know that Hortobágyi palacsinta, savory pancakes filled with meat, is a popular Hungarian dish?",
    type: "Food",
  },
  {
    fact: "Did you know that the Hungarian sausage, or kolbász, comes in many varieties and is often enjoyed with pickles?",
    type: "Food",
  },
  {
    fact: "Did you know that stuffed cabbage (töltött káposzta) is a traditional Hungarian dish often served during festive occasions?",
    type: "Food",
  },
  {
    fact: "Did you know that the city's cafes serve traditional Hungarian pastries, such as rétes (strudel) and pogácsa (savory scones)?",
    type: "Food",
  },
  {
    fact: "Did you know that the famous Hungarian dish, pörkölt, is a meat stew that can be made with various types of meat?",
    type: "Food",
  },
  {
    fact: "Did you know that the city hosts numerous food festivals, celebrating both local and international cuisines?",
    type: "Food",
  },
  {
    fact: "Did you know that Hungary is known for its unique herbal liqueurs, like Unicum, often enjoyed as a digestif?",
    type: "Food",
  },
  {
    fact: "Did you know that the traditional Hungarian fish soup (halászlé) is made with river fish and spiced with paprika?",
    type: "Food",
  },
  {
    fact: "Did you know that the popular dish, túrós csusza, consists of pasta mixed with cottage cheese and crispy bacon?",
    type: "Food",
  },
  {
    fact: "Did you know that the Hungarian culture places a strong emphasis on communal dining and sharing meals?",
    type: "Food",
  },
  {
    fact: "Did you know that the city's markets, like the Great Market Hall, offer a wide variety of local produce and artisanal goods?",
    type: "Food",
  },
  {
    fact: "Did you know that Hungary has a tradition of making various pickled vegetables, often served as sides in meals?",
    type: "Food",
  },
  {
    fact: "Did you know that Hungarian coffee culture is rich, with cafes serving unique coffee blends and traditional pastries?",
    type: "Food",
  },

  // Architecture
  {
    fact: "Did you know that the Hungarian Parliament Building is a stunning example of Gothic Revival architecture?",
    type: "Architecture",
  },
  {
    fact: "Did you know that St. Stephen's Basilica, one of the most important churches in Hungary, features a beautiful dome that is 96 meters high?",
    type: "Architecture",
  },
  {
    fact: "Did you know that Buda Castle combines Baroque, Gothic, and Renaissance architectural styles?",
    type: "Architecture",
  },
  {
    fact: "Did you know that the Fisherman's Bastion offers panoramic views of the city and is designed in a neo-Romanesque style?",
    type: "Architecture",
  },
  {
    fact: "Did you know that the Chain Bridge is an iconic symbol of Budapest and was the first bridge to span the Danube River?",
    type: "Architecture",
  },
  {
    fact: "Did you know that the Dohány Street Synagogue is a remarkable example of Moorish Revival architecture?",
    type: "Architecture",
  },
  {
    fact: "Did you know that the Hungarian State Opera House is known for its exquisite interior and outstanding acoustics?",
    type: "Architecture",
  },
  {
    fact: "Did you know that the Museum of Fine Arts features a neoclassical design and houses a vast collection of art?",
    type: "Architecture",
  },
  {
    fact: "Did you know that the Great Market Hall is the largest and oldest indoor market in Budapest, showcasing stunning architectural elements?",
    type: "Architecture",
  },
  {
    fact: "Did you know that the Citadel on Gellért Hill offers both historical significance and breathtaking views of Budapest?",
    type: "Architecture",
  },
  {
    fact: "Did you know that the Hungarian National Museum is a fine example of neoclassical architecture, featuring impressive columns?",
    type: "Architecture",
  },
  {
    fact: "Did you know that the Liberty Bridge, known for its green color, is a striking example of Art Nouveau design?",
    type: "Architecture",
  },
  {
    fact: "Did you know that the Palace of Arts is a modern architectural marvel dedicated to culture and the arts?",
    type: "Architecture",
  },
  {
    fact: "Did you know that the House of Parliament is the largest building in Hungary and features more than 40 kg of gold in its decor?",
    type: "Architecture",
  },
  {
    fact: "Did you know that the New York Café, often referred to as the 'most beautiful café in the world,' features luxurious interior design?",
    type: "Architecture",
  },
  {
    fact: "Did you know that the Matthias Church, located in the heart of Buda, showcases stunning Gothic architecture?",
    type: "Architecture",
  },
  {
    fact: "Did you know that the Hungarian Academy of Sciences is an iconic building in the city, with its striking facade and elegant design?",
    type: "Architecture",
  },
  {
    fact: "Did you know that the Palace of the Hungarian Republic is an excellent example of early 20th-century architecture?",
    type: "Architecture",
  },
  {
    fact: "Did you know that the Art Nouveau style can be seen throughout Budapest, particularly in residential buildings and public spaces?",
    type: "Architecture",
  },
  {
    fact: "Did you know that the Museum of Applied Arts is known for its beautiful Art Nouveau interior and stunning stained glass?",
    type: "Architecture",
  },
  {
    fact: "Did you know that the Károlyi Palace is a stunning example of Baroque architecture and houses a library and a gallery?",
    type: "Architecture",
  },

  // City
  {
    fact: "Did you know that Budapest is known as the 'City of Spas' due to its numerous thermal baths?",
    type: "City",
  },
  {
    fact: "Did you know that Budapest has the largest Jewish community in Europe, with a rich cultural heritage?",
    type: "City",
  },
  {
    fact: "Did you know that the Danube River flows through Budapest, separating the Buda and Pest sides of the city?",
    type: "City",
  },
  {
    fact: "Did you know that Budapest has a vibrant nightlife scene, with ruin bars and clubs offering unique experiences?",
    type: "City",
  },
  {
    fact: "Did you know that the city is known for its stunning views, especially from Gellért Hill and Fisherman's Bastion?",
    type: "City",
  },
  {
    fact: "Did you know that Budapest has numerous UNESCO World Heritage sites, including the Banks of the Danube?",
    type: "City",
  },
  {
    fact: "Did you know that the city is famous for its stunning thermal baths, many of which date back to Roman times?",
    type: "City",
  },
  {
    fact: "Did you know that Budapest has a rich cultural calendar, with events happening year-round?",
    type: "City",
  },
  {
    fact: "Did you know that Budapest is home to over 1.7 million residents, making it the largest city in Hungary?",
    type: "City",
  },
  {
    fact: "Did you know that Budapest's public transport system includes trams, buses, and a metro network?",
    type: "City",
  },
  {
    fact: "Did you know that the city has a unique combination of Eastern and Western European influences in its culture?",
    type: "City",
  },
  {
    fact: "Did you know that Budapest has many parks and green spaces, offering a respite from urban life?",
    type: "City",
  },
  {
    fact: "Did you know that the city hosts various international film and music festivals throughout the year?",
    type: "City",
  },
  {
    fact: "Did you know that the city has a rich literary heritage, with famous authors like Sándor Márai and Imre Kertész hailing from Budapest?",
    type: "City",
  },
  {
    fact: "Did you know that Budapest's public transportation system is one of the most efficient in Europe?",
    type: "City",
  },
  {
    fact: "Did you know that Budapest is a city of contrasts, blending historic buildings with modern architecture?",
    type: "City",
  },
  {
    fact: "Did you know that the city is a hub for education and research, with several prestigious universities located here?",
    type: "City",
  },
  {
    fact: "Did you know that the city features numerous bike paths and is increasingly becoming bike-friendly?",
    type: "City",
  },
  {
    fact: "Did you know that Budapest has a dynamic art scene, with numerous galleries showcasing contemporary and traditional works?",
    type: "City",
  },
  {
    fact: "Did you know that Budapest offers a rich array of shopping experiences, from markets to high-end boutiques?",
    type: "City",
  },
  {
    fact: "Did you know that Budapest is home to many international companies and has a growing startup ecosystem?",
    type: "City",
  },

  // Monuments
  {
    fact: "Did you know that the Shoes on the Danube Bank monument honors the victims of the Holocaust in Budapest?",
    type: "Monuments",
  },
  {
    fact: "Did you know that the Liberty Statue on Gellért Hill commemorates those who sacrificed their lives for Hungary's independence?",
    type: "Monuments",
  },
  {
    fact: "Did you know that the Millennium Monument in Heroes' Square celebrates Hungary's thousand-year history?",
    type: "Monuments",
  },
  {
    fact: "Did you know that the Hungarian National Monument is a prominent feature in the city center, honoring national heroes?",
    type: "Monuments",
  },
  {
    fact: "Did you know that the statue of St. Stephen, the first king of Hungary, is located in front of St. Stephen's Basilica?",
    type: "Monuments",
  },
  {
    fact: "Did you know that the Liberty Bridge is not only functional but also serves as a beautiful landmark?",
    type: "Monuments",
  },
  {
    fact: "Did you know that the statue of Kossuth Lajos in Kossuth Square honors the leader of the 1848 Revolution?",
    type: "Monuments",
  },
  {
    fact: "Did you know that the War Memorial in Liberty Square commemorates those who fought for Hungary during World War II?",
    type: "Monuments",
  },
  {
    fact: "Did you know that the Commemorative Column of the 1956 Revolution is located near the Parliament Building?",
    type: "Monuments",
  },
  {
    fact: "Did you know that the Statue of Anonymous, located in City Park, honors the unknown authors of Hungarian history?",
    type: "Monuments",
  },
  {
    fact: "Did you know that the Memorial to the Victims of the German Occupation is a poignant reminder of Hungary's World War II history?",
    type: "Monuments",
  },
  {
    fact: "Did you know that the National Theatre is an architectural gem and a significant cultural monument in Budapest?",
    type: "Monuments",
  },
  {
    fact: "Did you know that the statue of István Széchenyi, a key figure in Hungarian history, is located on Chain Bridge?",
    type: "Monuments",
  },
  {
    fact: "Did you know that the National Szechenyi Library is a historic monument housing numerous valuable manuscripts?",
    type: "Monuments",
  },
  {
    fact: "Did you know that the statue of Franz Liszt, located in the city park, pays homage to the famous Hungarian composer?",
    type: "Monuments",
  },
  {
    fact: "Did you know that the 1956 Revolution Memorial is an important historical landmark commemorating the uprising against Soviet rule?",
    type: "Monuments",
  },
  {
    fact: "Did you know that the statue of Ferenc Deák, a significant political figure, is located in the city center?",
    type: "Monuments",
  },
  {
    fact: "Did you know that the Imre Nagy memorial honors the leader of the 1956 Revolution?",
    type: "Monuments",
  },
  {
    fact: "Did you know that the statue of the Unknown Soldier is a tribute to those who fought for Hungary's independence?",
    type: "Monuments",
  },
  {
    fact: "Did you know that the Memorial of the 1848 Revolution is a significant historical site in Budapest?",
    type: "Monuments",
  },

  // Language
  {
    fact: "Did you know that Hungarian is one of the few languages in Europe that is not Indo-European?",
    type: "Language",
  },
  {
    fact: "Did you know that Hungarian has a unique grammar system that includes 18 grammatical cases?",
    type: "Language",
  },
  {
    fact: "Did you know that the Hungarian language has a rich vocabulary with many loanwords from Turkish, Slavic, and German languages?",
    type: "Language",
  },
  {
    fact: "Did you know that many Hungarian words are formed by combining smaller words, creating long compound words?",
    type: "Language",
  },
  {
    fact: "Did you know that Hungarian uses the Latin alphabet, but it includes special characters like ö and ü?",
    type: "Language",
  },
  {
    fact: "Did you know that the word for 'hello' in Hungarian is 'szia'?",
    type: "Language",
  },
  {
    fact: "Did you know that 'köszönöm' means 'thank you' in Hungarian?",
    type: "Language",
  },
  {
    fact: "Did you know that Hungarian has unique phonetic rules, making pronunciation quite different from other European languages?",
    type: "Language",
  },
  {
    fact: "Did you know that Hungarian idioms can be quite colorful and often have interesting literal translations?",
    type: "Language",
  },
  {
    fact: "Did you know that the Hungarian language has a tradition of oral storytelling, with folk tales passed down through generations?",
    type: "Language",
  },
  {
    fact: "Did you know that many Hungarian words are influenced by the Turkish language due to historical ties?",
    type: "Language",
  },
  {
    fact: "Did you know that Hungarian uses vowel harmony, where vowels in a word must harmonize in frontness or backness?",
    type: "Language",
  },
  {
    fact: "Did you know that Hungarian has many dialects, reflecting the diverse regions of the country?",
    type: "Language",
  },
  {
    fact: "Did you know that the Hungarian language has a vibrant literary tradition, with many renowned poets and writers?",
    type: "Language",
  },
  {
    fact: "Did you know that Hungarian is often considered a challenging language for foreigners to learn due to its complexity?",
    type: "Language",
  },
  {
    fact: "Did you know that there are approximately 13 million native Hungarian speakers worldwide?",
    type: "Language",
  },
  {
    fact: "Did you know that Hungarian folk songs and music are an integral part of the culture and often feature unique rhythms?",
    type: "Language",
  },
  {
    fact: "Did you know that the Hungarian language has a rich array of proverbs that reflect the culture and way of life?",
    type: "Language",
  },
  {
    fact: "Did you know that 'jó reggelt' means 'good morning' in Hungarian?",
    type: "Language",
  },
  {
    fact: "Did you know that 'viszlát' is a common way to say 'goodbye' in Hungarian?",
    type: "Language",
  },
  {
    fact: "Did you know that Hungarian is the official language of Hungary and is also spoken by Hungarian communities in neighboring countries?",
    type: "Language",
  },

  // Misc
  {
    fact: "Did you know that Budapest is home to the world's largest thermal cave system?",
    type: "Misc",
  },
  {
    fact: "Did you know that Budapest has one of the oldest metro systems in the world, opened in 1896?",
    type: "Misc",
  },
  {
    fact: "Did you know that the city is known for its thermal baths, many of which date back to the Roman era?",
    type: "Misc",
  },
  {
    fact: "Did you know that Budapest has a unique ruin bar scene, where abandoned buildings are transformed into eclectic bars?",
    type: "Misc",
  },
  {
    fact: "Did you know that Budapest is famous for its beautiful night skyline, with lights reflecting on the Danube River?",
    type: "Misc",
  },
  {
    fact: "Did you know that the Hungarian language has no gender, making it unique among European languages?",
    type: "Misc",
  },
  {
    fact: "Did you know that Budapest hosts one of the largest annual cultural festivals in Europe, Sziget Festival?",
    type: "Misc",
  },
  {
    fact: "Did you know that the city has a rich tradition of folk art, including intricate embroidery and pottery?",
    type: "Misc",
  },
  {
    fact: "Did you know that Budapest has more than 200 thermal springs, making it a popular destination for wellness tourism?",
    type: "Misc",
  },
  {
    fact: "Did you know that the city is often referred to as the 'Paris of the East' due to its romantic ambiance?",
    type: "Misc",
  },
  {
    fact: "Did you know that Budapest is a UNESCO City of Literature, recognizing its rich literary heritage?",
    type: "Misc",
  },
  {
    fact: "Did you know that the Hungarian National Gallery showcases the country’s finest artworks from the Middle Ages to the present?",
    type: "Misc",
  },
  {
    fact: "Did you know that Budapest has a vibrant street art scene, with murals and installations found throughout the city?",
    type: "Misc",
  },
  {
    fact: "Did you know that Budapest is famous for its wines, particularly Tokaji, which is known as the 'Wine of Kings'?",
    type: "Misc",
  },
  {
    fact: "Did you know that the city has a rich musical tradition, being home to composers like Franz Liszt and Béla Bartók?",
    type: "Misc",
  },
  {
    fact: "Did you know that the Hungarian language is considered one of the most challenging languages for English speakers?",
    type: "Misc",
  },
  {
    fact: "Did you know that Budapest was the first city in the world to have an underground railway?",
    type: "Misc",
  },
  {
    fact: "Did you know that the famous thermal baths of Budapest are said to have healing properties?",
    type: "Misc",
  },
  {
    fact: "Did you know that Budapest hosts numerous art exhibitions and cultural events throughout the year?",
    type: "Misc",
  },
  {
    fact: "Did you know that the city is famous for its unique blend of Eastern and Western influences?",
    type: "Misc",
  },
  {
    fact: "Did you know that Budapest has many UNESCO World Heritage sites, including the Buda Castle District?",
    type: "Misc",
  },
];
