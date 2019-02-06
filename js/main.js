
//global variables
var n1 = document.getElementById("num1").value;
var n2 = document.getElementById("num2").value;

//Need to add number cuz itll register the numb1+2 as string

function addition(){
    n1 = document.getElementById("num1").value;
    n2 = document.getElementById("num2").value;
    var sum = 
        Number(document.getElementById("num1").value) + 
        Number(document.getElementById("num2").value);
    console.log(sum);
}
function subtraction(){
    //sum is local to this function
    n1 = document.getElementById("num1").value;
    n2 = document.getElementById("num2").value;
    var sum = 
        Number(document.getElementById("num1").value) - 
        Number(document.getElementById("num2").value);
    console.log(sum);
}

function multiplication(){
    n1 = document.getElementById("num1").value;
    n2 = document.getElementById("num2").value;
    var sum = 
        Number(n1) * 
        Number(n2);
    console.log(sum);
}

function division(){
    n1 = document.getElementById("num1").value;
    n2 = document.getElementById("num2").value;
    var sum = 
        Number(n1) / 
        Number(n2);
    console.log(sum);
}