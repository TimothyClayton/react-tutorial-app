import React from 'react';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components'

const Nav = styled.nav`
  background: #44786B;
  display: flex;
  padding-left: 12px;
`
const NavList = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
`
const NavListItem = styled.li`
  display: inline-block;
  height: var(--main-spacer);
  line-height: var(--main-spacer);
  &:not(:last-of-type) {
    margin-right: 12px;
  }
`
const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  display: block;
  height: 100%;
  padding: 0 6px;
  &.active {
    background: #668F84;
  }
`

export default class TopNav extends React.Component {

  render() {
    return (
      <Nav>
        <NavList>
          <NavListItem className="nav-list-item">
            <StyledNavLink exact to="/">Tic-Tac-Toe</StyledNavLink>
          </NavListItem>
          <NavListItem className="nav-list-item">
            <StyledNavLink to="/instructions">Instructions</StyledNavLink>
          </NavListItem>
        </NavList>
      </Nav>
    );
  }
}
