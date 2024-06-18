import React, { useEffect, useState } from 'react'
import './tic-tac.css'

// Square component for each cell in the game board
function Square({ value, onClick }) {
  return <button onClick={onClick} className='square'>
    {value}
  </button>
}

// Main Tic Tac Toe component
export default function TicTacToe() {
  // State variables for game state
  const [squares, setSquares] = useState(Array(9).fill('')) // Game board squares
  const [isX, setIsX] = useState(true) // Current player
  const [status, setStatus] = useState() // Game status

  // Function to handle a square click
  const handleClick = (getCurrentSquare) => {
    let cpySquares = [...squares] // Create a copy of the squares array
    // Check if the game is over or the square is already filled
    if (getWinner(cpySquares) || cpySquares[getCurrentSquare]) return;

    // Update the square with the current player's symbol
    cpySquares[getCurrentSquare] = isX ? 'X' : 'O'
    setIsX(!isX) // Switch the current player
    setSquares(cpySquares) // Update the squares array
  }

  // Function to check for a winner
  function getWinner(square) {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7]
    ]
    // Check each winning pattern
    for (let i = 0; i < winningPatterns.length; i++) {
      const [x, y, z] = winningPatterns[i];
      // If all squares in the pattern have the same symbol, return the symbol
      if (square[x] && square[x] === square[y] && square[x] === square[z]) {
        return square[x];
      }
    }
    // If no winner is found, return an empty string
    return '';
  }

  // Effect hook to update the game status after each move
  useEffect(() => {
    const winner = getWinner(squares);
    if (winner) {
      setStatus(`Winner is ${winner}`); // Update the status with the winner's symbol
    } else if (!winner && squares.every((item) => item !== '')) {
      setStatus('This is a draw! Please restart.'); // Update the status for a draw
    } else {
      setStatus(`Next player is ${isX ? 'X' : 'O'}`); // Update the status with the current player's symbol
    }
  }, [squares, isX])

  // Render the game board and status
  return (
    <div className='tic-tac-toe-container'>
      <div className="row">
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
      </div>
      {/* Repeat the above div for each row */}
      <h1>{status}</h1>
    </div>
  )
}