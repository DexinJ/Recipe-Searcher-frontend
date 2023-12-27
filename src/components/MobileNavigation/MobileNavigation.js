import "./MobileNavigation.css";
function MobileNavigation({ onClick, show }) {
  const menuClass = show ? "mobile-navigation" : "mobile-navigation_off";
  return (
    <div className={menuClass}>
      <div className="mobile-navigation__menu">
        <div className="navigation">
          <div>
            <img
              src="/images/whats_in_my_fridge.svg"
              alt="logo"
              className="navigation__image"
            />
          </div>
          <button
            className="mobile-navigation__close"
            type="button"
            onClick={onClick}
          />
        </div>
        <button className="mobile-navigation__button">Home</button>
        <button className="mobile-navigation__button">Profile</button>
        <button className="mobile-navigation__button">Saved Recipe</button>
        <button className="mobile-navigation__button">Logout</button>
      </div>
    </div>
  );
}

export default MobileNavigation;
