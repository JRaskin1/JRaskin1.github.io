let fname="";
function greet() {
    let greetParagraph = document.getElementById("greet");
    fname = document.getElementById("fname").ariaValueMax;
    let lname = document.getElementById("lname").value;
    let age = document.getElementById("age").value;
    if (fname === "" || lname === "") {
        alert("first and last name cannot be empty string!");
        return;
    }
    if (age === "" || age <18){
        alert("Invalid age! You must be 18 or older!")
        return;
    }
    greetParagraph.innerHTML = "Greetings " + age + "year old " + fname + "!"; 
}
function trivia1() {
    let triviaAnswer = document.getElementById("trivia-answer");
    let chocSelected = document.getElementById("chocolate").checked;
    let tunaSelected = document.getElementById("tuna").checked;
    let honeySelected = document.getElementById("honey").checked;
    if (chocSelected) {
        triviaAnswer.innerHTML = fname + ", chocolate is wrong!";
    }
    else if (tunaSelected) {
        triviaAnswer.innerHTML = fname + ", tuna is wrong!";
    }
    else if (honeySelected) {
        triviaAnswer.innerHTML = fname + ", Bravo! You are right!";
    }
    else {
        triviaAnswer.innerHTML = "Uh oh. Something went wrong!!!";
    }

}

function trivia2() {
    let triviaAnswer = document.getElementById("trivia-answer2");
    let samericaSelected = document.getElementById("samerica").checked;
    let londonSelected = document.getElementById("london").checked;
    let parisSelected = document.getElementById("paris").checked;
    if (samericaSelected) {
        triviaAnswer.innerHTML = fname + ", Bingo! South America is correct";
    }
    else if (londonSelected) {
        triviaAnswer.innerHTML = fname + ", London is incorect.";
    }
    else if (parisSelected) {
        triviaAnswer.innerHTML = fname + ", Paris is incorect.";
    }
    else {
        triviaAnswer.innerHTML = "Uh oh. Something went wrong!!!";
    }
}
