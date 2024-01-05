import Navigation from "../Navigation/Navigation";
import Search from "../Search/Search";
import "./Header.css";
function Header({ onSearch }) {
  return (
    <header className="header">
      <Navigation />
      <Search onSearch={onSearch} />
    </header>
  );
}

export default Header;
