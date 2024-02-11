var Timer = 60;
var score = 0;
var hitrn = 0;
function IncreaseScore(){
  score += 10;
    document.querySelector("#scoreVal").textContent = score;
}

function makebubbel() {
    clutter = " ";
for (var i = 0; i <= 180; i++){
    var rn = Math.floor(Math.random()*10);
    clutter += `<div class="bubbel">${rn}</div>`;
}
document.querySelector("#pbtn").innerHTML = clutter;
}


function getNewHit() {
     hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#Hitval").textContent = hitrn;
}
function runTimmer() {
   var timerInt =  setInterval(function () {
        if (Timer > 0) {
            Timer--;
        document.querySelector("#timerVal").textContent = Timer;
       }
        else {
            document.querySelector("#pbtn").innerHTML = "<h2>Game Over</h2>";
            clearInterval(timerInt);
       }
        
    }, 1000);
}
document.querySelector("#pbtn").addEventListener("click", function (dets) {
   var clickedNum =  Number(dets.target.textContent);
    if (clickedNum === hitrn) {
        IncreaseScore();
        makebubbel();
        getNewHit();
        }
    // alert("chal rh hai");
})
runTimmer();
getNewHit();
makebubbel();
// IncreaseScore();
