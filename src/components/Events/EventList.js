import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { EventContext } from '../context/EventContext';

const EventList = () => {
  const { events, fetchEvents } = useContext(EventContext);

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">
              <h2 className="text-center">Events</h2>
              <Link to="/events/new" className="btn btn-primary btn-sm float-right">Create New Event</Link>
            </div>
            <ul className="list-group list-group-flush">
              {events.map(event => (
                <li key={event._id} className="list-group-item">
                  <Link to={`/events/${event._id}`}>{event.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventList;
