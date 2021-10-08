import { useState } from 'react';
import { useValidation } from './useValidation';

export const useInput = (initialValue, validators) => {
  const [value, setValue] = useState(initialValue);
  const [isFocused, setIsFocused] = useState(false);
  const isValid = useValidation(value, validators);

  const lengthError = isValid.minLengthError ? 'Некорректная длина' : null;
  const isEmptyError = isValid.isEmpty
    ? 'Это поле обязательное для заполнения'
    : null;
  const isEmailError = isValid.isEmail ? 'Неверный формат email' : null;
  const isEmailRegisteredError = isValid.isEmailRegistered
    ? null
    : 'Пользователь с таким email не зарегистрирован';

  const onChange = (e) => {
    setValue(e.target.value.trim());
  };

  const onBlur = () => {
    setIsFocused(true);
  };

  return {
    value: value.trim(),
    errors: {
      lengthError,
      isEmptyError,
      isEmailError,
      isEmailRegisteredError,
    },
    onChange,
    isFocused,
    onBlur,
    ...isValid,
  };
};
