import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://127.0.0.1:8081/users', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error:', error));
  }, []);

  const handleLogin = () => {
    console.log('Selected User ID:', selectedUserId); // Debugging step
    const selectedUser = users.find(user => user.id.toString() === selectedUserId);

    if (selectedUser) {
      console.log('Selected User:', selectedUser); // Debugging step
      if (selectedUser.isAdmin) {
        navigate('/appadmin');
      } else if (selectedUser.isTaskAdmin) {
        navigate(`/taskadmin/${selectedUser.id}`);
      } else if (selectedUser.isLeadership) {
        navigate('/leadership');
      } else {
        navigate(`/newmember/${selectedUser.id}`);
      }
    } else {
      console.error('User not found');
    }
  };

  return (
    <>
      <h1 className="Login-Screen">Login Splash Page</h1>
      <p>Select A User Profile</p>
      <select value={selectedUserId} onChange={(e) => setSelectedUserId(e.target.value)}>
        <option value="">Select User</option>
        {users.map(user => (
          <option key={user.id} value={user.id}>
            {user.MemberName}
          </option>
        ))}
      </select>
      <button onClick={handleLogin}>Login</button>
    </>
  );
}

export default Login;
