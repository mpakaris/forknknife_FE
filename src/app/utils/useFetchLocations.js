import axios from "axios";
import { useEffect, useState } from "react";
import mockLocations from "../mockData/locations";

export const useFetchLocations = () => {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        let fetchedLocations;
        if (process.env.NEXT_PUBLIC_ENV === "development") {
          const response = await axios.get(
            "http://0.0.0.0:5001/getstuffdone-80541/us-central1/getAllCollections"
          );
          fetchedLocations = Object.entries(response.data).map(
            ([uuid, details]) => ({
              uuid,
              ...details,
            })
          );
        } else {
          // Use mock data in PROD mode
          fetchedLocations = mockLocations;
        }
        setLocations(fetchedLocations);
      } catch (error) {
        console.error("Error fetching locations:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLocations();
  }, []);

  return { locations, loading };
};
