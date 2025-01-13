import "./Spark.css";
import { sparkCtas, sparkCtasIllustrations } from "./export";
import StyledButton from "../../StyledButton/StyledButton";
import { useState } from "react";

const Spark = () => {
  const [tab, setTabSelect] = useState(0);

  return (
    <section className="spark-to-spotlight">
      <div className="wrapper">
        <h2 className="header-text">
          From <span className="emphasis-text">Spark</span> to
          <span className="emphasis-text"> Spotlight</span>: we take you every
          step of the way to success.
        </h2>
        <div className="spark-to-spotlight-actions-container">
          <div className="spark-to-spotlight-actions">
            <div className="tab-select">
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
            </div>
            <div className="tab-select-content">
              {sparkCtas.map((sparkCta, index) => {
                const { title, description } = sparkCta;
                return (
                  tab === index && (
                    <div key={index} className="content__container">
                      <h2>{title}</h2>
                      <p className="subtle-text">{description}</p>
                    </div>
                  )
                );
              })}
            </div>
            <StyledButton forwardIcon={true} />
          </div>
          <div className="spark-to-spotlight-illustration">
            <img src={sparkCtasIllustrations[tab]} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Spark;
