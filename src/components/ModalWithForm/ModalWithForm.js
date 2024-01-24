import "./ModalWithForm.css";
import modalClose from "../../images/close.svg";

function ModalWithForm({
  title,
  children,
  buttonText,
  onClose,
  name,
  onSubmit,
  secondButton,
  secondButtonText,
  secondButtonLink,
  isLoading,
  isValid,
}) {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  const buttonClass = isValid
    ? "modal__button modal__text"
    : "modal__button modal__button_disabled modal__text";

  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__container">
        <button type="button" onClick={onClose} className="modal__close">
          <img src={modalClose} alt="close modal button" />
        </button>
        <h3 className="modal__text modal__heading">{title}</h3>
        <form onSubmit={handleFormSubmit} className="modal__form">
          {children}
          <div className="modal__button-div">
            <button className={buttonClass} type="submit" disabled={!isValid}>
              {isLoading ? (
                <div className="modal__button-loading" />
              ) : (
                buttonText
              )}
            </button>
            {secondButton && (
              <button
                className="modal__second-button"
                onClick={secondButtonLink}
                type="button"
              >
                {secondButtonText}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
export default ModalWithForm;
