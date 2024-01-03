import { useContext } from "react";
import Navigation from "../Navigation/Navigation";
import Search from "../Search/Search";
import "./Header.css";
import { CurrentLinkContext } from "../../contexts/CurrentLinkContext";
function Header({ onSearch }) {
  return (
    <header className="header">
      <Navigation />
      <Search onSearch={onSearch} />
    </header>
  );
}

export default Header;
