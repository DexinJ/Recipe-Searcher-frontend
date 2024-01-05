import "./App.css";
import "../../vendor/fonts.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { getRecipe, getRecipeInfo } from "../../utils/spoonacularAPI";
import { useEffect, useRef, useState } from "react";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import RecipeModal from "../RecipieModal/RecipeModal";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isCardLoading, setIsCardLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [currentRecipe, setCurrentRecipe] = useState({});
  const [activeModal, setActiveModal] = useState("");
  const mainRef = useRef();

  const handleRecipeSearch = (indigrients) => {
    setIsLoading(true);
    mainRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    getRecipe(indigrients)
      .then((res) => {
        setRecipeList(res);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleSelectedRecipe = (id) => {
    setIsCardLoading(true);
    handleActiveModal("recipe");
    getRecipeInfo(id)
      .then((res) => {
        setCurrentRecipe(res);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsCardLoading(false);
      });
  };

  const handleActiveModal = (ident) => {
    setActiveModal(ident);
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  useEffect(() => {
    if (!activeModal) return;

    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]);

  return (
    <div className="page">
      <Header onSearch={handleRecipeSearch} />
      <Route exact path="/">
        <Main
          items={recipeList}
          isLoading={isLoading}
          mainRef={mainRef}
          onSelect={handleSelectedRecipe}
        />
      </Route>
      <Route path="/saved"></Route>
      <Footer />
      {activeModal === "recipe" && (
        <RecipeModal
          content={currentRecipe}
          onClose={handleCloseModal}
          isLoading={isCardLoading}
        />
      )}
    </div>
  );
}

export default App;
