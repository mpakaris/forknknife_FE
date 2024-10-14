export function getDistanceBetweenLocations(loc1, loc2) {
  const toRadians = (degree) => (degree * Math.PI) / 180;

  const earthRadiusKm = 6371; // Earth's radius in kilometers

  const dLat = toRadians(loc2.lat - loc1.lat);
  const dLng = toRadians(loc2.lng - loc1.lng);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(loc1.lat)) *
      Math.cos(toRadians(loc2.lat)) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  // Calculate distance and return it rounded to 2 decimal places
  return parseFloat((earthRadiusKm * c).toFixed(2));
}
