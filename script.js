const startEl = document.getElementById("start");
const stopEl = document.getElementById("stop");
const resetEl = document.getElementById("reset");
const timerEl = document.getElementById("timer");

let interval;
let timeLeft = 1500;

const updateTimer = function () {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  timerEl.innerHTML = formattedTime;
};

const startTimer = function () {
  startEl.disabled = true;
  interval = setInterval(function () {
    timeLeft--;
    updateTimer();
    if (timeLeft === 0) {
      clearInterval(interval);
      alert("Time's up");
      timeLeft = 1500;
      startEl.disabled = false;
    }
  }, 1000);
};

const stopTimer = function () {
  clearInterval(interval);
  startEl.disabled = false;
};
const resetTimer = function () {
  clearInterval(interval);
  timeLeft = 1500;
  startEl.disabled = false;
  updateTimer();
};

startEl?.addEventListener("click", startTimer);
stopEl?.addEventListener("click", stopTimer);
resetEl?.addEventListener("click", resetTimer);
