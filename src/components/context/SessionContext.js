import React, { createContext, useState } from 'react';
import axios from 'axios';

export const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const [sessions, setSessions] = useState([]);

  const fetchSessions = async () => {
    const token = localStorage.getItem('token');
    const response = await axios.get('http://localhost:5000/sessions',{
      headers: {
        Authorization: `Bearer ${token}`,
      }});
    setSessions(response.data);
  };

  return (
    <SessionContext.Provider value={{ sessions, fetchSessions }}>
      {children}
    </SessionContext.Provider>
  );
};
