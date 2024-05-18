let startBtn = document.getElementById('start');
let pauseBtn = document.getElementById('pause');
let resetBtn = document.getElementById('reset');
let lapBtn = document.getElementById('lap'); 

let hour = 0;
let minute = 0;
let second = 0;
let count = 0;

let timer; 

startBtn.addEventListener('click', function () {
    timer = setInterval(stopWatch, 10); 
});

pauseBtn.addEventListener('click', function () {
    clearInterval(timer); 
});

resetBtn.addEventListener('click', function () {
    clearInterval(timer);
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;
    updateDisplay();
    clearLaps(); 
});

lapBtn.addEventListener('click', function () {
    addLap();
});

function stopWatch() {
    count++;

    if (count == 100) {
        second++;
        count = 0;
    }

    if (second == 60) {
        minute++;
        second = 0;
    }

    if (minute == 60) {
        hour++;
        minute = 0;
        second = 0;
    }

    updateDisplay();
}

function updateDisplay() {
    document.getElementById('hr').textContent = formatTime(hour);
    document.getElementById('min').textContent = formatTime(minute);
    document.getElementById('sec').textContent = formatTime(second);
    document.getElementById('count').textContent = formatTime(count);
}

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}

function addLap() {
    const lapsList = document.getElementById('laps');
    const lapTime = `${formatTime(hour)}:${formatTime(minute)}:${formatTime(second)}:${formatTime(count)}`;
    const lapItem = document.createElement('li');
    lapItem.textContent = lapTime;
    lapsList.appendChild(lapItem);
}

function clearLaps() {
    const lapsList = document.getElementById('laps');
    lapsList.innerHTML = ''; 
}
