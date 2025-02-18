'use strict'

const hours = document.querySelector('.hours')
const minutes = document.querySelector('.minutes')
const seconds = document.querySelector('.seconds')

function clock() {
  const hrs = new Date().getHours()
  const min = new Date().getMinutes()
  const sec= new Date().getSeconds()
  // console.log(`${hrs}:${min}:${sec}`);
  hours.innerHTML = hrs
  minutes.innerHTML = min
  seconds.innerHTML = sec
  }

  setInterval(clock,1000)