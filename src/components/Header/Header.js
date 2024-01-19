import { Route } from "react-router-dom/cjs/react-router-dom.min";
import Navigation from "../Navigation/Navigation";
import Search from "../Search/Search";
import "./Header.css";
function Header({ onSearch }) {
  return (
    <header className="header">
      <Navigation />
      <Route exact path="/">
        <Search onSearch={onSearch} />
      </Route>
    </header>
  );
}

export default Header;
