import React from 'react'
import styled, { css } from 'styled-components'

const Button = styled.button`
  background: #fff;
  border: 1px solid #999;
  float: left;
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;
  height: 34px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
  width: 34px;

  &:focus {
    outline: none;
  }
  ${props => (props.winner == 'winner') && css`
    color: green;
  `}
`

export default function Square(props) {
  return (
    <Button className="square" onClick={props.onClick} winner={props.winner} >
      { props.value }
    </Button>
  );
}

