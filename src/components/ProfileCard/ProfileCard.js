import { useContext } from "react";
import { CurrentSavedRecipeContext } from "../../contexts/CurrentSavedRecipeContext";

function ProfileCard({ item, onSelect, onSave }) {
  const itemList = useContext(CurrentSavedRecipeContext);
  const id = item.id;
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
      <button className={buttonClass} type="button" onClick={handleCardSave} />
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
      </div>
    </div>
  );
}
export default ProfileCard;
