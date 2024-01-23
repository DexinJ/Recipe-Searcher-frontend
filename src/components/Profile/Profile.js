import ProfileCard from "../ProfileCard/ProfileCard";
import { useContext, useEffect, useState } from "react";
import { CurrentSavedRecipeContext } from "../../contexts/CurrentSavedRecipeContext";
import { getRecipeBulk } from "../../utils/spoonacularAPI";
import Preloader from "../Preloader/Preloader";

function Profile({ onSelect, onRecipeSave }) {
  const itemList = useContext(CurrentSavedRecipeContext);
  const [isLoading, setIsLoading] = useState(true);
  const [recipeList, setRecipeList] = useState([]);

  useEffect(() => {
    getRecipeBulk(itemList.toString())
      .then((res) => {
        setRecipeList(res);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => setIsLoading(false));
  }, [itemList]);

  return (
    <div className="gallery" id="cardSection">
      {isLoading ? (
        <div className="main__loading">
          <Preloader />
        </div>
      ) : (
        <div className="main__result">
          <div className="gallery__gallery">
            {recipeList &&
              recipeList.map((item) => {
                return (
                  <ProfileCard
                    item={item}
                    key={item.id}
                    onSave={onRecipeSave}
                    onSelect={onSelect}
                  />
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
