function pFuna(){
    var p = document.getElementById('p-funa');
    p.innerHTML = '';
    p.style.fontSize = '20px';
    p.style.color = 'whitesmoke';
}
let fname="";
function greet() {
    let greetParagraph = document.getElementById("greet");
    fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let age = document.getElementById("age").value;
    if (fname === "" || lname === "") {
        alert("first and last name cannot be empty string!");
        return;
    }
    greetParagraph.innerHTML = "Your Questions have been submitted "; 
}