import React, { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./Greeting.css";
function Greeting() {
  const currentUser = useContext(CurrentUserContext);
  return (
    <div className="greeting">
      <h2 className="greeting__title">Saved Recepies</h2>
      <p className="greeting__text">
        Hello {currentUser.name}, here are your saved recipes:
      </p>
    </div>
  );
}

export default Greeting;
