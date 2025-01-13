import "./Scale.css";
import StyledButton from "../../StyledButton/StyledButton";
import logo from "../../../assets/company-logos/forcythelogo.svg";
import { socialMediaIcons } from "../../../assets/social-media-icons/exports";
import { useState } from "react";

const Scale = () => {
  const [radioClick, setRadioClick] = useState(false);
  return (
    <section className="scale">
      <div className="scale__header-text">
        <h2>
          <span className="emphasis-text">Ready to Scale?</span>
          <br /> Join successful brands that chose us as their{" "}
          <span className="emphasis-text">growth accelerator</span>
        </h2>
        <StyledButton />
      </div>
      <section className="footer">
        <div className="wrapper">
          {/* left most */}
          <div className="input-subscribe">
            <div className="subscribe-input-container">
              <div className="input-container">
                <input
                  type="text"
                  className="subscribe-input"
                  placeholder="Your Email Address"
                />
                <button className="subscribe-btn">Subscribe</button>
              </div>
              <div className="radio-choice">
                <div
                  className="radio-border"
                  onClick={() => setRadioClick(!radioClick)}
                >
                  {radioClick && <div className="radio-selected"></div>}
                </div>
                <label htmlFor="radio1">
                  I agree to receive other notifications from Forcythe
                </label>
              </div>
            </div>
          </div>
          {/* left most */}

          {/* center */}
          <div className="footer-center">
            <div className="logo">
              <img src={logo} alt="forcythe-logo" />
            </div>
            <p className="subtle-text">
              We are the growth company for businesses looking to scale. We are
              dedicated to transforming businesses with bespoke digital
              solutions that drive growth.
            </p>
            <div className="social-media-icons">
              {socialMediaIcons.map((icon, index) => {
                return (
                  <div className="social-icon-container" key={index}>
                    <img src={icon} alt="" />
                  </div>
                );
              })}
            </div>
          </div>
          {/* center */}

          {/* right */}
          <div className="footer-links">
            <h3>Company</h3>
            <ul>
              <li>About</li>
              <li>Services</li>
              <li>Portfolio</li>
              <li>Studio</li>
              <li>Foundation</li>
              <li>Careers</li>
              <li>Blog</li>
            </ul>
          </div>
          {/* right */}
        </div>
      </section>
      <div className="blue-line"></div>
      <div className="wrapper">

      <h5>Copyright © 2024 Forcythe. All rights reserved.</h5>
      </div>
    </section>
  );
};
export default Scale;
