// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {Switch, Route} from 'react-router-dom';

//
import Header from '../../containers/Layout/header';
import Footer from '../Layout/footer';
// == Import
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from '../Home';
import User from 'src/containers/Account/User';
import Contact from 'src/containers/Contact';
import Survey from '../Survey';
import Login from 'src/containers/Account/Login';
import BackOffice from 'src/containers/Account/BackOffice';
import NoMatch from 'src/components/Layout/NoMatch';

// == Composant
const App = ({ autoLog, isLogged }) => {
  useEffect(() => {
    const slug = localStorage.getItem('slug');
    if (slug !== null && isLogged !== true) {
      autoLog();
    }
  });

  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/survey">
          <Survey />
        </Route>
        <Route path="/team">
          Team
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/user">
          <User />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/backoffice">
          <BackOffice />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

App.propTypes = {
  autoLog: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

// == Export
export default App;
