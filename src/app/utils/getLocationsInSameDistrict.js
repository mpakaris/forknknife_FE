export function getLocationsInSameDistrict(locations, currentAddress) {
  // Extract ZIP code from the current address
  const currentZipCode = extractZipCode(currentAddress);

  // Extract city and district information from the current ZIP code
  const currentCityCode = currentZipCode.charAt(0); // First digit (city)
  const currentDistrictCode = currentZipCode.substring(1, 3); // Second and third digits (district)

  // Filter locations based on matching city and district codes
  return locations.filter((location) => {
    const locationZipCode = extractZipCode(location.address);
    const locationCityCode = locationZipCode.charAt(0);
    const locationDistrictCode = locationZipCode.substring(1, 3);

    // Check if the city and district codes match
    return (
      locationCityCode === currentCityCode &&
      locationDistrictCode === currentDistrictCode
    );
  });
}

// Helper function to extract ZIP code from an address, even if it's not at the beginning
function extractZipCode(address) {
  // Find the first 4-digit number in the address
  const zipCodeMatch = address.match(/\b\d{4}\b/);
  return zipCodeMatch ? zipCodeMatch[0] : null;
}
