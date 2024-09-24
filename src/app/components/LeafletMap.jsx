// LeafletComponent.jsx
import { useEffect, useRef } from "react";
import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";

export default function LeafletComponent({ onMarkerClick }) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const locations = [
    { name: "Budapest Jazz Club", lat: 47.51374, lng: 19.04976 },
    { name: "Cafe Vian", lat: 47.50644, lng: 19.05866 },
    { name: "Gettó Gulyás", lat: 47.49791, lng: 19.05468 },
  ];
  
  const location = { lat: 47.49919, lng: 19.0527 };

  useEffect(() => {
    if (map.current) return;

    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.STREETS,
      center: [location.lng, location.lat],
      zoom: 12,
    });

    // Add markers and pass the location data on click
    locations.forEach((loc) => {
      const marker = new maptilersdk.Marker()
        .setLngLat([loc.lng, loc.lat])
        .addTo(map.current);

      marker.getElement().addEventListener("click", () => {
        onMarkerClick(loc); // Pass the location back to the parent component
      });
    });
  }, [location.lat, location.lng, locations, onMarkerClick]);

  return <div ref={mapContainer} className="map" />;
}