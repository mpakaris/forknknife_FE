// Fisher-Yates Shuffle Algorithm to randomize the array
export const shuffleLocations = (array) => {
  const shuffled = [...array]; // Copy the array to avoid mutating the original
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap elements
  }
  return shuffled;
};
