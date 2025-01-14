import { motion } from "framer-motion";
import "./B2b.css";
import layerIcon from "../../../assets/icons/layers-three.svg";
import { useEffect, useState } from "react";

const B2b = () => {
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

    const sectionElement = document.querySelector(".bee-2-bee");
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
    <section className="bee-2-bee">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Your best call for B2B/B2C product innovation
      </motion.h2>

      <div className="wrapper">
        <motion.div
          className="bee-2-bee-desc-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {[...Array(3)].map((_, index) => (
            <motion.div
              className="b2b-content__container"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
              transition={{
                duration: 1,
                ease: "easeOut",
                delay: 0.3 + index * 0.1,
              }}
              key={index}
            >
              <div className="layer-icon-container">
                <img src={layerIcon} alt="" />
              </div>
              <h3>Experience</h3>
              <p className="subtle-text">
                Decades of collective wisdom. Leverage our extensive experience
                to avoid common pitfalls and accelerate your business growth.
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="stats-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <motion.div className="stats-data-intro">
            <h3>
              We build solutions that help
              <br />
              <span className="emphasis-text">businesses</span> of all sizes to
              <span className="emphasis-text"> scale</span>
            </h3>

            <motion.div
              className="stats-data"
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{ delay: 1.2, duration: 1 }}
            >
              <div className="data-block">
                <h2 className="emphasis-text">50+</h2>
                <p>Clients</p>
              </div>
              <div className="data-block">
                <h2 className="emphasis-text-color">120+</h2>
                <p>Projects</p>
              </div>
              <div className="data-block">
                <h2 className="emphasis-text">10+</h2>
                <p>Team Leads</p>
              </div>
              <div className="data-block">
                <h2 className="emphasis-text">10+</h2>
                <p>Glorious Years</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default B2b;
