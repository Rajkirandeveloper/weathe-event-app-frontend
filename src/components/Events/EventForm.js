import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { EventContext } from '../context/EventContext';

const EventForm = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const { createEvent } = useContext(EventContext);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createEvent({ name, date, location, description });
    history.push('/events');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Event</h2>
      <label>Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      <label>Date:</label>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      <label>Location:</label>
      <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />
      <label>Description:</label>
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
      <button type="submit">Create Event</button>
    </form>
  );
};

export default EventForm;
