let minput = document.getElementById("min");
let maxput = document.getElementById("max");
let display = document.getElementById("result");

document.getElementById("submit").onclick = function (){
    let min = Number(minput.value);
    let max = Number(maxput.value);
    if(min === ""){
        res = Math.floor(Math.random() * max) + 1;
    } else {
        res = Math.floor(Math.random() * (max - min)) + min;
    }
    display.textContent = res;
    display.style.display = "flex";
};
