import apostar from "./main";

const rollDices = document.querySelector(".rollDices")
const h2 = document.querySelector("#Number")
const input = document.querySelector(".input")
var e = document.querySelector("select");
var value = e.value;

rollDices.addEventListener("click", function() {
    let diceroll=Math.floor(Math.random()*100)+1
    h2.textContent = diceroll
    var text = e.options[e.selectedIndex].text;

    if (text==="Maior") {
        if (diceroll > input){

        }
    }

})