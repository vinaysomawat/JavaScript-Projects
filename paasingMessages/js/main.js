function myFunction(){
    var x;
    x = document.getElementById("inputID").value;
    if(!x){
        alert("Please enter input");
    }
    else{
        document.getElementById("demo").innerHTML = x;
    }
    
}
