import { useContext } from "react";
import "./RecipeCard.css";
import { CurrentSavedRecipeContext } from "../../contexts/CurrentSavedRecipeContext";

function RecipeCard({ item, onSelect, onSave, isLoggedIn, onRegister }) {
  const itemList = useContext(CurrentSavedRecipeContext);
  const handleCardClick = () => {
    onSelect(item.id);
  };

  const buttonClass = itemList.includes(item.id)
    ? "item__button_active"
    : "item__button";

  const handleCardSave = () => {
    onSave({ id: item.id, isSaved: itemList.includes(item.id) });
  };
  return (
    <div className="item">
      <button
        className={buttonClass}
        type="button"
        onClick={isLoggedIn ? handleCardSave : onRegister}
      />

      <img
        src={item.image}
        className="item__image"
        alt={item.title}
        onClick={handleCardClick}
      />
      <div className="item__texts">
        <h3 className="item__title" onClick={handleCardClick}>
          {item.title}
        </h3>
        <p className="item__info">
          You have {item.usedIngredientCount} ingredient(s).
        </p>
        <p className="item__info">
          You are missing {item.missedIngredientCount} ingredient(s).
        </p>
      </div>
    </div>
  );
}

export default RecipeCard;
