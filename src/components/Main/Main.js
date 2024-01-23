import { Route } from "react-router-dom/cjs/react-router-dom.min";
import Preloader from "../Preloader/Preloader";
import RecipeGallery from "../RecipeGallery/RecipeGallery";
import "./Main.css";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Profile from "../Profile/Profile";
function Main({
  items,
  isLoading,
  mainRef,
  onSelect,
  isLoggedIn,
  onRecipeSave,
}) {
  return (
    <main className="main" ref={mainRef}>
      <Route exact path="/">
        {isLoading ? (
          <div className="main__loading">
            <Preloader />
            <p className="main__text">Searching...</p>
          </div>
        ) : (
          items.length !== 0 && (
            <div className="main__result">
              <RecipeGallery
                itemList={items}
                onSelect={onSelect}
                onRecipeSave={onRecipeSave}
              />
            </div>
          )
        )}
      </Route>
      <ProtectedRoute isLoggedIn={isLoggedIn} path="/profile">
        <Profile onRecipeSave={onRecipeSave} onSelect={onSelect} />
      </ProtectedRoute>
    </main>
  );
}

export default Main;
