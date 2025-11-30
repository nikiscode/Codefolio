    //first javascript program
<!DOCTYPE html>
<html>
<body>
<h1>JavaScript Function Examples</h1>
<h2>1. Display Date and Time</h2>
<button onclick="showDateTime()">Click me to display Date and Time</button>
<p id="demo1"></p>
<h2>2. Paragraph + Date</h2>
<p id="demo2"></p>
<p id="demoo2"></p>
<button onclick="showNATUREInfo()">Click me to display info and date</button>
<h2>3. Print the Page</h2>
<button onclick="window.print()">Print this page</button>
<h2>4. Show Hidden Text</h2>
<p id="demo4" style="display: none;">Hello JavaScript!</p>
<button onclick="showHiddenText()">Click me!</button>
<h2>5. Change Font Size</h2>
<p id="demo5">JavaScript can change the style of an HTML element.</p>
<button onclick="changeFontSize()">Click me!</button>
<h2>6. Perform Addition</h2>
<p id="demo6"></p>
<button onclick="addNumbers()">Click to calculate 8 + 9</button>
<h2>7. Update Two Paragraphs</h2>
<p id="demo7"></p>
<p id="demoo7"></p>
<button onclick="updateParagraphs()">Click me!</button>
<h2>8. Alert on Click</h2>
<button onclick="showAlert()">Click ME!</button>
<script>
function showDateTime() {
document.getElementById("demo1").innerHTML = Date();
    }
function showNATUREInfo() {
document.getElementById("demo2").innerHTML = 
"Nature can refer to the general realm of living beings, and in some cases to the processes associated with inanimate objects—the way that particular types of things exist and change of their own accord, such as the weather and geology of the Earth.";
document.getElementById("demoo2").innerHTML = Date();
    }
function showHiddenText() {
document.getElementById("demo4").style.display = "block";
    }
function changeFontSize() {
document.getElementById("demo5").style.fontSize = "35px";
    }
function addNumbers() {
document.getElementById("demo6").innerHTML = 7 + 5;
    }
function updateParagraphs() {
document.getElementById("demo7").innerHTML = "Hello Nikki";
document.getElementById("demoo7").innerHTML = "How are you?";
    }
function showAlert() {
alert("Stay tuned!");
    }
</script>
</body>
</html>
