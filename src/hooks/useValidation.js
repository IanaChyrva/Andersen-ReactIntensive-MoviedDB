import { useEffect, useState } from 'react';

export const useValidation = (value, validators) => {
  const [isEmpty, setIsEmpty] = useState(true);
  const [minLengthError, setMinLengthError] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isInputValid, setIsInputValid] = useState(false);
  const [isEmailRegistered, setIsEmailRegistered] = useState(false);

  useEffect(() => {
    for (const validator in validators) {
      switch (validator) {
        case 'isEmpty':
          setIsEmpty(!value);
          break;
        case 'minLengthError':
          setMinLengthError(value.length < validators[validator]);
          break;
        case 'isEmail':
          const emailCheck =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          setIsEmail(!emailCheck.test(String(value).toLowerCase()));
          break;
        case 'isEmailRegistered':
          const emailExists = validators[validator].some(
            (element) => value === element.email
          );
          setIsEmailRegistered(emailExists);
          break;
        default:
          break;
      }
    }
  }, [value, validators]);

  useEffect(() => {
    setIsInputValid(isEmpty || minLengthError || isEmail || isEmailRegistered);
  }, [isEmpty, minLengthError, isEmail, isInputValid, isEmailRegistered]);

  return {
    isEmpty,
    minLengthError,
    isEmail,
    isInputValid,
    isEmailRegistered,
  };
};
