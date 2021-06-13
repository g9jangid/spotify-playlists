import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PlaylistCreator from 'pages/PlaylistCreator';
const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <PlaylistCreator />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
