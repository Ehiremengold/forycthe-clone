// Determine push distance based on screen width
export const getPushDistance = (screenWidth, tab) => {
  if (screenWidth >= 1440) return tab * 15; // Larger push for 1440px and above
  if (screenWidth >= 1024) return tab * 5; // Standard push for 1024px and above
  return 0; // No push for smaller screens
};
