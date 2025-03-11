import React, { useState } from 'react';
import axios from 'axios';
import authService from './authService';
import './Login.css'; // Import the CSS file here

const Login = () => {
  localStorage.clear();
  const [data, setState] = useState({
    username: '',
    password: '',
    result: ''
  });

  const handleChange = event => {
    setState({
      ...data,
      [event.target.name]: event.target.value
    });
  };

  const validate = () => {
    authService.login(data.username, data.password).then(response => {
      localStorage.setItem('token', JSON.stringify(response));
      alert(response);
      alert('Result is ' + response);
    });
  };

  return (
    <div>
      <form className="login-form">
        <label htmlFor="username">User Name: </label>
        <input
          type="text"
          name="username"
          id="username"
          value={data.username}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          id="password"
          value={data.password}
          onChange={handleChange}
        />
        <br />
        <input
          type="button"
          value="Login"
          onClick={validate}
        />
      </form>
    </div>
  );
};

export default Login;
