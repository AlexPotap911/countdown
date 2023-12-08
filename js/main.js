const currentYear = new Date().getFullYear();
const newYear = new Date(`January 01 ${currentYear + 1} 00:00:00`);

const year = document.querySelector('#year');
const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const countdown = document.querySelector('#countdown');
const preloader = document.querySelector('#preloader');

year.innerText = currentYear + 1; 

function countDown() {
  const currentTime = new Date();
  const diff = newYear - currentTime;

  const leftDays = Math.floor(diff / 1000 / 60 / 60 / 24);
  const leftHours = Math.floor(diff / 1000 / 60 / 60) % 24;
  const leftMinutes = Math.floor(diff / 1000 / 60) % 60;
  const leftSeconds = Math.floor(diff / 1000) % 60;

  days.innerText = leftDays < 10 ? "0" + leftDays : leftDays;
  hours.innerText = leftHours < 10 ? "0" + leftHours : leftHours;
  minutes.innerText = leftMinutes < 10 ? "0" + leftMinutes : leftMinutes;
  seconds.innerText = leftSeconds < 10 ? "0" + leftSeconds : leftSeconds;
} 
countDown();

setInterval(countDown, 1000);

setTimeout(function () {
  countdown.style.display = "flex";
  preloader.remove();
  year.style.opacity = "0.2";
}, 3000);

