let FirstNumber = document.getElementById("firstNumber");
let SecondNumber = document.getElementById("secondNumber");
let Inputbox = document.getElementById("userInput");
let result = document.getElementById("gameResult");
let random1 = Math.ceil(Math.random()*100);
let random2 = Math.ceil(Math.random()*100);
FirstNumber.textContent=random1
SecondNumber.textContent=random2
function checkButton(){
    let total = random1+random2;
    if(total==Inputbox.value){
        result.textContent="won your total is correct";
        result.style.background="green";

    }
    else{
        result.textContent="Invalid output";
        result.style.background="blue";
    }
}
function restartButton(){
        Inputbox.value="";
        result.textContent="";
        random1 = Math.ceil(Math.random()*100);
        random2 = Math.ceil(Math.random()*100);
        FirstNumber.textContent=random1
        SecondNumber.textContent=random2
        
}
