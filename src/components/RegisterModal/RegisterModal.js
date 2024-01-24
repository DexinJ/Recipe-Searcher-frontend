import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../hooks/useForms";

function RegisterModal({ onClose, onSubmit, onRedirect, isLoading }) {
  const { values, handleChange, isValid, resetForm, errors } = useForm({
    email: "",
    password: "",
    name: "",
  });

  const handleSubmit = () => {
    onSubmit({
      email: values.email,
      password: values.password,
      name: values.name,
    });
  };

  const handleClose = () => {
    onClose();
    resetForm();
  };

  return (
    <ModalWithForm
      title="Sign Up"
      onClose={handleClose}
      onSubmit={handleSubmit}
      buttonText="Register"
      secondButton={true}
      secondButtonText="or Login"
      secondButtonLink={onRedirect}
      isLoading={isLoading}
      isValid={isValid}
    >
      <label className="modal__field modal__text">
        Name*
        <input
          className="modal__input modal__text"
          name="name"
          type="text"
          minLength="1"
          maxLength="30"
          placeholder="Name"
          required
          value={values.name}
          onChange={handleChange}
        />
        <span className="modal__error" id="name-input-error">
          {errors.name}
        </span>
      </label>

      <label className="modal__field modal__text">
        Email*
        <input
          className="modal__input modal__text"
          name="email"
          type="email"
          placeholder="Email"
          required
          value={values.email}
          onChange={handleChange}
        />
        <span className="modal__error" id="email-input-error">
          {errors.email}
        </span>
      </label>

      <label className="modal__field modal__text">
        Password*
        <input
          className="modal__input modal__text"
          name="password"
          type="text"
          minLength="4"
          placeholder="Password"
          required
          value={values.password}
          onChange={handleChange}
        />
        <span className="modal__error" id="password-input-error">
          {errors.password}
        </span>
      </label>
    </ModalWithForm>
  );
}

export default RegisterModal;
