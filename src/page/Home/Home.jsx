import "./Home.css";
import {
  Hero,
  ProductsMotion,
  Discover,
  Spark,
  B2b,
  Blog,
  Scale,
} from "../../components/Sections/exports";
import FloatingBtn from "../../components/FloatingBtn/FloatingBtn";
const Home = () => {
  return (
    <>
      <Hero />
      <ProductsMotion />
      <Discover />
      {/* <Spark /> */}
      <B2b />
      <Blog />
      <Scale />
      <FloatingBtn />
    </>
  );
};
export default Home;
