import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components'

const Nav = styled.nav`
  background: papayawhip;
`
export default class TopNav extends React.Component {

  render() {
    return (
      <Nav>
        <ul>
          <li>
            <Link to="/tic-tac-toe">Tic-Tac-Toe</Link>
          </li>
          <li>
            <Link to="/instructions">Instructions</Link>
          </li>
        </ul>
      </Nav>
    );
  }
}
