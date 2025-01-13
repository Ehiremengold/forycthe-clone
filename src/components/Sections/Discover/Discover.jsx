import "./Discover.css";
import beauImg from "../../../assets/company-logos/Beaupreneur.svg";
import execPros from "../../../assets/company-logos/ExecutiveProsLogo.svg";
import iwaria from "../../../assets/company-logos/iwaria.svg";
import stacai from "../../../assets/company-logos/stacai.svg";
import starks from "../../../assets/company-logos/starks.svg";
import { useState, useEffect } from "react";
import { testimonies } from "./testimonies";
import { useRef } from "react";
import LazyImage from "../../LazyImage/LazyImage";

const Discover = () => {
  const [tab, setTab] = useState(0);
  const testimonyRef = useRef(null);

  // My solution to automatically switch tabs
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setTab((prevTab) => (prevTab + 1) % testimonies.length); // Cycle through tabs
  //   }, 5000); // Change tab every 5 seconds

  //   return () => clearInterval(interval); // Cleanup on component unmount
  // }, []);

  useEffect(() => {
    // Select the currently active tab based on the "tab" state
    const activeTab = document.querySelectorAll(".icon-container")[tab];

    // Reference to the container where the testimony will be displayed
    const container = testimonyRef.current;

    if (activeTab && container) {
      // Get the active tab's position and size relative to the viewport
      const { left, width: tabWidth } = activeTab.getBoundingClientRect();

      // Get the parent container's position relative to the viewport
      const parentLeft = document
        .querySelector(".startUp-logo-container")
        .getBoundingClientRect().left;

      // Get the width of the container (testimony box)
      const containerWidth = container.offsetWidth;

      // Get the width of the viewport (browser window)
      const viewportWidth = window.innerWidth;

      // Calculate the initial left position for the container
      // Offset the container slightly under the active tab
      let calculatedLeft = left - parentLeft + tabWidth / 4;

      // Responsive adjustment for the second tab on smaller screens
      if (window.innerWidth <= 768 && tab === 1) {
        calculatedLeft -= containerWidth / 3; // Adjust further into the viewport
      }

      // Responsive adjustment for the third tab on smaller screens
      if (window.innerWidth <= 1024 && tab === 2) {
        calculatedLeft -= containerWidth / 2; // Adjust further into the viewport
      }

      // Responsive adjustment for the third tab on smaller screens
      if (window.innerWidth <= 1024 && tab === 2) {
        calculatedLeft -= containerWidth / 2; // Adjust further into the viewport
      }

      // If the container overflows the viewport on the right side,
      // reposition it further to the left so it stays within bounds
      if (calculatedLeft + containerWidth > viewportWidth) {
        calculatedLeft = left - parentLeft + tabWidth - containerWidth; // Shift left to avoid overflow
      }

      // Ensure the container does not overflow on the left side
      calculatedLeft = Math.max(calculatedLeft, 0); // Prevent negative values

      // Apply the calculated left position to the container's style
      container.style.left = `${calculatedLeft}px`;
    }
  }, [tab]); // Re-run this effect whenever the "tab" state changes

  return (
    <section className="discover">
      <div className="wrappper">
        <h2>
          Discover the{" "}
          <span className="emphasis-text">transformative stories</span> of
          startups that scaled new heights with us
        </h2>

        <div className="founder__testimony">
          <div className="startUp-logo-container">
            <div
              className={`icon-container ${tab === 0 && "active"}`}
              onClick={() => setTab(0)}
            >
              <img src={starks} alt="" />
              <p>Starks</p>
            </div>
            <div
              className={`icon-container ${tab === 1 && "active"}`}
              onClick={() => setTab(1)}
            >
              <img src={execPros} alt="" />
            </div>
            <div
              className={`icon-container ${tab === 2 && "active"}`}
              onClick={() => setTab(2)}
            >
              <img src={stacai} alt="" />
            </div>
            <div
              className={`icon-container ${tab === 3 && "active"}`}
              onClick={() => setTab(3)}
            >
              <img src={iwaria} alt="" />
            </div>
            <div
              className={`icon-container ${tab === 4 && "active"}`}
              onClick={() => setTab(4)}
            >
              <img src={beauImg} alt="" />
            </div>
          </div>

          {testimonies.map((testimony, index) => {
            const { title, body, name, img } = testimony;
            return (
              tab === index && (
                <div
                  key={index}
                  ref={tab === index ? testimonyRef : null}
                  className={`founder-testimony-container ${
                    tab === index ? "active-container" : "hidden"
                  }`}
                >
                  <div className="testimony">
                    <h3>{title}</h3>
                    <p>{body}</p>
                    <h3>{name}</h3>
                  </div>
                  <div className="__image">
                    <LazyImage src={img} alt="testifier-img" />
                  </div>
                </div>
              )
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Discover;
