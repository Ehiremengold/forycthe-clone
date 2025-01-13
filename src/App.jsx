import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./page/Home/Home";
import Base from "./Base.jsx";

function App() {
  return (
    <>
      <Router>
        <Base>
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </Base>
      </Router>
    </>
  );
}

export default App;
