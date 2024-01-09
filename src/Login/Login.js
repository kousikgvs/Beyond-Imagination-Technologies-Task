import React, { useState } from 'react';
import './Login.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useData } from '../DataContext'; 

const Login = () => {
  const navigate = useNavigate();
  const { loginUser } = useData();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (username === 'username' && password === 'password') {
      toast.success('Logged in successfully!');
      const userData = { username, password };
      navigate("/dashboard")
      loginUser(userData);
    } else {
      toast.error('Invalid username or password!');
    }
  };

  return (
    <div className='signinpage'>
      <div className='container'>
        <div className='heading'>Sign In</div>
        <form onSubmit={handleFormSubmit} className='form'>
          <input
            required
            className='input'
            id='email'
            placeholder='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            required
            className='input'
            type='password'
            name='password'
            id='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input className='login-button' type='submit' value='Sign In' />
        </form>
        <span className='agreement'>
          <a>Learn user licence agreement</a>
        </span>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
