import * as maptilersdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";
import { useEffect, useRef, useState } from 'react';
import '../../styles/map.css';

const Map = ({ onMarkerClick, locations }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [markers, setMarkers] = useState([]);
  const [selectedMarkerUuid, setSelectedMarkerUuid] = useState(null);
  const location = { lat: 47.49919, lng: 19.0527 };
  const zoom = 11;
  maptilersdk.config.apiKey = 'bKNG0Ir1ORmL8bGkuCNM';

  const returnCorrectColor = (uuid) => {
    return selectedMarkerUuid === uuid ? '#DF245B' : '#00695C';
  };

  // Function to clear markers from the map
  const clearMarkers = () => {
    markers.forEach((marker) => marker.remove());
    setMarkers([]);
  };

  // Function to add markers to the map
  const addMarkers = () => {
    const newMarkers = locations.map((loc) => {
      const marker = new maptilersdk.Marker({
        color: returnCorrectColor(loc.uuid),
      })
        .setLngLat([loc.lng, loc.lat])
        .addTo(map.current);

      // Add click event to marker
      marker.getElement().addEventListener("click", () => {
        setSelectedMarkerUuid(loc.uuid);
        onMarkerClick(loc.uuid);
      });

      return marker;
    });
    setMarkers(newMarkers);
  };

  useEffect(() => {
    if (!map.current) {
      map.current = new maptilersdk.Map({
        container: mapContainer.current,
        center: [location.lng, location.lat],
        zoom: zoom,
      });
    }

    // Clear existing markers and add new ones whenever selectedMarkerUuid changes
    clearMarkers();
    addMarkers();
  }, [selectedMarkerUuid, locations]);

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
};

export default Map;