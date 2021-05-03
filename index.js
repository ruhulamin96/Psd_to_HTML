let output = document.getElementById('stopwatch');
let ms = 0;
let sec = 0;
let min = 0;
let isRunning=false;

function timer() {
    ms++;
    if(ms >= 100){
        sec++
        ms = 0
    }
    if(sec === 60){
        min++
        sec = 0
    }
    if(min === 60){
        ms, sec, min = 0;
    }

    //Doing some string interpolation
    let milli = ms < 10 ? `0`+ ms : ms;
    let seconds = sec < 10 ? `0`+ sec : sec;
    let minute = min < 10 ? `0` + min : min;

    let timer= `${minute}:${seconds}:${milli}`;
    output.innerHTML =timer;
};
//Start timer
function start(){
    if (isRunning) throw new Error("StopWatch has already been started.");
    isRunning = true;
 time = setInterval(timer,100);
}
//stop timer
function stop(){
    if (!isRunning) throw new Error("StopWatch has already been stopped.");
    isRunning = false;
    clearInterval(time)
}
//reset timer
function reset(){
    if (isRunning) throw new Error("StopWatch has already been stopped.");
    ms = 0;
    sec = 0;
    min = 0;
isRunning=false;
    output.innerHTML = `00:00:00`
}
const startBtn = document.getElementById('button-start');
const stopBtn =  document.getElementById('button-stop');
const resetBtn = document.getElementById('button-reset');

startBtn.addEventListener('click',start,false);
stopBtn.addEventListener('click',stop,false);
resetBtn.addEventListener('click',reset,false);