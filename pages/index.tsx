// pages/index.tsx

import React, { useState } from 'react';
import axios from 'axios';

const Home: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      const response = await axios.post('/api/auth', { action: 'signup', email, password });
      console.log(response.data.message);
    } catch (error) {
      console.error('Error occurred during signup:', error);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/auth', { action: 'login', email, password });
      console.log(response.data.message);
    } catch (error) {
      console.error('Error occurred during login:', error);
    }
  };

  return (
    <div>
      <h1>Welcome to TutorMe</h1>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignup}>Sign Up</button>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Home;
