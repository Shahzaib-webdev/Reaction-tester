var shape1 = document.getElementById('shape');
var startTime = new Date().getTime();
var displayTotalTime = document.getElementById("reaction-text");

 




shape1.onclick = function(){

    var endTime = new Date().getTime();
    var totalTime = ( endTime - startTime ) / 1000;
    shape1.style.display = "none";
    displayTotalTime.innerHTML = totalTime + "s";
    appearAfter();
}



// to make the box appear without refreshing

function boxAppear(){
    

    var position = Math.random()*400;
    var randomSize = Math.random()*250;
    if(Math.random() > 0.5){
        shape1.style.borderRadius = "100%";
    }
    else{
        shape1.style.borderRadius = "0";
    }
    shape1.style.top = position + "px";
    shape1.style.left = position + "px";
    shape1.style.width= position + "px";
    shape1.style.height= randomSize + "px"; 
    shape1.style.backgroundColor = randomColor();
    shape1.style.display = "block";
    startTime = new Date().getTime();
}



// function for appearance after delay

function appearAfter(){
    setTimeout(boxAppear, 2000);
}

// random color generator 

function randomColor(){
    var numbers = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i< 6 ; i++){
        color += numbers[Math.floor(Math.random()*16)];

    }
    return color;
}