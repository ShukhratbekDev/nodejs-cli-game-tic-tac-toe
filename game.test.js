const {
  board,
  currentPlayer,
  readline,
  isValidMove,
  updateBoard,
  hasWon,
  nextPlayer,
  printBoard,
  handleTurn
} = require('./game');

console.log = jest.fn();

describe('Tic Tac Toe game', () => {
  afterAll(() => {
    readline.close();
  });
  test('Initial current player should be X', () => {
    expect(currentPlayer).toBe('X');
  });

  test('Should print the board correctly', () => {
    printBoard();
    expect(console.log).toHaveBeenCalledWith('\n1 | 2 | 3\n---------\n4 | 5 | 6\n---------\n7 | 8 | 9\n');
    console.log.mockReset(); // Reset the mock to ensure clean state for the next test
  });

  test('Check all spots on board are valid initially', () => {
    for (let i = 1; i <= 9; i++) {
      expect(isValidMove(i.toString())).toBeTruthy();
    }
  });

  test('Move validation should return false for invalid inputs', () => {
    expect(isValidMove('0')).toBeFalsy(); // Lower boundary
    expect(isValidMove('10')).toBeFalsy(); // Upper boundary
    expect(isValidMove('Something')).toBeFalsy(); // Non-numeric string
  });

  test('Update board and confirm move is reflected', () => {
    updateBoard('5');
    expect(board[4]).toBe('X');
  });

  test('Validate that a spot is marked as invalid once played', () => {
    expect(isValidMove('5')).toBeFalsy();
  });

  test('Simulate player X winning the game', () => {
    board[0] = 'X';
    board[1] = 'X';
    board[2] = 'X';
    expect(hasWon()).toBeTruthy();
  });

  test('Next player after X should be O', () => {
    expect(nextPlayer()).toBe('O');
  });

  test('Next player after O should be X', () => {
    expect(nextPlayer()).toBe('X');
  });
});
