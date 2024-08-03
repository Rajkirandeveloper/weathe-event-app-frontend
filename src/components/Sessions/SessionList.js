import React, { useEffect, useContext } from 'react';
import { SessionContext } from '../context/SessionContext';

const SessionList = () => {
  const { sessions, fetchSessions } = useContext(SessionContext);

  useEffect(() => {
    fetchSessions();
  }, []);

  return (
    <div>
      <h2>User Sessions</h2>
      <ul>
        {sessions.map(session => (
          <li key={session._id}>
            <p>Login Time: {new Date(session.loginTime).toLocaleString()}</p>
            <p>Logout Time: {session.logoutTime ? new Date(session.logoutTime).toLocaleString() : 'N/A'}</p>
            <p>IP Address: {session.ipAddress}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SessionList;
