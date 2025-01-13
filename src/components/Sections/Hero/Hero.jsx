import "./Hero.css";
import StyledButton from "../../StyledButton/StyledButton";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".animate-typing");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.5 }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);
  return (
    <section className="hero">
      <div className="wrapper">
        <div className="content-wrapper">
          <h1 className="animate-typing">
            We build <span className="emphasis-text">products</span> that shape
            a better future
          </h1>
          <p className="subtle-text animate-typing">
            We’re the architects of digital excellence across industries. We
            redefine business with cutting-edge digital strategies that invokes
            sector-wide transformation.
          </p>
          <StyledButton forwardIcon={true} />
        </div>
      </div>
      <h2 className="animate-typing">
        Success in <span className="emphasis-text">Motion</span> – Our clients’
        journey
      </h2>
    </section>
  );
};
export default Hero;
