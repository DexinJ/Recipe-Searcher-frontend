import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import Navigation from "../Navigation/Navigation";
import Search from "../Search/Search";
import "./Header.css";
import Greeting from "../Greeting/Greeting";
function Header({ isLoggedIn, onSearch, onLogout, onSignIn, onRegister }) {
  const reactLocation = useLocation();
  const currentLocation = reactLocation.pathname === "/";
  const headerClass = currentLocation ? "header" : "header header__white";

  return (
    <header className={headerClass}>
      <Navigation
        isLoggedIn={isLoggedIn}
        onLogout={onLogout}
        onSignIn={onSignIn}
        onRegister={onRegister}
      />
      {currentLocation ? <Search onSearch={onSearch} /> : <Greeting />}
    </header>
  );
}

export default Header;
