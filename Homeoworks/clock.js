"use strict";

const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const noon = document.querySelector(".noon");

function clock() {
  const date = new Date();
  const hrs = date.getHours() < 12 ? `0${date.getHours()}` : date.getHours();
  const min =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  const sec =
    date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
  // console.log(`${hrs}:${min}:${sec}`);
  hours.innerHTML = hrs;
  minutes.innerHTML = min;
  seconds.innerHTML = sec;
  noon.innerHTML = date.getHours() < 12 ? "AM" : "PM";
}

setInterval(clock, 1000);
