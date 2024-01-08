import Preloader from "../Preloader/Preloader";
import "./RecipeModal.css";
import modalClose from "../../images/close.svg";

function RecipeModal({ content, onClose, isLoading }) {
  const PRICE = content.pricePerServing / 100;
  const handleBackGroundClick = (e) => {
    if (e.target.className === "modal") {
      onClose();
    }
  };

  return (
    <div className="modal" onClick={handleBackGroundClick}>
      <div className="modal__image-container">
        {isLoading ? (
          <Preloader />
        ) : (
          <div>
            <img
              src={content.image}
              alt={`${content.title} © ${content.sourceName}`}
              className="modal__image"
            />
            <p className="modal__small-text">
              Image source © {content.sourceName}
            </p>
            <h3 className="modal__title">{content.title}</h3>
            <div className=" modal__text-box">
              <p className="modal__text">${PRICE.toFixed(2)} per serving</p>
              <p className="modal__text">
                Ready in {content.readyInMinutes} minutes.
              </p>
              <p className="modal__text">
                Spoonacular score: {content.spoonacularScore.toFixed(2)}%
              </p>
            </div>
            <div className="modal__text-box">
              <a
                href={content.sourceUrl}
                className="modal__link"
                target="_blank"
                rel="noreferrer"
              >
                View in {content.sourceName}
              </a>
              <a
                href={content.spoonacularSourceUrl}
                className="modal__link"
                target="_blank"
                rel="noreferrer"
              >
                View in Spoonacular
              </a>
            </div>
          </div>
        )}
        <button type="button" onClick={onClose} className="modal__close">
          <img src={modalClose} alt="close modal button" />
        </button>
      </div>
    </div>
  );
}

export default RecipeModal;
