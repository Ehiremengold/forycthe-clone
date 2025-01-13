import "./Home.css";
import {
  Hero,
  ProductsMotion,
  Spark,
  B2b,
  Blog,
  Scale,
} from "../../components/Sections/exports";

const Home = () => {
  return (
    <>
      <Hero />
      <ProductsMotion />
      {/* <Discover /> */}
      <Spark />
      <B2b />
      <Blog />
      <Scale />
    </>
  );
};
export default Home;
