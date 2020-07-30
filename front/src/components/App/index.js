// == Import npm
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

//
import Header from '../../containers/Layout/header';
import Footer from '../Layout/footer';
// == Import
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// == Composant
const App = ({ autoLog, isLogged }) => {
  useEffect(() => {
    const slug = localStorage.getItem('slug');
    if (slug !== null && isLogged !== true) {
      console.log('localstorage:');
      autoLog();
    }
  });

  return (
    <div className="app">
      <Header />
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
