let startEle = document.getElementById("start");
let stopEle = document.getElementById("stop");
let resetEle = document.getElementById("reset");
let shortEle = document.getElementById("shortbreak");
let longEle = document.getElementById("longbreak");
let timerDisplay = document.getElementById("timer-display");

let timerInterval;
let timerValue = 1500;
let isRunning = false;

function updateTimerDisplay() {
    let minutes = Math.floor((timerValue % 3600) / 60);
    let seconds = timerValue % 60;
    timerDisplay.innerText = `${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
}

function startTimer() {
        if (!isRunning) {
            timerInterval = setInterval(() => {
                timerValue--;
                updateTimerDisplay();
            }, 1000);
            isRunning = true;
        }
}

function stopTimer() {
    clearInterval(timerInterval);
    isRunning = false;
    updateTimerDisplay();
}

function resetTimer() {
    stopTimer();
    timerValue = 1500;
    updateTimerDisplay();
}

function shortBreak() {
   stopTimer();
    timerValue = 300; 
    updateTimerDisplay();
}

function longBreak() {
    stopTimer();
    timerValue = 900;
    updateTimerDisplay();
}


startEle.addEventListener("click", startTimer);
stopEle.addEventListener("click", stopTimer);
resetEle.addEventListener("click", resetTimer);
shortEle.addEventListener("click", shortBreak);
longEle.addEventListener("click", longBreak);

updateTimerDisplay();
