import "./MobileNavigation.css";
import logo from "../../images/whats_in_my_fridge.svg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function MobileNavigation({
  onClick,
  show,
  isLoggedIn,
  onSignIn,
  onRegister,
  onLogout,
}) {
  const menuClass = show
    ? "mobile-navigation"
    : "mobile-navigation mobile-navigation_off";
  const handleLogin = () => {
    onSignIn();
    onClick();
  };

  const handleRegister = () => {
    onRegister();
    onClick();
  };

  const handleLogOut = () => {
    onLogout();
    onClick();
  };

  return (
    <nav className={menuClass}>
      <div className="mobile-navigation__menu">
        <div className="navigation">
          <div>
            <img src={logo} alt="logo" className="navigation__image" />
          </div>
          <button
            className="mobile-navigation__close"
            type="button"
            onClick={onClick}
          />
        </div>
        <Link to="/">
          <button
            className="mobile-navigation__button"
            type="button"
            onClick={onClick}
          >
            Home
          </button>
        </Link>

        {isLoggedIn ? (
          <Link to="profile">
            <button
              className="mobile-navigation__button"
              type="button"
              onClick={onClick}
            >
              Saved Recipe
            </button>
          </Link>
        ) : (
          <button
            className="mobile-navigation__button"
            type="button"
            onClick={handleLogin}
          >
            Login
          </button>
        )}
        {isLoggedIn ? (
          <button
            className="mobile-navigation__button"
            type="button"
            onClick={handleLogOut}
          >
            Logout
          </button>
        ) : (
          <button
            className="mobile-navigation__button"
            type="button"
            onClick={handleRegister}
          >
            Register
          </button>
        )}
      </div>
    </nav>
  );
}

export default MobileNavigation;
