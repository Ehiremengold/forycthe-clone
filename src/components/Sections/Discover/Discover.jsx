import "./Discover.css";
import { companyLogos } from "../../../assets/company-logos/exports";
import { useState, useEffect } from "react";
import { testimonies } from "./testimonies";
import LazyImage from "../../LazyImage/LazyImage";
import { motion } from "framer-motion";
import { useScreenSize } from "../../../CustomHooks/useScreenSize";
import { getPushDistance } from "./utils";

const Discover = () => {
  const [tab, setTab] = useState(0);
  const screenWidth = useScreenSize();

  // Automatically switch tabs
  useEffect(() => {
    const interval = setInterval(() => {
      setTab((prevTab) => (prevTab + 1) % testimonies.length); // Cycle through tabs
    }, 5000); // Change tab every 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <section className="discover">
      <div className="wrapper">
        <motion.h2
          className="fade-on-scroll"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Discover the{" "}
          <span className="emphasis-text">transformative stories</span> of
          <br /> startups that scaled new heights with us
        </motion.h2>
        <div className="auto-tab-container">
          {companyLogos.map((logo, index) => {
            return (
              <div
                key={index}
                className={`icon-tab-container ${tab === index && "active"}`}
                onClick={() => setTab(index)}
              >
                <img src={logo} alt="" />
                {tab == 0 && "Starks"}
              </div>
            );
          })}
        </div>

        <motion.div
          className="testimony-container"
          style={{
            transform: `translateX(${getPushDistance(screenWidth, tab)}rem)`,
            transition: "transform 0.5s ease", // Smooth animation
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <div className="text-content">
            <h3>{testimonies[tab].title}</h3>
            <p>{testimonies[tab].body}</p>
            <h4>{testimonies[tab].name}</h4>
          </div>
          <div className="img-content">
            <LazyImage src={testimonies[tab].img} alt="" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default Discover;
