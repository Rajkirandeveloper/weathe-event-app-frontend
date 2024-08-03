import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('/auth/user');
        setUser(response.data);
      } catch (error) {
        console.error('No user logged in');
      }
    };
    fetchUser();
  }, []);

  const login = async (username, password) => {
    const response = await axios.post('http://localhost:5000/auth/login', { username, password });
    setUser(response.data);
    const {token}=response.data
    console.log(response.data.token)
    localStorage.setItem('token', token);
  };

  const register = async (username, password) => {
    await axios.post('http://localhost:5000/auth/register', { username, password });
  };

  const logout = async () => {
    await axios.post('/auth/logout');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
