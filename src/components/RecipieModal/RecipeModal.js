import Preloader from "../Preloader/Preloader";
import "./RecipeModal.css";

function RecipeModal({ content, onClose, isLoading }) {
  const price = content.pricePerServing / 100;
  return (
    <div className="modal">
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
            <div className="modal__small-text">
              Image source © {content.sourceName}
            </div>
            <div className="modal__title">{content.title}</div>
            <div className=" modal__text-box">
              <div className="modal__text">${price.toFixed(2)} per serving</div>
              <div className="modal__text">
                Ready in {content.readyInMinutes} minutes.
              </div>
              <div className="modal__text">
                Spoonacular score: {content.spoonacularScore.toFixed(2)}%
              </div>
            </div>
            <div className="modal__text-box">
              <a
                href={content.sourceUrl}
                className="modal__link"
                target="_blank"
              >
                View in {content.sourceName}
              </a>
              <a
                href={content.spoonacularSourceUrl}
                className="modal__link"
                target="_blank"
              >
                View in Spoonacular
              </a>
            </div>
          </div>
        )}
        <button
          type="button"
          onClick={onClose}
          className="modal__close modal__white"
        >
          <img src="/images/Close.svg" alt="close modal button" />
        </button>
      </div>
    </div>
  );
}

export default RecipeModal;
