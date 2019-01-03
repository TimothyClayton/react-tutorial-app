import React from 'react'
import Square from '../Square/square'
import styled, { css } from 'styled-components'

const BoardRow = styled.div`
  &:after {
    clear: both;
    content: "";
    display: table;
  }
`
export default class Board extends React.Component {
  renderSquare(i) {
    let winners = this.props.winners

    return (
      <Square
        value = { this.props.squares[i] }
        onClick = { () => this.props.onClick(i) }
        winner = { winners && winners.includes(i) ? 'winner' : '' }
      />
    );
  }

  render() {
    return (
      <div>
        <BoardRow>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </BoardRow>
        <BoardRow>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </BoardRow>
        <BoardRow>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </BoardRow>
      </div>
    );
  }
}

