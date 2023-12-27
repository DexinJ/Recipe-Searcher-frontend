import MobileNavigation from "../MobileNavigation/MobileNavigation";
import { useState } from "react";
import "./Navigation.css";
function Navigation() {
  const [visible, setVisible] = useState(false);
  const handleOpenMenu = () => {
    setVisible(!visible);
  };

  return (
    <div className="navigation">
      <div>
        <img
          src="/images/whats_in_my_fridge.svg"
          alt="logo"
          className="navigation__image"
        />
      </div>
      <div className="navigation__buttons">
        <div className="navigation__tags">
          <button className="navigation__tag navigation__tag_active">
            Home
          </button>
          <button className="navigation__tag">Profile</button>
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
    </div>
  );
}

export default Navigation;
