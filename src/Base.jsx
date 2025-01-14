/* eslint-disable react/prop-types */
import Header from "./components/Header/Header";

const Base = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
export default Base;
