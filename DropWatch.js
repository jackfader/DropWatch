var startTimerButton = document.querySelector('.startTimer');
var pauseTimerButton = document.querySelector('.pauseTimer');
var timerDisplay = document.querySelector('.timer');
var startTime;
var updatedTime;
var difference;
var tInterval;
var savedTime;
var paused = 0;
var running = 0;

function startTimer(){
  if(!running){
    startTime = new Date().getTime();
    tInterval = setInterval(getShowTime, 1);
    paused = 0;
    running = 1;
    timerDisplay.style.background = "#000000";
    timerDisplay.style.cursor = "pointer";
    timerDisplay.style.color = "white";
  }
else if (!paused) {
    clearInterval(tInterval);
    savedTime = difference;
    paused = 1;
    running = 0;
    timerDisplay.style.background = "#000000";
    timerDisplay.style.color = "#ffffff";
    timerDisplay.style.cursor = "pointer";
    document.getElementById('result').style.visibility="visible";
    document.getElementById('result2').style.visibility="visible";
    document.getElementById('feet').style.visibility="visible";
    document.getElementById('Meters').style.visibility="visible";

  } else {
    startTimer();
  }
}

function resetTimer(){
  clearInterval(tInterval);
  savedTime = 0;
  difference = 0;
  paused = 0;
  running = 0;
  timerDisplay.innerHTML = 'Drop!';
  timerDisplay.style.background = "#000000";
  timerDisplay.style.color = "#fff";
  timerDisplay.style.cursor = "pointer";
  document.getElementById('result').innerHTML = 0
  document.getElementById('result').style.visibility="hidden"
  document.getElementById('result2').innerHTML = 0
  document.getElementById('result2').style.visibility="hidden"
  document.getElementById('feet').style.visibility="hidden";
  document.getElementById('Meters').style.visibility="hidden";

}

function getShowTime(){
  updatedTime = new Date().getTime();
  if (savedTime){
    difference = (updatedTime - startTime) + savedTime;
  } else {
    difference =  updatedTime - startTime;
  }
  // var days = Math.floor(difference / (1000 * 60 * 60 * 24));
  var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((difference % (1000 * 60)) / 1000);
  var milliseconds = Math.floor((difference % (1000 * 60)) / 100);

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;
  milliseconds = (milliseconds < 100) ? (milliseconds < 10) ? "0" + milliseconds : milliseconds : milliseconds;
  timerDisplay.innerHTML =  seconds + ':' + milliseconds;
  document.getElementById('result').innerHTML = ((milliseconds * milliseconds)*16)/100 ;
  document.getElementById('result2').innerHTML = Math.round((milliseconds * milliseconds)*4.9)/100 ;

}
