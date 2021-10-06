import React, { useState, useEffect } from 'react';
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
      initName: '',
      initLastname: '',
      initEmail: '',
      initPassword: '',
    };
  }
  return JSON.stringify(storeData);
};

const RegistrationForm = () => {
  const { initName, initLastname, initEmail, initPassword } = getUserData();

  const [name, setName] = useState(initName);
  const [lastname, setLastname] = useState(initLastname);
  const [email, setEmail] = useState(initEmail);
  const [password, setPassword] = useState(initPassword);

  const onSignUp = (e) => {
    e.preventDefault();

    if (!name || !lastname || !email || !password) {
      console.log('Check for inputs fill');
      return;
    } else {
      localStorage.setItem(
        'sign-up-info',
        JSON.stringify({ name, lastname, email, password })
      );
    }
  };

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onLastnameChange = (e) => {
    setLastname(e.target.value);
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
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
                value={name}
                onChange={onNameChange}
              />
            </Col>
            <Col>
              <Form.Label>Lastname</Form.Label>
              <Form.Control
                placeholder='Last name'
                onChange={onLastnameChange}
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
            onChange={onEmailChange}
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
            onChange={onPasswordChange}
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
