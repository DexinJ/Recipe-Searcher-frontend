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
