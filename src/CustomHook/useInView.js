import { useState, useEffect } from "react";

const useInView = (selector, options = { threshold: 0.3 }) => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          } else {
            setInView(false);
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
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [selector, options]);

  return inView;
};

export default useInView;
