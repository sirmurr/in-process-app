import React from "react";

function Login() {
  fetch('http://127.0.0.1:8081/users', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => console.log('Success:', data))
    .catch(error => console.error('Error:', error));

  return (
    <>
      <h1 className="Login-Screen">Login Splash Page</h1>
      <p>Select A User Profile</p>
      {data && data.map(user => <p key={user.id}>{user.MemberName}</p>)}

    </>
  );
}

export default Login;
