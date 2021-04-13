const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const newYear = "31 Jan 2022";

function countDown() {
    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    const totalSeconds = (newYearDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;
};

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
};

//initial call
countDown();
setInterval(countDown, 1000);


const heading = document.getElementById("heading")
const text = "New Year Countdown"

let idLetter = 2;
let delay = 100;

function printText() {
    heading.innerText = text.slice(0, idLetter);
    idLetter++;

    if (idLetter > text.length) {
        idLetter = 1;
    }

    setTimeout(printText, delay);
}

printText();

// const color = document.getElementById("heading");

// function random_bg_color() {
//   var x = Math.floor(Math.random() * 256);
//   var y = Math.floor(Math.random() * 256);
//   var z = Math.floor(Math.random() * 256);
//   var heading = "rgb(" + x + "," + y + "," + z + ")";
//   color.innerText = heading;

//   document.body.style.color = "h1";
// }

// setInterval(random_bg_color, 1000); 