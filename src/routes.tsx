import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Register from './pages/Register';
import Board from './pages/Board';

const Routes: React.FC = () => {
  return(
      <BrowserRouter>
      <Switch>
          <Route path="/" exact component={Register}/>
          <Route path="/board" component={Board}/>
      </Switch>
      </BrowserRouter>
  );
}

export default Routes;