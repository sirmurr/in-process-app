import React from "react";

export default function TaskAdmin({ match }) {
  const [newMembers, setNewMembers] = React.useState([]);

  React.useEffect(() => {
    fetch(`http://127.0.0.1:8081/users/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => setNewMembers(data.filter(user => user.isNewMember)))
      .catch(error => console.error('Error:', error));
  }, []);

  const handleStatusUpdate = (newMemberId, status) => {
    fetch(`http://127.0.0.1:8081/newmembers/${newMemberId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ status })
    })
      .then(response => response.json())
      .then(data => {
        const updatedNewMembers = newMembers.map(newMember => {
          if (newMember.id === newMemberId) {
            return { ...newMember, status };
          }
          return newMember;
        });
        setNewMembers(updatedNewMembers);
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <>
      <h1 className="Task-Admin-Screen">Task Admin Page</h1>
      <p>Select A Task admin thing to do Profile</p>
      <h2>New Members</h2>
      <ul>
        {newMembers.map(newMember => (
          <li key={newMember.id}>
            {newMember.MemberName} - Status: {newMember.status}
            <button onClick={() => handleStatusUpdate(newMember.id, 'completed')}>Complete</button>
          </li>
        ))}
      </ul>
    </>
  );
}
