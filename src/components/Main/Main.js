import { defaultRecipeItem } from "../../utils/constants";
import Preloader from "../Preloader/Preloader";
import RecipeGallery from "../RecipeGallery/RecipeGallery";
import "./Main.css";
function Main() {
  return (
    <main className="main">
      <RecipeGallery itemList={defaultRecipeItem} />
      <div className="main__loading">
        <Preloader />
        <p className="main__text">Searching...</p>
      </div>
    </main>
  );
}

export default Main;
