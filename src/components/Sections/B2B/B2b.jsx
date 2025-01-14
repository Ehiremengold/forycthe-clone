import { motion } from "framer-motion";
import "./B2b.css";
import layerIcon from "../../../assets/icons/layers-three.svg";
import useInView from "../../../CustomHooks/useInView";

const B2b = () => {
  const isInView = useInView(".bee-2-bee", { threshold: 0.3 });

  return (
    <section className="bee-2-bee">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Your best call for B2B/B2C product innovation
      </motion.h2>

      <div className="wrapper">
        <motion.div
          className="bee-2-bee-desc-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {[...Array(3)].map((_, index) => (
            <motion.div
              className="b2b-content__container"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -100 }}
              transition={{
                duration: 1,
                ease: "easeOut",
                delay: 0.5 + index * 0.3,
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
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ delay: 1.2, duration: 1 }}
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
              animate={{ opacity: isInView ? 1 : 0 }}
              transition={{ delay: 1.5, duration: 1 }}
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
