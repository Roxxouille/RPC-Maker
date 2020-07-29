// == Import npm
import React, { useEffect } from 'react';

//
import Header from '../../containers/Layout/header';
import Footer from '../Layout/footer';
// == Import
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// == Composant
const App = ({ autoLog }) => {
  useEffect(() => {
    autoLog();
  });

  return (
    <div className="app">
      <Header />
      <Footer />
    </div>
  );
};
// == Export
export default App;
