import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const LoginPage = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setloginPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const savedEmail = JSON.parse(localStorage.getItem('sign-up-info')).email;
    const savedPassword = JSON.parse(
      localStorage.getItem('sign-up-info')
    ).password;
    if (!savedEmail || !savedPassword) return;
    if (savedEmail === loginEmail && savedPassword === loginPassword) {
      console.log('yeeee');
      return;
    }
    console.log('Wrongs data, please try again');
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
