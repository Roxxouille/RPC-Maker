import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import PropTypes from 'prop-types';
import Login from '../../containers/User/Login';
import './styles.scss';

const User = ({ isLogged }) => {
  const {path, url} = useRouteMatch;
  return (
    <div>
      {isLogged === true ? (
        <div>
          <div className="user-nav">
            <span>AVATAR</span>
            <Link to='/user/pc'>Mon PC</Link>
            <Link to='/user/infos'>mes informations</Link>
            <Link to='/user/message'>Messagerie</Link>
          </div>
            <Switch>
              <Route exact path='/user'>
                Bienvenue dans votre espace membre
              </Route>
              <Route path='/user/pc'>
                Votre pc
              </Route>
              <Route path='/user/infos'>
                votre infos
              </Route>
              <Route path='/user/message'>
                Vos messages
              </Route>
            </Switch>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

User.propTypes = {
  isLogged: PropTypes.bool.isRequired,
};

export default User;
