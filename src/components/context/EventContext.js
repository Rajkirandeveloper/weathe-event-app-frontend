import React, { createContext, useState } from 'react';
import axios from 'axios';

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.get('https://events-app-beckend-1.onrender.com/events', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching events', error);
    }
  };
  

  const createEvent = async (eventData) => {
    const token = localStorage.getItem('token');
    const response = await axios.post('https://events-app-beckend-1.onrender.com/events', eventData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setEvents((prevEvents) => [...prevEvents, response.data]);
  };
  

  const updateEvent = async (id, eventData) => {
    const token = localStorage.getItem('token');
    const response = await axios.put(`https://events-app-beckend-1.onrender.com/events/${id}`, eventData, {
      headers: {
        Authorization: `Bearer ${token}`,
      }});
    setEvents(events.map(event => (event._id === id ? response.data : event)));
  };

  const deleteEvent = async (id) => {
    const token = localStorage.getItem('token');
    await axios.delete(`https://events-app-beckend-1.onrender.com/events/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }});
    setEvents(events.filter(event => event._id !== id));
  };

  return (
    <EventContext.Provider value={{ events, fetchEvents, createEvent, updateEvent, deleteEvent }}>
      {children}
    </EventContext.Provider>
  );
};
