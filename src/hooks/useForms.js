import { useCallback, useState } from "react";

export function useForm(inputValues) {
  const [values, setValues] = useState(inputValues);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const { value, name, validationMessage } = target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: validationMessage });
    setIsValid(target.closest("form").checkValidity());
  };

  const resetForm = useCallback(() => {
    setValues(inputValues);
    setErrors({});
    setIsValid(false);
  }, [setValues, setErrors, setIsValid, inputValues]);

  return { values, errors, isValid, resetForm, handleChange };
}
