

//number guessing
<!DOCTYPE html>
<html>
<head>
  <title>Guess the Number Game</title>
</head>
<body>
  <h1>Guess the Number (1 to 10)</h1>
  <p>Enter your guess:</p>
  <input type="number" id="userGuess" />
  <button onclick="checkGuess()">Submit</button>
  <p id="result"></p>

  <script>
    // Generate a random number between 1 and 10
    const randomNumber = Math.floor(Math.random() * 10) + 1;

    function checkGuess() {
      const guess = parseInt(document.getElementById("userGuess").value);
      const result = document.getElementById("result");

      if (guess === randomNumber) {
        result.textContent = "🎉 Correct! You guessed the number!";
      } else if (guess > randomNumber) {
        result.textContent = "Too high! Try again.";
      } else {
        result.textContent = "Too low! Try again.";
      }
    }
  </script>
</body>
</html>
