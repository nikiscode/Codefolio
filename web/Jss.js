     
//java
<!DOCTYPE html>
<html>
<head>
  <title>Amity University B.Tech Registration</title>
  <style>
    body {
      font-family: Arial;
      margin: 30px;
    }
    input, select, button {
      display: block;
      margin: 10px 0;
      padding: 8px;
      width: 300px;
    }
    #result {
      margin-top: 20px;
      font-weight: bold;
    }
  </style>
</head>
<body>

<h2>Amity University B.Tech Registration Form</h2>

<form id="regForm" onsubmit="handleSubmit(event)">
  <label>Full Name:</label>
  <input type="text" id="name" required />

  <label>Age:</label>
  <input type="number" id="age" required />

  <label>Choose Program:</label>
  <select id="program" required>
    <option value="">--Select--</option>
    <option value="Computer Science">Computer Science</option>
    <option value="Electronics">Electronics</option>
    <option value="Mechanical">Mechanical</option>
    <option value="Civil">Civil</option>
  </select>

  <button type="submit">Submit</button>
</form>

<div id="result"></div>

<script>
  function handleSubmit(event) {
    event.preventDefault(); // Prevent page reload

    const name = document.getElementById("name").value;
    const age = parseInt(document.getElementById("age").value);
    const program = document.getElementById("program").value;

    const resultDiv = document.getElementById("result");

    if (age < 18) {
      resultDiv.innerHTML = `<span style="color: red;">Not eligible to apply.</span>`;
    } else {
      resultDiv.innerHTML = `
        <p>Registration Successful!</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Program:</strong> ${program}</p>
      `;
    }
  }
</script>

</body>
</html>
