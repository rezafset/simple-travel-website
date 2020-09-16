import React from 'react';
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
import SignUp from './components/SignUp/SignUp';
import DestinationPlace from './components/DestinationPlace/DestinationPlace';

function App() {
  return (
      <Container>
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
            <Route path="/destinationPlace/:destinationId">
              <DestinationPlace></DestinationPlace>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <SignUp></SignUp>
            </Route>
            <Route exact path="/">
              <Destination></Destination>
            </Route>
          </Switch>
        </Router>
      </Container>

  );
}

export default App;
