setInterval(setClock, 1000);

const hourHand = document.querySelector("[date-hour]");
const hourMin = document.querySelector("[date-minute]");
const hourSec = document.querySelector("[date-second]");

function setClock() {
  const curDate = new Date();
  const seconds = curDate.getSeconds() / 60;
  const minutes = (seconds + curDate.getMinutes()) / 60;
  const hours = (minutes + curDate.getHours()) / 12;
  setRotate(hourHand, hours);
  setRotate(hourMin, minutes);
  setRotate(hourSec, seconds);
}

function setRotate(el, rotate) {
  el.style.setProperty("--rotation", rotate * 360);
}
