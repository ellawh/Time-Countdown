
const userInput = window.prompt("Enter Date (1 Jan 2022 etc):");

const yearsEl = document.getElementById("years");
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const BD = "29 Nov 2021";

function countdown() {
    const date = new Date(userInput);
    const currentDate = new Date();

    const totalSeconds = (date - currentDate) / 1000;

    const years = Math.floor(totalSeconds / 3600 / 24 / 365);
    const days = Math.floor(totalSeconds / 3600 / 24) % 365;
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    yearsEl.innerHTML = formatTime(years);
    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);