import React, { useState } from 'react';
import axios from 'axios';
import { signInWithGoogle } from '../firebase';
import './signup.css';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your sign-up logic here
    try {
        const response = await axios.post('http://localhost:8080/api/auth/signup', { username, email, phone, password });
        alert(response.data);
      } catch (error) {
        alert('Sign up failed!');
      }
  };

  const handleGoogleSignIn = async () => {
    signInWithGoogle()
      .then(async (user) => {
        const response = await axios.post('http://localhost:8080/api/auth/signup', {
          username: user.displayName,
          email: user.email,
          phone: '',  // or some default value
          password: '',  // or some default value
        });
        alert(response.data);
      })
      .catch((error) => {
        alert('Google sign up failed!');
      });
  };


  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Phone Number:
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button type="submit">Sign Up</button>
      <button type="button" onClick={handleGoogleSignIn}>Sign Up with Google</button>
    </form>
  );
};

export default SignUp;
