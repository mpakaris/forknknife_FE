// MapTilerModal.jsx
import * as maptilersdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";
import { useEffect, useRef } from 'react';
import '../styles/map.css';

export default function Map({ currentLocation, destinationLocation }) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const zoom = 10; 
  maptilersdk.config.apiKey = 'bKNG0Ir1ORmL8bGkuCNM';

  useEffect(() => {
    if (map.current) return;

    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.STREETS,
      center: [destinationLocation.lng, destinationLocation.lat], // Center on the destination initially
      zoom: zoom,
      interactive: false,
      navigationControl: false
    });

    // Add the destination marker (red pin)
    const destinationMarker = new maptilersdk.Marker({ color: 'red' })
      .setLngLat([destinationLocation.lng, destinationLocation.lat])
      .addTo(map.current);

    // Add the current location marker (blue dot)
    const currentMarker = new maptilersdk.Marker({ color: 'blue' })
      .setLngLat([currentLocation.lng, currentLocation.lat])
      .addTo(map.current);

    // Fit the map to show both markers
    const bounds = new maptilersdk.LngLatBounds();
    bounds.extend([destinationLocation.lng, destinationLocation.lat]);
    bounds.extend([currentLocation.lng, currentLocation.lat]);
    map.current.fitBounds(bounds, { padding: 65 }); // Add some padding for better visibility

  }, [currentLocation, destinationLocation]);

  return (
    <div className="map-wrap-modal" >
      <div ref={mapContainer} className="map-modal" style={{ maxHeight: '100vh' }} />
    </div>
  );
}