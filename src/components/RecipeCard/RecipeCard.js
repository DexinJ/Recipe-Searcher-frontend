import "./RecipeCard.css";

function RecipeCard({ item }) {
  return (
    <div className="item">
      <button className={`item__button`} type="button" />
      <img src={item.image} className="item__image" alt={item.title} />
      <div className="item__texts">
        <div className="item__title">{item.title}</div>
        <div className="item__info">
          You have {item.usedIngredientCount} ingredient(s).
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
