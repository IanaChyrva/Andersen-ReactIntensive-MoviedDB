import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { login } from '../../store/userAccountSlice';
import { useInput } from '../../hooks/useInput';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const LoginPage = () => {
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const history = useHistory();

  const emailInput = useInput('', {
    isEmpty: true,
    minLengthError: 5,
    isEmail: true,
    isEmailRegistered: users,
  });

  const passwordInput = useInput('', {
    isEmpty: true,
  });

  const onLoginChange = (e) => {
    emailInput.onChange(e);
  };

  const onPasswordChange = (e) => {
    passwordInput.onChange(e);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const currentUser = users.find(
      (user) =>
        user.email === emailInput.value && user.password === passwordInput.value
    );

    dispatch(login({ currentUser, isLoggedIn: true }));
    history.push('/');
  };

  const passwordCorrect = () => {
    console.log(emailInput.isEmailRegistered);
    if (emailInput.isEmailRegistered) {
      return users.some((user) => {
        return user.password === passwordInput.value;
      });
    }
  };

  return (
    <div>
      <Form onSubmit={handleLogin}>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          {emailInput.isFocused && emailInput.isEmpty && (
            <div style={{ color: 'red' }}>{emailInput.errors.isEmptyError}</div>
          )}
          {emailInput.isFocused && !emailInput.isEmailRegistered && (
            <div style={{ color: 'red' }}>
              {emailInput.errors.isEmailRegisteredError}
            </div>
          )}

          <Form.Control
            type='email'
            placeholder='Enter email'
            onChange={onLoginChange}
            onBlur={emailInput.onBlur}
            value={emailInput.value}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          {passwordInput.isFocused && passwordInput.isEmpty && (
            <div style={{ color: 'red' }}>
              {passwordInput.errors.isEmptyError}
            </div>
          )}
          {passwordInput.isFocused && !passwordCorrect() && (
            <div style={{ color: 'red' }}>Неверный пароль</div>
          )}
          <Form.Control
            type='password'
            placeholder='Password'
            onChange={onPasswordChange}
            onBlur={passwordInput.onBlur}
            value={passwordInput.value}
          />
        </Form.Group>

        <Button
          variant='primary'
          type='submit'
          disabled={!emailInput.isInputValid || !passwordCorrect()}
        >
          Login
        </Button>
      </Form>
    </div>
  );
};

export default LoginPage;
