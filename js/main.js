
//global variables
//var n1 = document.getElementById("num1").value;
//var n2 = document.getElementById("num2").value;

const buttons = document.getElementById("buttons");

const addition = document.getElementById("addition");

const subtraction = document.getElementById("subtraction");

const multiplication = document.getElementById("multiplication");

const division = document.getElementById("division");

const output = document.getElementById("output");

//mouseclick events
addition.addEventListener("click",addition);
subtraction.addEventListener("click",subtraction);
multiplication.addEventListener("click",multiplication);
division.addEventListener("click",division);

//functions for each event (event handlers)
function addition(){
    n1 = document.getElementById("num1").value;
    n2 = document.getElementById("num2").value;
    var sum = 
        Number(document.getElementById("num1").value) + 
        Number(document.getElementById("num2").value);
    output.innerHTML = sum; 
}

function subtraction(){
    n1 = document.getElementById("num1").value;
    n2 = document.getElementById("num2").value;
    var sum = 
        Number(document.getElementById("num1").value) + 
        Number(document.getElementById("num2").value);
    output.innerHTML = sum; 
}

function multiplication(){
    n1 = document.getElementById("num1").value;
    n2 = document.getElementById("num2").value;
    var sum = 
        Number(document.getElementById("num1").value) + 
        Number(document.getElementById("num2").value);
    output.innerHTML = sum;
}


    
function division(){
    n1 = document.getElementById("num1").value;
    n2 = document.getElementById("num2").value;
    var sum = 
        Number(document.getElementById("num1").value) + 
        Number(document.getElementById("num2").value);
    output.innerHTML = sum;
}

buttons.addEventListener('click', function(e)  {
    //pop up an alert when any element inside of the buttons div is clicked
    alert("Ouch!");
    //only run this code if the event was trigged by a button element
    if (e.target.matches('button')) {
        // Do something
        alert("a button was clicked");
//        console.log("A button was clicked!");  
        //get the id property of the event target to identify the specific element that sent the event and store it in a constant
        const btn = e.target.id;
        if(btn == "this"){
            output.innerHTML = "this thing";
        } else if (btn == "that"{
            output.innerHTML = "that thing";
        } else {
            output.innerHTML = "sometthinig is wrong";
        }
        console.log(btn);
 } else {
     alert("Something else was clicked!");
 }
    


