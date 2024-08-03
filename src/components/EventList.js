import React from 'react';
import axios from 'axios';

const EventList = ({ events, fetchEvents }) => {
    const handleDelete = async (id) => {
        try {
            await axios.delete(`/api/events/${id}`);
            fetchEvents();
        } catch (error) {
            console.error('Error deleting event:', error);
        }
    };

    return (
        <ul>
            {events.map(event => (
                <li key={event._id}>
                    <h3>{event.name}</h3>
                    <p>{event.date}</p>
                    <p>{event.location}</p>
                    <p>{event.description}</p>
                    <button onClick={() => handleDelete(event._id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default EventList;
