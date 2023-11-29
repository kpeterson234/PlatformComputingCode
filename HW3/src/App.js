import React from 'react'
import { useState } from 'react';

function Square({value, onSquareClick}) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [message, setMessage] = useState ('');
  const [moves, setMoves] = useState(0);

  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();

    if (xIsNext && isFirstMove()) {
      if (i === 0 || i === 2 || i === 6 || i === 8) {
        nextSquares[i] = 'X';
        setMessage("Good choice!");
        setMoves(moves + 1);
        setXIsNext(!xIsNext);
      } else {
        setMessage("Not a good choice!");
        return;
      }
    }

    if (moves === 1 && !xIsNext) {
      nextSquares[i] = 'O'
      setMessage("Good choice!");
      setMoves(moves + 1);
      setXIsNext(!xIsNext);
    }

    if (moves === 2 && xIsNext) {
      if (nextSquares[4] === 'O') {
        if (nextSquares[0] === 'X') {
          if (i === 8) {
            nextSquares[i] == 'X';
            setMessage("Good choice!");
            setMoves(moves + 1);
            setXIsNext(!xIsNext);
          }
          else {
            setMessage("Not a good choice!");
            return;
          }
        }
        if (nextSquares[2] === 'X') {
          if (i === 6) {
            nextSquares[i] == 'X';
            setMessage("Good choice!");
            setMoves(moves + 1);
            setXIsNext(!xIsNext);
          }
          else {
            setMessage("Not a good choice!");
            return;
          }
        }
        if (nextSquares[6] === 'X') {
          if (i === 2) {
            nextSquares[i] == 'X';
            setMessage("Good choice!");
            setMoves(moves + 1);
            setXIsNext(!xIsNext);
          }
          else {
            setMessage("Not a good choice!");
            return;
          }
        }
        if (nextSquares[8] === 'X') {
          if (i === 0) {
            nextSquares[i] == 'X';
            setMessage("Good choice!");
            setMoves(moves + 1);
            setXIsNext(!xIsNext);
          }
          else {
            setMessage("Not a good choice!");
            return;
          }
        }
      }
      else{
        if (nextSquares[4] !== 'O') {
          if (nextSquares[0] === 'X' && nextSquares [1] == 'O') {
            if (i === 6) {
              nextSquares[i] == 'X';
              setMessage("Good choice!");
              setMoves(moves + 1);
              setXIsNext(!xIsNext);
            }
            else {
              setMessage("Not a good choice!");
              return;
            }
          }
          if (nextSquares[0] === 'X' && nextSquares [3] == 'O') {
            if (i === 2) {
              nextSquares[i] == 'X';
              setMessage("Good choice!");
              setMoves(moves + 1);
              setXIsNext(!xIsNext);
            }
            else {
              setMessage("Not a good choice!");
              return;
            }
          }
          if (nextSquares[2] === 'X' && nextSquares [1] == 'O') {
            if (i === 8) {
              nextSquares[i] == 'X';
              setMessage("Good choice!");
              setMoves(moves + 1);
              setXIsNext(!xIsNext);
            }
            else {
              setMessage("Not a good choice!");
              return;
            }
          }
          if (nextSquares[2] === 'X' && nextSquares [5] == 'O') {
            if (i === 0) {
              nextSquares[i] == 'X';
              setMessage("Good choice!");
              setMoves(moves + 1);
              setXIsNext(!xIsNext);
            }
            else {
              setMessage("Not a good choice!");
              return;
            }
          }
          if (nextSquares[6] === 'X' && nextSquares[7] == 'O') {
            if (i ===0 ) {
              nextSquares[i] == 'X';
              setMessage("Good choice!");
              setMoves(moves + 1);
              setXIsNext(!xIsNext);
            }
            else {
              setMessage("Not a good choice!");
              return;
            }
          }
          if (nextSquares[6] === 'X' && nextSquares[3] == 'O') {
            if (i ===8 ) {
              nextSquares[i] == 'X';
              setMessage("Good choice!");
              setMoves(moves + 1);
              setXIsNext(!xIsNext);
            }
            else {
              setMessage("Not a good choice!");
              return;
            }
          }
          if (nextSquares[8] === 'X' && nextSquares[7] == 'O') {
            if (i ===2 ) {
              nextSquares[i] == 'X';
              setMessage("Good choice!");
              setMoves(moves + 1);
              setXIsNext(!xIsNext);
            }
            else {
              setMessage("Not a good choice!");
              return;
            }
          }
          if (nextSquares[8] === 'X' && nextSquares[5] == 'O') {
            if (i ===6 ) {
              nextSquares[i] == 'X';
              setMessage("Good choice!");
              setMoves(moves + 1);
              setXIsNext(!xIsNext);
            }
            else {
              setMessage("Not a good choice!");
              return;
            }
          }
          if (nextSquares[0] === 'X' && nextSquares[6] == 'O') {
            if (i ===2 ) {
              nextSquares[i] == 'X';
              setMessage("Good choice!");
              setMoves(moves + 1);
              setXIsNext(!xIsNext);
            }
            else {
              setMessage("Not a good choice!");
              return;
            }
          }
          if (nextSquares[0] === 'X' && nextSquares[7] == 'O') {
            if (i == 2 || i == 6 ) {
              nextSquares[i] == 'X';
              setMessage("Good choice!");
              setMoves(moves + 1);
              setXIsNext(!xIsNext);
            }
            else {
              setMessage("Not a good choice!");
              return;
            }
          }
          if (nextSquares[0] === 'X' && nextSquares[5] == 'O') {
            if (i ==2 || i == 6 ) {
              nextSquares[i] == 'X';
              setMessage("Good choice!");
              setMoves(moves + 1);
              setXIsNext(!xIsNext);
            }
            else {
              setMessage("Not a good choice!");
              return;
            }
          }
          if (nextSquares[0] === 'X' && nextSquares[2] == 'O') {
            if (i == 6 ) {
              nextSquares[i] == 'X';
              setMessage("Good choice!");
              setMoves(moves + 1);
              setXIsNext(!xIsNext);
            }
            else {
              setMessage("Not a good choice!");
              return;
            }
          } 
          if (nextSquares[0] === 'X' && nextSquares[8] == 'O') {
            if (i == 6 || i == 2 ) {
              nextSquares[i] == 'X';
              setMessage("Good choice!");
              setMoves(moves + 1);
              setXIsNext(!xIsNext);
            }
            else {
              setMessage("Not a good choice!");
              return;
            }
          } 
          if (nextSquares[2] === 'X' && nextSquares[0] == 'O') {
            if (i == 8 ) {
              nextSquares[i] == 'X';
              setMessage("Good choice!");
              setMoves(moves + 1);
              setXIsNext(!xIsNext);
            }
            else {
              setMessage("Not a good choice!");
              return;
            }
          } 
          if (nextSquares[2] === 'X' && nextSquares[3] == 'O') {
            if (i == 8 || i == 0) {
              nextSquares[i] == 'X';
              setMessage("Good choice!");
              setMoves(moves + 1);
              setXIsNext(!xIsNext);
            }
            else {
              setMessage("Not a good choice!");
              return;
            }
          }
          if (nextSquares[2] === 'X' && nextSquares[6] == 'O') {
            if (i == 8 || i == 0) {
              nextSquares[i] == 'X';
              setMessage("Good choice!");
              setMoves(moves + 1);
              setXIsNext(!xIsNext);
            }
            else {
              setMessage("Not a good choice!");
              return;
            }
          }
          if (nextSquares[2] === 'X' && nextSquares[7] == 'O') {
            if (i == 8 || i == 0) {
              nextSquares[i] == 'X';
              setMessage("Good choice!");
              setMoves(moves + 1);
              setXIsNext(!xIsNext);
            }
            else {
              setMessage("Not a good choice!");
              return;
            }
          }
          if (nextSquares[2] === 'X' && nextSquares[8] == 'O') {
            if (i == 0) {
              nextSquares[i] == 'X';
              setMessage("Good choice!");
              setMoves(moves + 1);
              setXIsNext(!xIsNext);
            }
            else {
              setMessage("Not a good choice!");
              return;
            }
          }
          if (nextSquares[6] === 'X' && nextSquares[0] == 'O') {
            if (i == 8) {
              nextSquares[i] == 'X';
              setMessage("Good choice!");
              setMoves(moves + 1);
              setXIsNext(!xIsNext);
            }
            else {
              setMessage("Not a good choice!");
              return;
            }
          }
          if (nextSquares[6] === 'X' && nextSquares[1] == 'O') {
            if (i == 8 || i==0) {
              nextSquares[i] == 'X';
              setMessage("Good choice!");
              setMoves(moves + 1);
              setXIsNext(!xIsNext);
            }
            else {
              setMessage("Not a good choice!");
              return;
            }
          }
          if (nextSquares[6] === 'X' && nextSquares[2] == 'O') {
            if (i == 8 || i==0) {
              nextSquares[i] == 'X';
              setMessage("Good choice!");
              setMoves(moves + 1);
              setXIsNext(!xIsNext);
            }
            else {
              setMessage("Not a good choice!");
              return;
            }
          }
          if (nextSquares[6] === 'X' && nextSquares[5] == 'O') {
            if (i == 8 || i==0) {
              nextSquares[i] == 'X';
              setMessage("Good choice!");
              setMoves(moves + 1);
              setXIsNext(!xIsNext);
            }
            else {
              setMessage("Not a good choice!");
              return;
            }
          }
          if (nextSquares[6] === 'X' && nextSquares[8] == 'O') {
            if (i==0) {
              nextSquares[i] == 'X';
              setMessage("Good choice!");
              setMoves(moves + 1);
              setXIsNext(!xIsNext);
            }
            else {
              setMessage("Not a good choice!");
              return;
            }
          }
          if (nextSquares[8] === 'X' && nextSquares[0] == 'O') {
            if (i==2 || i ==6) {
              nextSquares[i] == 'X';
              setMessage("Good choice!");
              setMoves(moves + 1);
              setXIsNext(!xIsNext);
            }
            else {
              setMessage("Not a good choice!");
              return;
            }
          }
          if (nextSquares[8] === 'X' && nextSquares[1] == 'O') {
            if (i==2 || i ==6) {
              nextSquares[i] == 'X';
              setMessage("Good choice!");
              setMoves(moves + 1);
              setXIsNext(!xIsNext);
            }
            else {
              setMessage("Not a good choice!");
              return;
            }
          }
          if (nextSquares[8] === 'X' && nextSquares[2] == 'O') {
            if (i ==6) {
              nextSquares[i] == 'X';
              setMessage("Good choice!");
              setMoves(moves + 1);
              setXIsNext(!xIsNext);
            }
            else {
              setMessage("Not a good choice!");
              return;
            }
          }
          if (nextSquares[8] === 'X' && nextSquares[3] == 'O') {
            if (i ==6 || i ==2) {
              nextSquares[i] == 'X';
              setMessage("Good choice!");
              setMoves(moves + 1);
              setXIsNext(!xIsNext);
            }
            else {
              setMessage("Not a good choice!");
              return;
            }
          }
          if (nextSquares[8] === 'X' && nextSquares[6] == 'O') {
            if (i ==2) {
              nextSquares[i] == 'X';
              setMessage("Good choice!");
              setMoves(moves + 1);
              setXIsNext(!xIsNext);
            }
            else {
              setMessage("Not a good choice!");
              return;
            }
          }

          
        }
      }
    }
  

   
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }


  const isFirstMove = () => squares.filter((s) => s).length === 0;

 
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
       
      </div>
      <div className = "message">
        {message}
      </div>
    </div>
  );
}
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
      return squares[a];
    }
  }
  return null;
}