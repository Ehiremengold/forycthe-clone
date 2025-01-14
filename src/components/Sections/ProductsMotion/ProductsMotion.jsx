import "./ProductsMotion.css";
import motionProducts from "../../../assets/scroll-motion-imgs/exports.js";
import LazyImage from "../../LazyImage/LazyImage.jsx";

const ProductsMotion = () => {
  return (
    <>
      <div className="slider">
        <div className="slide-track">
          {motionProducts.map((img, index) => (
            <div key={index} className="slide">
              <img
                src={img}
                className="product-icon"
                alt="product-icon"
                loading="lazy"
              />
            </div>
          ))}
          {motionProducts.map((img, index) => (
            <div key={index} className="slide">
              <img
                src={img}
                className="product-icon"
                alt="product-icon"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <div className="slide-track-2">
          {motionProducts.map((img, index) => (
            <div key={index} className="slide">
              <img
                src={img}
                className="product-icon"
                alt="product-icon"
                loading="lazy"
              />
            </div>
          ))}
          {motionProducts.map((img, index) => (
            <div key={index} className="slide">
              <img
                src={img}
                className="product-icon"
                alt="product-icon"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default ProductsMotion;
