var timer=30;
var score=0;
var hitrn=0;
function increaseScore(){
    score+=10;
    document.querySelector("#scoreval").textContent=score;
}
function makeBubble(){
    var clutter="";
for(var i=1; i<=133; i++){
   var rn= Math.floor(Math.random()*10 );
    clutter+=`<div class="bubble"> ${rn}</div>`;
}
document.querySelector("#pbtm").innerHTML=clutter;
}
function runTimer(){ 
    var timerInt=setInterval(function(){
        if(timer>0){
        timer--;
        document.querySelector("#timerNo").textContent=timer;
        }
        else{
            clearInterval(timerInt);
            document.querySelector("#pbtm").innerHTML=`<h1>GAME OVER<h1>`;

        }
    },1000);
}
function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hitrn;
}
document.querySelector("#pbtm").addEventListener("click",function(dets){
   var currentnum=Number(dets.target.textContent);
   if(currentnum===hitrn){
    increaseScore();
    makeBubble();
    getNewHit();
   }
});

getNewHit();
runTimer();
makeBubble();


