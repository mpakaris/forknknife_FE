import * as maptilersdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";
import { useEffect, useRef, useState } from 'react';
import '../../styles/map.css';

const Map = ({ onMarkerClick, locations, userLocation }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [markers, setMarkers] = useState([]);
  const [selectedMarkerUuid, setSelectedMarkerUuid] = useState(null);
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

  // Function to add markers and show popups
  const addMarkers = () => {
    const newMarkers = locations.map((loc) => {
      const marker = new maptilersdk.Marker({
        color: returnCorrectColor(loc.uuid),
      })
        .setLngLat([loc.lng, loc.lat])
        .addTo(map.current);

      // Show popup only for the selected marker
      if (selectedMarkerUuid === loc.uuid) {
        const popup = new maptilersdk.Popup({
          closeButton: false,
          closeOnClick: false,
          className: 'popup-class', // Custom class for styling
        })
          .setLngLat([loc.lng, loc.lat])
          .setHTML(
            `<div class="text-red-800 text-xs font-bold text-center p-1">
              ${loc.name}
            </div>`
          )
          .addTo(map.current);
        
        marker.setPopup(popup);
      }

      // Add click event to marker
      marker.getElement().addEventListener("click", () => {
        setSelectedMarkerUuid(loc.uuid);
        onMarkerClick(loc.uuid);
      });

      return marker;
    });

    // Add the user's location marker if available
    if (userLocation && userLocation.lng && userLocation.lat) {
      const userMarkerElement = document.createElement('div');
      userMarkerElement.className = 'user-marker';
      
      const userMarker = new maptilersdk.Marker({
        element: userMarkerElement,
      })
        .setLngLat([userLocation.lng, userLocation.lat])
        .addTo(map.current);
      newMarkers.push(userMarker); // Add user marker to the markers array
    }

    setMarkers(newMarkers);
  };

  useEffect(() => {
    // Only create the map if userLocation has valid coordinates
    if (!map.current) {
      const initialLng = userLocation?.lng || 19.0527; // Fallback longitude
      const initialLat = userLocation?.lat || 47.49919; // Fallback latitude

      map.current = new maptilersdk.Map({
        container: mapContainer.current,
        center: [initialLng, initialLat],
        zoom: zoom,
      });
    }

    // Clear existing markers and add new ones whenever selectedMarkerUuid changes
    clearMarkers();
    addMarkers();
  }, [selectedMarkerUuid, locations, userLocation]);

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
};

export default Map;