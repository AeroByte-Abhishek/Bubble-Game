var timer = 60;
var score = 0;
var hitrn = 0;

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function makeBubble(){var clutter = "";
for(var i = 1; i<=168; i++){
    var rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`
}

document.querySelector("#pbtm").innerHTML = clutter;
}

function getNewHit(){
    hitrn = Math.floor(Math.random()*10)
    document.querySelector("#hitval").textContent = hitrn;
}

function runTimer(){
    var timerint = setInterval(function (){
        if(timer>0){
        timer--;
        document.querySelector("#timerval").textContent = timer;
    }else{
        clearInterval(timerint);
        document.querySelector("#pbtm").innerHTML = `<div><h1>Game Over</h1> </div>
        <br>
        <div>
         <h1>Your Score is ${score}</h1></div>`
         document.querySelector("#pbtm").style.flexDirection = "column"
         
    }
    }, 1000)
}

document.querySelector("#pbtm").addEventListener("click", function(dets){
    var clickednum = Number(dets.target.textContent);
    if(clickednum === hitrn){
        makeBubble();
        getNewHit();
        increaseScore();
    }
})

runTimer();
makeBubble();
getNewHit();




// Event Bubbling
// jsipe click karoge wo element par event raise hoga, aur event listener na milne oar event element ke parent par listener dhundhega, waha bhi naa milne paer event parent keparent ke parent par listener dhundhega jaha bhi use event listener mil jayega vo usko print kar dega