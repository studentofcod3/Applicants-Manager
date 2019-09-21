import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Alerts from "./components/layout/Alerts";

import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/routing/PrivateRoute";

import ContactState from "./context/contact/ContactState";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";

import setAuthToken from "./utils/setAuthToken";

import styled from "styled-components";
import "./App.scss";

import water from "./img/water.jpg";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const Container = styled.div`
  height: 100%;

  .container {
    background: url(${water});
    background-position: bottom;
    background-size: cover;
    min-height: 100vh;
    width: auto;
    padding: 2rem 0 8rem 0;
  }
`;

function App() {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <Fragment>
              <Navbar />
              <Container>
                <div className='container'>
                  <Alerts />
                  <Switch>
                    <PrivateRoute exact path='/' component={Home} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/register' component={Register} />
                    <Route exact path='/login' component={Login} />
                  </Switch>
                </div>
              </Container>
            </Fragment>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  );
}

export default App;
