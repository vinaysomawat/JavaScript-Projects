var bgColor = ["yellow", "red", "black", "pink", "brown", "voilet", "blue", "green", "orange"];

function changeBackground() {
    document.getElementById("btn1").addEventListener("click", backgroundChange());
}

function backgroundChange() {
    document.getElementsByTagName("body")[0].style.backgroundColor=  bgColor[Math.floor(Math.random()*9)];
    console.log(Math.floor(Math.random()*9))
}

