/* eslint-disable react/prop-types */
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const Base = ({children}) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
export default Base;
