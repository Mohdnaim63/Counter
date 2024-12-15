let counter = document.getElementById("counter")
let incrementButton = document.getElementById("incrementButton")
let decrementButton = document.getElementById("decrementButton")
let resetButton = document.getElementById("resetButton")

let counterValue = 0;

incrementButton.addEventListener("click", function(){
    counterValue++
    updateCounter();
})

decrementButton.addEventListener("click", function(){
    
    if (counterValue > 0) {
        counterValue--;
    }

    updateCounter();
})

resetButton.addEventListener("click", function(){

    counterValue = 0;
    updateCounter();
})
function updateCounter(){
    counter.textContent = counterValue;
}








