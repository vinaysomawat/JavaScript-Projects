var x=0;
function count(){
    x++;
    document.getElementById("demo").innerHTML = x;
}

function reduceCount(){
    x--;
    document.getElementById("demo").innerHTML = x;
}

function resetCount(){
    x=0;
    document.getElementById("demo").innerHTML = x;
}