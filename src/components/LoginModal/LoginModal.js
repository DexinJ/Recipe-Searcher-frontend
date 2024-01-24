import { useForm } from "../../hooks/useForms";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function LoginModal({ onClose, onSubmit, onRedirect, isLoading }) {
  const { values, handleChange, isValid, resetForm, errors } = useForm({
    email: "",
    password: "",
  });

  const handleSubmit = () => {
    onSubmit({ email: values.email, password: values.password });
  };

  const handleClose = () => {
    onClose();
    resetForm();
  };

  return (
    <ModalWithForm
      title="Login"
      onClose={handleClose}
      onSubmit={handleSubmit}
      buttonText="Login"
      secondButton={true}
      secondButtonText="or Register"
      secondButtonLink={onRedirect}
      isLoading={isLoading}
      isValid={isValid}
    >
      <label className="modal__field modal__text">
        Email
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
        Password
        <input
          className="modal__input modal__text"
          name="password"
          type="password"
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

export default LoginModal;
