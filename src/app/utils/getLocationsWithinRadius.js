export function getLocationsWithinRadius(locations, userLocation, radius) {
  const earthRadius = 6371000; // Earth's radius in meters

  function haversineDistance(lat1, lng1, lat2, lng2) {
    const toRadians = (degrees) => degrees * (Math.PI / 180);

    const dLat = toRadians(lat2 - lat1);
    const dLng = toRadians(lng2 - lng1);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRadians(lat1)) *
        Math.cos(toRadians(lat2)) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return earthRadius * c;
  }

  return locations
    .filter((e) => {
      const distance = haversineDistance(
        userLocation.lat,
        userLocation.lng,
        e.lat,
        e.lng
      );
      return distance <= radius;
    })
    .map((e) => e);
}
