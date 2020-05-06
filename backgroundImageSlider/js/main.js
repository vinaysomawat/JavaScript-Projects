var index=0;

var urlindex = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

function previousFunction(){
    index--;
    if(index<0){
        index=4+index;
    }
    
    document.getElementById("body").style.backgroundImage = urlindex[index];
}

function nextFunction(){
    index++;
    if(index>4){
        index-=4;
    }
    
    document.getElementById("body").style.backgroundImage =URL(urlindex[index]);
}
