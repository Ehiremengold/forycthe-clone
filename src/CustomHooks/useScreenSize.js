import { useState, useEffect } from "react";

// In bigger screens, i want the 'testimony' card moving close the the appropriate tabs
// on smaller screen it looks alright
export const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth); // Track screen width

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize); // Add listener for resizing

    return () => window.removeEventListener("resize", handleResize); // Cleanup listener
  }, []);

  return screenSize;
};
