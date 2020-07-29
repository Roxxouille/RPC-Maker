import React from 'react';
import Login from '../../containers/User/Login';

const User = ({ isLogged }) => {
  return (
    <div>
      {isLogged === true ? (
        <h1>Espace membre</h1>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default User;
