import "./RecipeCard.css";

function RecipeCard({ item, onSelect }) {
  const handleCardClick = () => {
    onSelect(item.id);
  };
  return (
    <div className="item">
      <button className={`item__button`} type="button" />
      <img
        src={item.image}
        className="item__image"
        alt={item.title}
        onClick={handleCardClick}
      />
      <div className="item__texts">
        <div className="item__title" onClick={handleCardClick}>
          {item.title}
        </div>
        <div className="item__info">
          You have {item.usedIngredientCount} ingredient(s).
        </div>
        <div className="item__info">
          You are missing {item.missedIngredientCount} ingredient(s).
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
