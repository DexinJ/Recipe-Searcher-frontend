import MobileNavigation from "../MobileNavigation/MobileNavigation";
import { useState } from "react";
import "./Navigation.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import logo from "../../images/whats_in_my_fridge.svg";

function Navigation() {
  const [visible, setVisible] = useState(false);
  const handleOpenMenu = () => {
    setVisible(!visible);
  };

  return (
    <nav className="navigation">
      <div>
        <Link to="/">
          <img src={logo} alt="logo" className="navigation__image" />
        </Link>
      </div>
      <div className="navigation__buttons">
        <div className="navigation__tags">
          <button className="navigation__tag navigation__tag_active">
            Home
          </button>
          <button className="navigation__tag">Saved Recipe</button>
        </div>
        <button className="navigation__button">Logout</button>
      </div>
      <button
        className="navigation__menu"
        type="button"
        onClick={handleOpenMenu}
      />
      <MobileNavigation onClick={handleOpenMenu} show={visible} />
    </nav>
  );
}

export default Navigation;
