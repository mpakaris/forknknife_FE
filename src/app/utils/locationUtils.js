export const handleLocationPermission = (setUserLocation) => {
  const hasLocationPermission = localStorage.getItem("hasLocationPermission");

  if (!hasLocationPermission || hasLocationPermission === "false") {
    const userWantsToAllow = window.confirm(
      "Allow access to your current location?"
    );
    if (userWantsToAllow && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
          localStorage.setItem("hasLocationPermission", "true");
        },
        (error) => {
          console.error("Error fetching location:", error);
          localStorage.setItem("hasLocationPermission", "false");
        }
      );
    } else {
      localStorage.setItem("hasLocationPermission", "false");
    }
  } else if (hasLocationPermission === "true" && navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setUserLocation({ lat: latitude, lng: longitude });
    });
  }
};
