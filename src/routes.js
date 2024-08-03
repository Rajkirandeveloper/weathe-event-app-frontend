import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import EventList from './components/Events/EventList';
import EventForm from './components/Events/EventForm';
import EventDetail from './components/Events/EventDetail';
import SessionList from './components/Sessions/SessionList';
import Weather from './components/Weather/Weather';
import PrivateRoute from './components/Layout/PrivateRoute';

const Routes = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <PrivateRoute path="/events/new" component={EventForm} />
      <PrivateRoute path="/events/:id" component={EventDetail} />
      <PrivateRoute path="/events" component={EventList} />
      <PrivateRoute path="/sessions" component={SessionList} />
      <PrivateRoute path="/weather" component={Weather} />
      <Route path="/" component={EventList} />
    </Switch>
  );
};

export default Routes;
