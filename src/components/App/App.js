import "./App.css";
import "../../vendor/fonts.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { getRecipe, getRecipeInfo } from "../../utils/spoonacularAPI";
import { useEffect, useRef, useState } from "react";
import RecipeModal from "../RecipieModal/RecipeModal";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import { getCollection, popRecipe, storeRecipe } from "../../utils/api";
import { authorizeToken, signin, signout, signup } from "../../utils/auth";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { CurrentSavedRecipeContext } from "../../contexts/CurrentSavedRecipeContext";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isCardLoading, setIsCardLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [currentRecipe, setCurrentRecipe] = useState({});
  const [activeModal, setActiveModal] = useState("");
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [itemList, setItemList] = useState([]);

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

  const handleLogin = ({ email, password }) => {
    setIsCardLoading(true);
    signin({ email, password })
      .then((res) => {
        setCurrentUser(res);
        setIsLoggedIn(true);
      })
      .then(() => handleCloseModal())
      .catch((err) => console.error(err))
      .finally(() => setIsCardLoading(false));
  };

  const handleLogOut = () => {
    signout()
      .then(() => {
        setCurrentUser({});
        setIsLoggedIn(false);
      })
      .catch((err) => console.error(err));
  };

  const handleRegister = ({ email, password, name }) => {
    setIsCardLoading(true);
    signup({ email, password, name })
      .then((res) => {
        setCurrentUser(res);
        handleLogin({ email, password });
      })
      .then(() => handleCloseModal())
      .catch((err) => console.error(err))
      .finally(() => setIsCardLoading(false));
  };

  const handleRecipeSave = ({ id, isSaved }) => {
    isSaved
      ? popRecipe(id)
          .then((res) => {
            setItemList(res);
          })
          .catch((err) => console.error(err))
      : storeRecipe(id)
          .then((res) => {
            setItemList(res);
          })
          .catch((err) => console.error(err));
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

  useEffect(() => {
    authorizeToken()
      .then((res) => {
        setCurrentUser(res);
        setIsLoggedIn(true);
        getCollection().then((res) => {
          setItemList(res);
        });
      })
      .catch((err) => console.error("Invalid token: ", err));
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <CurrentSavedRecipeContext.Provider value={itemList}>
          <Header
            onSearch={handleRecipeSearch}
            isLoggedIn={isLoggedIn}
            onLogout={handleLogOut}
            onSignIn={() => {
              handleActiveModal("login");
            }}
            onRegister={() => {
              handleActiveModal("register");
            }}
          />
          <Main
            items={recipeList}
            isLoading={isLoading}
            mainRef={mainRef}
            onSelect={handleSelectedRecipe}
            isLoggedIn={isLoggedIn}
            onRecipeSave={handleRecipeSave}
            onRegister={() => {
              handleActiveModal("register");
            }}
          />
        </CurrentSavedRecipeContext.Provider>
        <Footer main={mainRef} />
        {activeModal === "recipe" && (
          <RecipeModal
            content={currentRecipe}
            onClose={handleCloseModal}
            isLoading={isCardLoading}
          />
        )}
        {activeModal === "login" && (
          <LoginModal
            onClose={handleCloseModal}
            onSubmit={handleLogin}
            onRedirect={() => {
              handleActiveModal("register");
            }}
            isLoading={isCardLoading}
          />
        )}
        {activeModal === "register" && (
          <RegisterModal
            onClose={handleCloseModal}
            onSubmit={handleRegister}
            onRedirect={() => {
              handleActiveModal("login");
            }}
            isLoading={isCardLoading}
          />
        )}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
