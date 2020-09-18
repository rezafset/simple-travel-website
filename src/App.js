import React, { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import { Container } from 'react-bootstrap';
import Header from './components/Header/Header';
import Destination from './components/Destination/Destination';
import DestinationInfo from './components/DestinationInfo/DestinationInfo';
import DestinationDetails from './components/DestinationDetails/DestinationDetails';
import Login from './components/Login/Login';
import DestinationPlace from './components/DestinationPlace/DestinationPlace';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
          <Router>
            <Header></Header>
            <Switch>
              <Route path="/destination">
                <Destination></Destination>
              </Route>
              <Route path="/destinationInfo">
                  <DestinationInfo></DestinationInfo>
              </Route>
              <Route path="/destinationDetails/:destinationId">
                  <DestinationDetails></DestinationDetails>
              </Route>
              <PrivateRoute path="/destinationPlace/:destinationId">
                <DestinationPlace></DestinationPlace>
              </PrivateRoute>
              <Route path="/login">
                <Login></Login>
              </Route>
              <Route exact path="/">
                <Destination></Destination>
              </Route>
            </Switch>
          </Router>
      </UserContext.Provider>
  );
}

export default App;
