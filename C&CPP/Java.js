// Ask the user to enter a number
let num = parseInt(prompt("Enter a number:"));

// Loop through numbers from 1 to the entered number
for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
        console.log(i + " is Even");
    } else {
        console.log(i + " is Odd");
    }
}
