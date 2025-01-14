import "./Hero.css";
import StyledButton from "../../StyledButton/StyledButton";

const Hero = () => {
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
