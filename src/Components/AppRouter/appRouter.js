import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Game from '../Game/game';
import Instructions from '../Instructions/instructions';
import PageNotFound from '../Errors/pageNotFound';
import TopNav from '../Navigation/topNav';

const AppRouter = () => (
  <Router>
    <div>
      <TopNav />
      <Switch>
        <Route path='/tic-tac-toe' exact component={ Game } />
        <Route path='/instructions' component={ Instructions } />
        <Route component={ PageNotFound } />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
