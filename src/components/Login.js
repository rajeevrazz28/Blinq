import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css'

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      
      const response = await axios.post(`http://localhost:8000/api/users`, { username, password });

      if (response.status === 200) {
        console.log('User added successfully:', response.data);
        
        setUsername('');
        setPassword('');
        
        navigate('/main'); 
      } else {
        
        console.error('Error adding user:', response.status);
      }
    } catch (error) {
     
      console.error('An error occurred:', error);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="login-input"
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
        </label>
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
}

export default Login;