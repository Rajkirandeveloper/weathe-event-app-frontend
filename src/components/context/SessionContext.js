import React, { createContext, useState } from 'react';
import axios from 'axios';

export const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const [sessions, setSessions] = useState([]);

  const fetchSessions = async () => {
    const token = localStorage.getItem('token');
    const response = await axios.get('https://events-app-beckend-1.onrender.com/sessions',{
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
