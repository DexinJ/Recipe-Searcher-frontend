import MobileNavigation from "../MobileNavigation/MobileNavigation";
import Navigation from "../Navigation/Navigation";
import Search from "../Search/Search";
import "./Header.css";
function Header() {
  return (
    <header className="header">
      <Navigation />
      <Search />
    </header>
  );
}

export default Header;
