import React from 'react';
import Board from '../Board/board';
import styled, { css } from 'styled-components'

const GameWrapper = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:center;
  margin-top:var(--main-spacer);
`
const GameInfo = styled.div`
  margin-left:var(--main-spacer);
  width:140px;
  background:white;
  .status {
    background:#565080;
    text-align:center;
    color:white;
    padding:6px 0;
  }
  .moves-list {
    font-size:12px;
    list-style-type:none;
    padding:0;
    display:flex;
    flex-direction:column;
    align-items:center;
    li {
      width:80%;
      text-align:center;
    }
    li:not(:last-of-type) {
      margin-bottom:6px;
    }
  }
`

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return [squares[a], [a, b, c]];
    }
  }
  return null;
}

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true,
    }
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares,
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ? 'Go to move #' + move : 'New game';

      return (
        <li key={move}>
          <button className='button' onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = 'Winner: ' + winner[0];
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <GameWrapper>
        <div className='game-board'>
          <Board
            squares = {current.squares}
            onClick = {(i) => this.handleClick(i)}
            winners = { winner ? winner[1] : null }
          />
        </div>
        <GameInfo className='game-info'>
          <div className='status'>
            <div>{status}</div>
          </div>
          <div className='moves'>
            <ol className='moves-list'>{moves}</ol>
          </div>
        </GameInfo>
      </GameWrapper>
    );
  }
}
