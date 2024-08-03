import React, { useState, useEffect, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { EventContext } from '../context/EventContext';

const EventDetail = () => {
  const { id } = useParams();
  const history = useHistory();
  const { events, updateEvent, deleteEvent } = useContext(EventContext);
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const event = events.find(event => event._id === id);
    setEvent(event);
  }, [id, events]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    await updateEvent(id, event);
    history.push('/events');
  };

  const handleDelete = async () => {
    await deleteEvent(id);
    history.push('/events');
  };

  if (!event) return <div className="text-center">Loading...</div>;

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">
              <h2 className="text-center">Edit Event</h2>
            </div>
            <div className="card-body">
              <form onSubmit={handleUpdate}>
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    value={event.name}
                    onChange={(e) => setEvent({ ...event, name: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="date">Date:</label>
                  <input
                    type="date"
                    id="date"
                    className="form-control"
                    value={event.date}
                    onChange={(e) => setEvent({ ...event, date: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="location">Location:</label>
                  <input
                    type="text"
                    id="location"
                    className="form-control"
                    value={event.location}
                    onChange={(e) => setEvent({ ...event, location: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description:</label>
                  <textarea
                    id="description"
                    className="form-control"
                    rows="4"
                    value={event.description}
                    onChange={(e) => setEvent({ ...event, description: e.target.value })}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Update Event</button>
              </form>
              <button onClick={handleDelete} className="btn btn-danger btn-block mt-3">Delete Event</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
