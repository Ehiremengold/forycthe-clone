import "./Spark.css";
import { sparkCtas, sparkCtasIllustrations } from "./export";
import StyledButton from "../../StyledButton/StyledButton";
import { useState } from "react";
import { motion } from "framer-motion";
import useInView from "../../../CustomHook/useInView";

const Spark = () => {
  const [tab, setTabSelect] = useState(0);
  const isInView = useInView(".spark-to-spotlight", { threshold: 0.5 });
  return (
    <section className="spark-to-spotlight">
      <div className="wrapper">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -20 }}
          transition={{ duration: 0.5 }}
          className="header-text"
        >
          From <span className="emphasis-text">Spark</span> to
          <span className="emphasis-text"> Spotlight</span>: we take you every
          step of the way to success.
        </motion.h2>
        <div className="spark-to-spotlight-actions-container">
          <div className="spark-to-spotlight-actions">
            <motion.div
              className="tab-select"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -20 }}
              transition={{ duration: 0.5 }}
            >
              <div
                className={`tab-1 ${tab == 0 && "active"}`}
                onClick={() => setTabSelect(0)}
              >
                Idea
              </div>
              <div
                className={`tab-2 ${tab == 1 && "active"}`}
                onClick={() => setTabSelect(1)}
              >
                Design
              </div>
              <div
                className={`tab-3 ${tab == 2 && "active"}`}
                onClick={() => setTabSelect(2)}
              >
                Develop
              </div>
              <div
                className={`tab-4 ${tab == 3 && "active"}`}
                onClick={() => setTabSelect(3)}
              >
                Launch
              </div>
            </motion.div>
            <motion.div
              className="tab-select-content"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -20 }}
              transition={{ duration: 0.5 }}
            >
              {sparkCtas.map(
                (sparkCta, index) =>
                  tab === index && (
                    <div key={index} className="content__container">
                      <h2>{sparkCta.title}</h2>
                      <p className="subtle-text">{sparkCta.description}</p>
                    </div>
                  )
              )}
            </motion.div>
            <StyledButton forwardIcon={true} />
          </div>
          <motion.div
            className="spark-to-spotlight-illustration"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 20 }}
            transition={{ duration: 0.5 }}
          >
            <img src={sparkCtasIllustrations[tab]} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Spark;
