import React, { useState } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './RegistrationForm.module.css';
import LoginPage from '../login-page/LoginPage';

const getUserData = () => {
  const storeData = localStorage.getItem('sign - up - info');
  if (!storeData) {
    return {
      name: '',
      lastname: '',
      email: '',
      password: '',
    };
  }
  return JSON.stringify(storeData);
};

const RegistrationForm = () => {
  const [name, setName] = useState(getUserData().name);
  const [lastname, setLastname] = useState(getUserData().lastname);
  const [email, setEmail] = useState(getUserData().email);
  const [password, setPassword] = useState(getUserData().password);

  localStorage.setItem(
    'sign-up-info',
    JSON.stringify({ name, lastname, email, password })
  );
  const onSignUp = (e) => {
    e.preventDefault();

    if (!name || !lastname || !email || !password) {
    } else {
      localStorage.setItem(
        'sign-up-info',
        JSON.stringify({ name, lastname, email, password })
      );
    }
  };

  return (
    <div>
      <Form onSubmit={onSignUp}>
        <Form.Group className='mb-3'>
          <Row>
            <Col>
              <Form.Label>Name</Form.Label>
              <Form.Control
                placeholder='First name'
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </Col>
            <Col>
              <Form.Label>Lastname</Form.Label>
              <Form.Control
                placeholder='Last name'
                onChange={(e) => setLastname(e.target.value)}
                value={lastname}
              />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
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
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Sign Up
        </Button>

        <div>
          <Form.Text className='text-muted'>
            <div>Registered alredy?</div>
            <div>
              Go to the{' '}
              {
                <NavLink
                  to='/login'
                  className={styles.item}
                  activeClassName={styles.selected}
                >
                  Login
                </NavLink>
              }{' '}
              page
            </div>
            <Switch>
              <Route path='/login'>
                <LoginPage />
              </Route>
            </Switch>
          </Form.Text>
        </div>
      </Form>
    </div>
  );
};

// ToDo
// To add authentication redirection to login page
// Add verification for form
// Add visual message to user, if something is missing and data is wrong
// Add styling for navigation (hide or show depending on user login info)

export default RegistrationForm;
