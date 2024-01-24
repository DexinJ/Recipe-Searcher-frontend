import React, { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./Greeting.css";
import { CurrentSavedRecipeContext } from "../../contexts/CurrentSavedRecipeContext";
function Greeting() {
  const currentUser = useContext(CurrentUserContext);
  const itemList = useContext(CurrentSavedRecipeContext);
  return (
    <div className="greeting">
      <h2 className="greeting__title">Saved Recepies</h2>
      <p className="greeting__text">
        Hello {currentUser.name}, you have saved {itemList.length} recipes:
      </p>
    </div>
  );
}

export default Greeting;
