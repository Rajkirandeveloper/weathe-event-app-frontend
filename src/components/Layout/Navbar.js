import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const history = useHistory();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <Link className="navbar-brand font-weight-bold" to="/">
        Event Manager App
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link text-dark font-weight-bold" to="/">Home</Link>
          </li>
          {user ? (
            <>
              <li className="nav-item">
                <Link className="nav-link text-dark font-weight-bold" to="/events">Events</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark font-weight-bold" to="/sessions">Sessions</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark font-weight-bold" to="/weather">Weather</Link>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link className="nav-link text-dark font-weight-bold" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark font-weight-bold" to="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
