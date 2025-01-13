import "./Header.css";
import forcythelogo from "../../assets/company-logos/forcythelogo.svg";
import StyledButton from "../StyledButton/StyledButton";
import navBarIcon from "../../assets/icons/menu.svg";
import { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <header>
        <nav>
          <div className="logo">
            <img src={forcythelogo} alt="forcythe-logo" />
          </div>
          <div className={`mobile-desktop-nav ${showMenu && "show"}`}>
            <ul className="nav-items">
              <li>About</li>
              <li>Services</li>
              <li>Portfolio</li>
              <li>Studio</li>
              <li>Foundation</li>
              <div className="show-on-mobile">
                <li>Careers</li>
                <li>Blog</li>
              </div>
            </ul>
            <StyledButton />
          </div>
          <div
            className="menu-container"
            onClick={() => setShowMenu(!showMenu)}
          >
            <img src={navBarIcon} alt="" />
          </div>
        </nav>
      </header>
    </>
  );
};
export default Header;
