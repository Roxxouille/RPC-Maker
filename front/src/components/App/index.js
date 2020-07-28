// == Import npm
import React, { useEffect } from 'react';


//
import Header from '../Layout/header';
import Footer from '../Layout/footer';
// == Import
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// == Composant
const App = () => {
  return (
    <div className="app">
      <Header />
      <Footer />
    </div>
  );
};
// == Export
export default App;
