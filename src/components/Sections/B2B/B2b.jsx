import "./B2b.css";
import layerIcon from "../../../assets/icons/layers-three.svg";

const B2b = () => {
  return (
    <section className="bee-2-bee">
      <h2>Your best call for B2B/B2C product innovation</h2>
      <div className="wrapper">
        <div className="bee-2-bee-desc-container">
          <div className="b2b-content__container">
            <div className="layer-icon-container">
              <img src={layerIcon} alt="" />
            </div>
            <h3>Experience</h3>
            <p className="subtle-text">
              Decades of collective wisdom. Leverage our extensive experience to
              avoid common pitfalls and accelerate your business growth.
            </p>
          </div>
          <div className="b2b-content__container">
            <div className="layer-icon-container">
              <img src={layerIcon} alt="" />
            </div>
            <h3>Quick Support</h3>
            <p className="subtle-text">
              We are your reliable partner, always there when you need us,
              ensuring smooth operations at every stage of your growth.
            </p>
          </div>
          <div className="b2b-content__container">
            <div className="layer-icon-container">
              <img src={layerIcon} alt="" />
            </div>
            <h3>Cost Savings</h3>
            <p className="subtle-text">
              Maximising impact, minimising costs efficiency is key. We provide
              cost-effective solutions without compromising on quality.
            </p>
          </div>
        </div>
        <div className="stats-section">
          <div className="stats-data-intro">
            <h3>
              We build solutions that help
              <br />
              <span className="emphasis-text">businesses</span> of all sizes to
              <span className="emphasis-text"> scale</span>
            </h3>
            <div className="stats-data">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default B2b;
