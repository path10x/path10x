import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const [errorMessage, setErrorMessage] = useState({});
const [isSubmitted, setIsSubmitted] = useState(false);

const invalidInput = {
  userName: 'invalid username',
  pass: 'invalid password'
};

const renderErrorMsg = name => 
  name === errorMessage.name && (
    <div className='error'>{errorMessage.name}</div>
  );



const displayForm = (
  <div className='form'>
    <form>
      <div className='input-container'>
        <label>Username</label>
        <input type='text' name='userName' required />
      </div>
      <div className='input-container'>
        <label>Password</label>
        <input type='password' name='pass' required />
      </div>
      <div className='button-container'>
        <input type='submit' />
      </div>
    </form>
  </div>
);


export default Login;