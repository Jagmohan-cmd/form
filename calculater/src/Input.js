import React, { useState } from 'react';
import "./Input.css"

const Input = () => {
  // State variables for input values
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // State variables for input validation
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email
    if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      setEmailError('Invalid email format');
    } else {
      setEmailError('');
    }

    // Validate password
    if (password.length < 7) {
      setPasswordError('Password must be at least 8 characters long');
    } else {
      setPasswordError('');
    }

    // Validate confirm password
    if (password === confirmPassword) {
      setConfirmPasswordError('');
    } else {
      setConfirmPasswordError('Passwords do not match');
    }

    // Check if all inputs are valid
    if (
      emailError === '' &&
      passwordError === '' &&
      confirmPasswordError === ''
    ) {
      alert('Form submitted successfully');
    } else {
      alert('Can\'t submit the form');
    }
  };

  const OnchangeEmail = (e) => {
    setEmail(e.target.value)
    // Validate email
    if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      setEmailError('Invalid email format');
    } else {
      setEmailError('');
    }
  };

  const OnchangePassword = (e) => {
    setPassword(e.target.value)
    // Validate password
    if (password.length < 7) {
      setPasswordError('Password must be at least 8 characters long');
    } else {
      setPasswordError('');
    }

  };

  const onChangeSetConfirmPassword = (e) => {
    setConfirmPassword(e.target.value)
    // Validate confirm password
    if (e.target.value === password) {
      setConfirmPasswordError('');

    } else {
      setConfirmPasswordError('Passwords do not match');
    }
  }



  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <div className='form-input'>
          <div>
            <label>Email:</label>
            <br />
            <input
              type="email"
              value={email}
              onChange={OnchangeEmail}
              style={{ border: emailError ? '2px solid red' : '2px solid green', outline: "none" }}
            />
            {emailError && <p>{emailError}</p>}
          </div>
          <div>
            <label>Password:</label>
            <br />
            <input
              type="password"
              value={password}
              onChange={OnchangePassword}
              style={{ border: passwordError ? '2px solid red' : '2px solid green', outline: "none" }}
            />
            {passwordError && <p>{passwordError}</p>}
          </div>
          <div>
            <label>Confirm Password:</label>
            <br />
            <input
              type="password"
              value={confirmPassword}
              onChange={onChangeSetConfirmPassword}
              style={{ border: confirmPasswordError ? '2px solid red' : '2px solid green', outline: "none" }}
            />
            {confirmPasswordError && <p>{confirmPasswordError}</p>}
          </div>
          </div>
          <button className='button' type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Input;
