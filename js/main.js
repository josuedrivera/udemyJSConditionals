console.log("connected");

//bouncer
if(age < 18) {
    console.log("Sorry, you are not old enough to enter this venue.");
} 

else if(age < 21) {
    console.log("You can enter, but you may not drink.");
}

else {
    console.log("Come on in. You can drink.");
}


//BONUS CONDITIONALS
// get age and convert it to a Number (prompt always returns a String)
var age = Number(prompt("What is your age?"));

//if age is negative
if(age < 0) {
    console.log("Come back once you're out the womb!");
}

//if age is 21
if(age === 21) {
    console.log("Happy 21st Birthday!");
}

//if age is odd -- not evenly divisible by 2
if(age % 2 !== 0) {
    console.log("Your age is odd!");
}

//if age is a perfect square
if(age % Math.sqrt(age) === 0) {
    console.log("Your age is a perfect square!");
}



