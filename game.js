const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

let board = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
let currentPlayer = 'X';

const WINNING_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function printBoard() {
  console.log(
    '\n' +
      `${board[0]} | ${board[1]} | ${board[2]}\n` +
      `---------\n` +
      `${board[3]} | ${board[4]} | ${board[5]}\n` +
      `---------\n` +
      `${board[6]} | ${board[7]} | ${board[8]}\n`,
  );
}

function handleTurn() {
  readline.question(`Player ${currentPlayer}, enter a move (1-9): `, (move) => {
    if (isValidMove(move)) {
      updateBoard(move);
      printBoard();

      if (hasWon()) {
        console.log(`Player ${currentPlayer === 'X' ? 'O' : 'X'} has won!`);
        readline.close();
      } else {
        nextPlayer();
        handleTurn();
      }
    } else {
      console.log('Invalid move. Try again.');
      handleTurn();
    }
  });
}

function isValidMove(move) {
  let index = parseInt(move, 10);
  index = index === 0 ? 9 : index - 1;
  return (
    index >= 0 && index <= 8 && board[index] !== 'X' && board[index] !== 'O'
  );
}

function updateBoard(move) {
  board[move - 1] = currentPlayer;
}

function hasWon() {
  return WINNING_COMBOS.some(
    (combo) =>
      board[combo[0]] === board[combo[1]] &&
      board[combo[0]] === board[combo[2]],
  );
}

function nextPlayer() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  return currentPlayer;
}

module.exports = {
  board,
  currentPlayer,
  readline,
  printBoard,
  handleTurn,
  isValidMove,
  updateBoard,
  hasWon,
  nextPlayer,
};
