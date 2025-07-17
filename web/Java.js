//javascript code
<!DOCTYPE html>
<html>
<head>
  <title>Number Checker</title>
  <style>
    body {
      font-family: Arial;
      margin: 20px;
    }
    input, button {
      margin: 5px;
      padding: 8px;
    }
  </style>
</head>
<body>

<h2>Number Analyzer</h2>
<input type="number" id="numInput" placeholder="Enter a number" />
<br>

<button onclick="checkEvenOdd()">Even or Odd</button>
<button onclick="checkSign()">Positive, Negative or Zero</button>
<button onclick="checkDivisible()">Divisible by 3 or 5</button>
<button onclick="calculateSum()">Sum of All Entered Numbers</button>

<p id="output"></p>

<script>
  let totalSum = 0;

  function getNumber() {
    return parseInt(document.getElementById("numInput").value);
  }

  function checkEvenOdd() {
    const num = getNumber();
    const result = (num % 2 === 0) ? "Even" : "Odd";
    document.getElementById("output").innerText = `The number is ${result}.`;
  }

  function checkSign() {
    const num = getNumber();
    let result = "";
    if (num > 0) result = "Positive";
    else if (num < 0) result = "Negative";
    else result = "Zero";
    document.getElementById("output").innerText = `The number is ${result}.`;
  }

  function checkDivisible() {
    const num = getNumber();
    let result = "";
    if (num % 3 === 0 && num % 5 === 0) {
      result = "Divisible by both 3 and 5";
    } else if (num % 3 === 0) {
      result = "Divisible by 3";
    } else if (num % 5 === 0) {
      result = "Divisible by 5";
    } else {
      result = "Not divisible by 3 or 5";
    }
    document.getElementById("output").innerText = result;
  }

  function calculateSum() {
    const num = getNumber();
    totalSum += num;
    document.getElementById("output").innerText = `Cumulative sum is: ${totalSum}`;
  }
</script>

</body>
</html>
