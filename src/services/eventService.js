import axios from 'axios';

export const fetchEvents = () => axios.get('/events');
export const createEvent = (eventData) => axios.post('/events', eventData);
export const updateEvent = (id, eventData) => axios.put(`/events/${id}`, eventData);
export const deleteEvent = (id) => axios.delete(`/events/${id}`);
