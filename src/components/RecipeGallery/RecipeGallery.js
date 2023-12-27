import "./RecipeGallery.css";
import RecipeCard from "../RecipeCard/RecipeCard";

function RecipeGallery({ itemList }) {
  return (
    <div className="gallery" id="cardSection">
      <div className="gallery__caption">Search results:</div>

      <div className="gallery__gallery">
        {itemList.map((item) => {
          return <RecipeCard item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
}

export default RecipeGallery;
