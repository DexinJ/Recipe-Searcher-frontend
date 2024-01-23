import MobileNavigation from "../MobileNavigation/MobileNavigation";
import { useState } from "react";
import "./Navigation.css";
import { Link, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import logo from "../../images/whats_in_my_fridge.svg";
import logoBlack from "../../images/whats_in_my_fridge_black.svg";

function Navigation({ isLoggedIn, onLogout, onSignIn, onRegister }) {
  const [visible, setVisible] = useState(false);
  const handleOpenMenu = () => {
    setVisible(!visible);
  };
  const reactLocation = useLocation();
  const currentLocation = reactLocation.pathname === "/";
  const navClass = currentLocation
    ? "navigation"
    : "navigation navigation__white";

  const recipeClass = currentLocation
    ? "navigation__tag"
    : "navigation__tag navigation__tag_active_black navigation__black";

  const homeClass = currentLocation
    ? "navigation__tag navigation__tag_active"
    : "navigation__tag navigation__black";

  const buttonClass = currentLocation
    ? "navigation__button"
    : "navigation__button_black";

  return (
    <nav className={navClass}>
      <div>
        <Link to="/">
          <img
            src={currentLocation ? logo : logoBlack}
            alt="logo"
            className="navigation__image"
          />
        </Link>
      </div>
      <div className="navigation__buttons">
        <div className="navigation__tags">
          <Link to="/">
            <button className={homeClass}>Home</button>
          </Link>
          {isLoggedIn && (
            <Link to="profile">
              <button className={recipeClass}>Saved Recipe</button>
            </Link>
          )}
        </div>
        {isLoggedIn ? (
          <button className={buttonClass} onClick={onLogout}>
            Logout
          </button>
        ) : (
          <div className="navigation__buttons">
            <button className="navigation__button" onClick={onSignIn}>
              Login
            </button>
            <button className="navigation__button" onClick={onRegister}>
              Register
            </button>
          </div>
        )}
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
