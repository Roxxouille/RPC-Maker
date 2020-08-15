// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

//
import Login from 'src/containers/Account/Login';
import Contact from 'src/containers/Contact';
import User from 'src/containers/Account/User';
import BackOffice from 'src/containers/Account/BackOffice';
import NoMatch from 'src/components/Layout/NoMatch';
import Header from '../../containers/Layout/header';
import Devis from 'src/containers/Devis';
import Footer from '../Layout/footer';
// == Import
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../Home';

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
      <div className="content-wrap">
        <Switch>
          <Route exact path="/">
            <Home />
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
          <Route path="/devis">
            <Devis />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </div>
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
