import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { EventContext } from '../context/EventContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const EventList = () => {
  const { events, fetchEvents } = useContext(EventContext);

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div className="bg-light py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow-lg">
              <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
                <h2 className="mb-0">Events</h2>
                <Link to="/events/new" className="btn btn-light btn-sm">Create New Event</Link>
              </div>
              <ul className="list-group list-group-flush">
                {events.map(event => (
                  <li key={event._id} className="list-group-item d-flex justify-content-between align-items-center">
                    <Link to={`/events/${event._id}`} className="text-decoration-none text-dark">{event.name}</Link>
                    <Link to={`/events/${event._id}`} className="badge bg-secondary rounded-pill">Details</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventList;
