import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Attendance = () => {
  const [users, setUsers] = useState([]);
  const [attendance, setAttendance] = useState([]);

  // Function to fetch user data from backend
  const fetchUserData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/users');
      setUsers(response.data); // Assuming response.data is an array of users
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const handleSubmit = async () => {};
  // Simulate componentDidMount using useEffect
  useEffect(() => {
    setTimeout(() => {
      fetchUserData();
    }, 2000); // Fetch data after 2 seconds
  }, []); // Empty dependency array ensures this effect runs once

  return (
    <div>
      <h1>Attendance</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {attendance[user.id] ? 'Present' : 'Absent'}
            <input
              type="checkbox"
              checked={attendance[user.id]}
              onChange={(e) =>
                setAttendance({
                  ...attendance,
                  [user.id]: e.target.checked,
                })
              }
            />
          </li>
        ))}
      </ul>
      <button onClick={handleSubmit}>Submit Attendance</button>
    </div>
  );
};

export default Attendance;
