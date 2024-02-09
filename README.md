# Command-line Tic Tac Toe Game in Node.js

This a simple command-line Tic Tac Toe game built in Node.js.

## Installation

1. Check if Node.js is installed on your machine. Run `node -v` on your terminal. If Node.js is installed, you would see the version printed on your terminal.
2. If Node.js isn't installed, download Node.js from the official site and install it.
3. Clone or download this repository to your local machine.
4. Navigate to the repository directory from your terminal.
5. Run `npm install` to install all dependencies.

## Start Game

To start the game, run `npm start` in your terminal.

## Game Rules

1. The game starts with Player X.
2. Players take turns entering a number between 1 and 9. These numbers correspond to a specific position on the board:

```
1 | 2 | 3
---------
4 | 5 | 6
---------
7 | 8 | 9
```

3. If a player tries to play in an occupied spot, the game will ask for a new move.
4. The game ends when a player has three of their marks in a line (vertically, horizontally, or diagonally) or when all spots are taken with no winner (a draw).

## Tests

To run the tests, execute `npm test` in your terminal.

## Note

This game is made for command-line interface and cannot be run in a regular web environment.

Enjoy playing the game!
