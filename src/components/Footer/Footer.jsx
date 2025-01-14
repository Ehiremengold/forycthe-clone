import "./Footer.css";
import logo from "../../assets/company-logos/forcythelogo.svg";
import { socialMediaIcons } from "../../assets/social-media-icons/exports";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Footer = () => {
  const [radioClick, setRadioClick] = useState(false);
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
    <section className="footer">
      <div className="wrapper">
        {/* left most */}
        <div className="input-subscribe">
          <motion.div
            className="subscribe-input-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
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
          </motion.div>
        </div>
        {/* left most */}

        {/* center */}
        <motion.div
          className="footer-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="logo">
            <img src={logo} alt="forcythe-logo" />
          </div>
          <p className="subtle-text">
            We are the growth company for businesses looking to scale. We are
            dedicated to transforming businesses with bespoke digital solutions
            that drive growth.
          </p>
          <div className="social-media-icons">
            {socialMediaIcons.map((icon, index) => (
              <motion.div
                key={index}
                className="social-icon-container"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img src={icon} alt="" />
              </motion.div>
            ))}
          </div>
        </motion.div>
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
  );
};
export default Footer;
