   //javascript codes//
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Tic Tac Toe</title>
  <style>
    body {
      font-family: sans-serif;
      text-align: center;
      margin-top: 50px;
      background-color: #f0f0f0;
    }
    h1 {
      color: #333;
    }
    .board {
      display: grid;
      grid-template-columns: repeat(3, 100px);
      gap: 10px;
      justify-content: center;
      margin-top: 20px;
    }
    .cell {
      width: 100px;
      height: 100px;
      font-size: 2em;
      background: white;
      border: 2px solid #333;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .cell:hover {
      background-color: #eee;
    }
    #message {
      margin-top: 20px;
      font-size: 1.2em;
    }
    button {
      margin-top: 20px;
      padding: 10px 20px;
      font-size: 1em;
    }
  </style>
</head>
<body>
  <h1>Tic Tac Toe</h1>
  <div class="board" id="board">
    <!-- 9 cells will be created by JS -->
  </div>
  <div id="message"></div>
  <button onclick="restartGame()">Restart</button>

  <script>
    const board = document.getElementById('board');
    const message = document.getElementById('message');
    let currentPlayer = 'X';
    let cells = [];

    // Create cells
    for (let i = 0; i < 9; i++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.addEventListener('click', () => handleMove(cell, i));
      board.appendChild(cell);
      cells.push(cell);
    }

    function handleMove(cell, index) {
      if (cell.textContent !== '') return;
      cell.textContent = currentPlayer;

      if (checkWin()) {
        message.textContent = `${currentPlayer} wins!`;
        disableBoard();
      } else if (isDraw()) {
        message.textContent = "It's a draw!";
      } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        message.textContent = `Turn: ${currentPlayer}`;
      }
    }

    function checkWin() {
      const wins = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6]             // diagonals
      ];
      return wins.some(combo => {
        const [a, b, c] = combo;
        return cells[a].textContent &&
               cells[a].textContent === cells[b].textContent &&
               cells[a].textContent === cells[c].textContent;
      });
    }

    function isDraw() {
      return cells.every(cell => cell.textContent !== '');
    }

    function disableBoard() {
      cells.forEach(cell => cell.style.pointerEvents = 'none');
    }

    function restartGame() {
      cells.forEach(cell => {
        cell.textContent = '';
        cell.style.pointerEvents = 'auto';
      });
      currentPlayer = 'X';
      message.textContent = '';
    }
  </script>
</body>
</html>
