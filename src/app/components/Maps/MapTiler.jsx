// MapTiler.jsx (or Map.js)
import * as maptilersdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";
import { useEffect, useRef } from 'react';
import '../../styles/map.css';

const Map = ({ onMarkerClick, locations }) => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const location = { lat: 47.49919, lng: 19.0527 };
  const zoom = 13;
  maptilersdk.config.apiKey = 'bKNG0Ir1ORmL8bGkuCNM';

  useEffect(() => {
    if (map.current) return;

    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.STREETS,
      center: [location.lng, location.lat],
      zoom: zoom
    });

    locations.forEach((loc) => {
      const marker = new maptilersdk.Marker()
        .setLngLat([loc.lng, loc.lat])
        .addTo(map.current);

      marker.getElement().addEventListener("click", () => onMarkerClick(loc.id));
    });
  }, [location.lng, location.lat, zoom, locations, onMarkerClick]);

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
}

export default Map;