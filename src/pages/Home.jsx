import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/auth/me', { withCredentials: true });
        setUsername(res.data.username);
      } catch (err) {
        console.error("Not logged in or invalid token");
        setUsername('Guest');
      }
    };

    fetchUser();
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      {username && username !== 'Guest' ? (
        <h2>Welcome, {username} 👋</h2>
      ) : (
        <h2>Welcome, Guest 👤</h2>
      )}
    </div>
  );
};

export default Home;
