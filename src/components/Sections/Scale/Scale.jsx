import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import "./Scale.css";
import StyledButton from "../../StyledButton/StyledButton";


const Scale = () => {

  const [inView, setInView] = useState(false);

  // IntersectionObserver to track if the component is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true); // Set to true when in view
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the component is in view
    );

    const sectionElement = document.querySelector(".scale");
    if (sectionElement) {
      observer.observe(sectionElement);
    }

    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }
    };
  }, []);

  return (
    <section className="scale">
      <motion.div
        className="scale__header-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <h2>
          <span className="emphasis-text">Ready to Scale?</span>
          <br /> Join successful brands that chose us as their{" "}
          <span className="emphasis-text">growth accelerator</span>
        </h2>
        <StyledButton />
      </motion.div>

      <div className="blue-line"></div>
      <motion.div
        className="wrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <h5>Copyright © 2024 Forcythe. All rights reserved.</h5>
      </motion.div>
    </section>
  );
};

export default Scale;
