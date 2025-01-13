import "./Discover.css";
import beauImg from "../../../assets/company-logos/Beaupreneur.svg";
import execPros from "../../../assets/company-logos/ExecutiveProsLogo.svg";
import iwaria from "../../../assets/company-logos/iwaria.svg";
import stacai from "../../../assets/company-logos/stacai.svg";
import starks from "../../../assets/company-logos/starks.svg";
import { useState, useEffect } from "react";
import { testimonies } from "./testimonies";
import LazyImage from "../../LazyImage/LazyImage";

// In bigger screens, i want the 'testimony' card moving close the the appropriate tabs
// on smaller screen it looks alright
const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth); // Track screen width

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize); // Add listener for resizing

    return () => window.removeEventListener("resize", handleResize); // Cleanup listener
  }, []);

  return screenSize;
};

const Discover = () => {
  const [tab, setTab] = useState(0);
  const screenWidth = useScreenSize();

  // Determine push distance based on screen width
  const getPushDistance = () => {
    if (screenWidth >= 1440) return tab * 15; // Larger push for 1440px and above
    if (screenWidth >= 1024) return tab * 5; // Standard push for 1024px and above
    return 0; // No push for smaller screens
  };

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
        <h2>
          Discover the{" "}
          <span className="emphasis-text">transformative stories</span> of
          <br /> startups that scaled new heights with us
        </h2>
        <div className="auto-tab-container">
          <div
            className={`icon-tab-container ${tab === 0 && "active"}`}
            onClick={() => setTab(0)}
          >
            <img src={starks} alt="" />
            Starks
          </div>
          <div
            className={`icon-tab-container ${tab === 1 && "active"}`}
            onClick={() => setTab(1)}
          >
            <img src={execPros} alt="" />
          </div>
          <div
            className={`icon-tab-container ${tab === 2 && "active"}`}
            onClick={() => setTab(2)}
          >
            <img src={stacai} alt="" />
          </div>
          <div
            className={`icon-tab-container ${tab === 3 && "active"}`}
            onClick={() => setTab(3)}
          >
            <img src={iwaria} alt="" />
          </div>
          <div
            className={`icon-tab-container ${tab === 4 && "active"}`}
            onClick={() => setTab(4)}
          >
            <img src={beauImg} alt="" />
          </div>
        </div>

        <div
          className="testimony-container "
          style={{
            transform: `translateX(${getPushDistance()}rem)`,
            transition: "transform 0.5s ease", // Smooth animation
          }}
        >
          <div className="text-content">
            <h3>{testimonies[tab].title}</h3>
            <p>{testimonies[tab].body}</p>
            <h4>{testimonies[tab].name}</h4>
          </div>
          <div className="img-content">
            <img src={testimonies[tab].img} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Discover;
