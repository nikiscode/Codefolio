// Ask the user to enter a number
let num = parseInt(prompt("Enter a number:"));

// Loop through numbers from 1 to the entered number
for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
        console.log(i + " is Even");
    } else {
        console.log(i + " is Odd");
    }
}//odd and even count
// Ask the user to enter a number
let num = parseInt(prompt("Enter a number:"));

let evenCount = 0;
let oddCount = 0;

// Loop from 1 to the entered number
for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
        evenCount++;
    } else {
        oddCount++;
    }
}

// Display the total count of even and odd numbers
console.log("Total even numbers: " + evenCount);
console.log("Total odd numbers: " + oddCount);
