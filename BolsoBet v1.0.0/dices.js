
const rollDices = document.querySelector(".rollDices")
const h2 = document.querySelector("#Number")

rollDices.addEventListener("click", function() {
    let diceroll=Math.floor(Math.random()*100)+1
    
    h2.textContent = diceroll
})

