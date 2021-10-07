import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { login } from '../../store/userAccountSlice';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const LoginPage = () => {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  const history = useHistory();

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setloginPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    if (!loginEmail || !loginPassword) {
      console.log('Meh, fill all fields');
      return;
    }

    const currentUser = users.find(
      (user) => user.email === loginEmail && user.password === loginPassword
    );

    if (currentUser) {
      dispatch(login({ currentUser, isLoggedIn: true }));
      history.push('/');
    } else {
      console.log('Meh! Wrong data. Are you a hucker?');
    }
    console.log(users);
  };

  return (
    <div>
      <Form onSubmit={handleLogin}>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            onChange={(e) => setLoginEmail(e.target.value)}
            value={loginEmail}
          />
          <Form.Text className='text-muted'>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Password'
            onChange={(e) => setloginPassword(e.target.value)}
            value={loginPassword}
          />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Login
        </Button>
      </Form>
    </div>
  );
};

export default LoginPage;
