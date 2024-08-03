import React, { useEffect, useContext } from 'react';
import { SessionContext } from '../context/SessionContext';

const SessionList = () => {
  const { sessions, fetchSessions } = useContext(SessionContext);

  useEffect(() => {
    fetchSessions();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">User Sessions</h2>
      <div className="list-group">
        {sessions.map(session => (
          <div className="list-group-item" key={session._id}>
            <h5 className="mb-1">Session ID: {session._id}</h5>
            <p className="mb-1"><strong>Login Time:</strong> {new Date(session.loginTime).toLocaleString()}</p>
            <p className="mb-1"><strong>Logout Time:</strong> {session.logoutTime ? new Date(session.logoutTime).toLocaleString() : 'N/A'}</p>
            <p className="mb-1"><strong>IP Address:</strong> {session.ipAddress}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SessionList;
