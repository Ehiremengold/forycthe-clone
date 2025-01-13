/* eslint-disable react/prop-types */
import "./StyledButton.css";
import forwardImg from "../../assets/icons/hero-dark-play.svg";
import whiteforwardImg from "../../assets/icons/hero-white-play.svg";
import { useState } from "react";
const StyledButton = ({ forwardIcon, dynamicText }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="cta-btn"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button>
        {dynamicText || "Book a Call"}
        {forwardIcon && <img src={isHovered ? whiteforwardImg : forwardImg} />}
      </button>
      <div className="dashed-btn"></div>
    </div>
  );
};
export default StyledButton;
