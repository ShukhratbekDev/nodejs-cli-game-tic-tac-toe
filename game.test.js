const { board, currentPlayer, isValidMove, updateBoard, hasWon, nextPlayer } = require("./game");

test("Initial current player should be X", () => {
    expect(currentPlayer).toBe("X");
});

test("Check all spots on board are valid initially", () => {
    for (let i = 1; i <= 9; i++) {
        expect(isValidMove(i.toString())).toBeTruthy();
    }
});

test("Move validation should return false for invalid inputs", () => {
    expect(isValidMove("0")).toBeFalsy(); // Lower boundary
    expect(isValidMove("10")).toBeFalsy(); // Upper boundary
    expect(isValidMove("Something")).toBeFalsy(); // Non-numeric string
});

test("Update board and confirm move is reflected", () => {
    updateBoard('5');
    expect(board[4]).toBe("X");
});

test("Validate that a spot is marked as invalid once played", () => {
    expect(isValidMove("5")).toBeFalsy();
});

test("Simulate player X winning the game", () => {
    board[0] = "X";
    board[1] = "X";
    board[2] = "X";
    expect(hasWon()).toBeTruthy();
});

test("Next player after X should be O", () => {
    expect(nextPlayer()).toBe("O");
});

test("Next player after O should be X", () => {
    expect(nextPlayer()).toBe("X");
    expect(currentPlayer).toBe("X");
});