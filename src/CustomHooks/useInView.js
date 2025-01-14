import { useState, useEffect } from "react";

const useInView = (selector, options = { threshold: 0.3 }) => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect(); // Stop observing once triggered
          }
        });
      },
      options
    );

    const element = document.querySelector(selector);
    if (element) {
      observer.observe(element);
    }

    return () => {
      observer.disconnect(); // Cleanup the observer on unmount
    };
  }, [selector, options]);

  return inView;
};

export default useInView;
