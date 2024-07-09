import React, { useState, useNavigate } from 'react';


function Login() {
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    fetch('http://127.0.0.1:8081/users', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        setUsers(data);
      })
      .catch(error => console.error('Error:', error));
    if (users.isAdmin) {
      navigate('/appadmin');
    } else if (users.isTaskAdmin) {
      setUserId(users.id);
      navigate('/taskadmin/:id');
    } else if (users.isLeadership) {
      navigate('/leadership');
    } else {
      setUserId(users.id);
      navigate('/newmember/:id');
    }
  }

  return (
    <>
      <h1 className="Login-Screen">Login Splash Page</h1>
      <p>Select A User Profile</p>
      <select onClick={handleLogin} value={users && users.map(user => <p id="users" key={user.id}>  <img src='https://static.thenounproject.com/png/3874124-200.png' alt='user' /> {user.MemberName}</p>)} onChange={(e) => setUserId(e.target.value)}>
      </select>
    </>
  );
}

export default Login;
