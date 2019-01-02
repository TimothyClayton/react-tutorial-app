import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Game from '../Game/game'
import Instructions from '../Instructions/instructions'

const AppRouter = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/tic-tac-toe">Tic-Tac-Toe</Link>
          </li>
          <li>
            <Link to="/instructions/">Instructions</Link>
          </li>
        </ul>
      </nav>

      <Route path='/tic-tac-toe/' exact component={ Game } />
      <Route path='/instructions/' component={ Instructions } />
    </div>
  </Router>
);

export default AppRouter;
