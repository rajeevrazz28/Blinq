import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import './Main.css'


function Main() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();


  const removeUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:8000/api/users/${userId}`);
    
      setUsers(users.filter(user => user._id !== userId));
    } catch (error) {
      console.error('Failed to delete the user:', error);
    }
  };

  const redirectToLogin = () => {
    navigate('/'); 
  };

  useEffect(() => {
  
    const fetchUsers = async () => {
      const result = await axios('http://localhost:8000/api/users');
      setUsers(result.data);
    };

    fetchUsers();
  }, []);

  return (
    <div className="main-container">
      <h1>User List</h1>
      <ul className="user-list">
        {users.map((user) => (
          <li key={user._id} className="user-item">
            {user.username}
            <button onClick={() => removeUser(user._id)} className="remove-button">Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={redirectToLogin} className="back-button">Add User</button>
    </div>
  );
}


export default Main;