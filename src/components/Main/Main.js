import Preloader from "../Preloader/Preloader";
import RecipeGallery from "../RecipeGallery/RecipeGallery";
import "./Main.css";
function Main({ items, isLoading, mainRef, onSelect }) {
  return (
    <main className="main" ref={mainRef}>
      {isLoading ? (
        <div className="main__loading">
          <Preloader />
          <p className="main__text">Searching...</p>
        </div>
      ) : (
        items.length !== 0 && (
          <div className="main__result">
            <RecipeGallery itemList={items} onSelect={onSelect} />
          </div>
        )
      )}
    </main>
  );
}

export default Main;
