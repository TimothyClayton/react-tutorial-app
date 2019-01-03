import React from 'react'
import styled, { css } from 'styled-components'

const Rules = styled.div`
  margin: 12px;
  padding: 12px;
  background: white;
  ol {
   padding-left: 20px;
    li {
      margin-bottom: 6px;
    }
  }
`

export default class Instructions extends React.Component {
  render() {
    return (
      <Rules>
        <h2>RULES FOR TIC-TAC-TOE</h2>
        <ol>
          <li>
            The game is played on a grid that's 3 squares by 3 squares.
          </li>
          <li>
            You are X, your friend is O. Players take turns putting their marks in empty squares.
          </li>
          <li>
            The first player to get 3 of her marks in a row (up, down, across, or diagonally) is the winner.
          </li>
          <li>
            When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie.
          </li>
        </ol>
      </Rules>
    );
  }
}
