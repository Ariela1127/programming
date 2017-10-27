let secondHand = document.querySelector('.second-hand');
let minHand = document.querySelector('.min-hand');
let hourHand = document.querySelector('.hour-hand');

function setDate() {
  let now = new Date();
  let seconds = now.getSeconds();
  let minutes = now.getMinutes();
  let hours = now.getHours();

  let secondsDegrees = calculateDegrees(seconds, 60);
  setTransitionBasedOnDegrees(secondHand, secondsDegrees);
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  let minutesDegrees = calculateDegrees(minutes, 60);
  setTransitionBasedOnDegrees(minHand, minutesDegrees);
  minHand.style.transform = `rotate(${minutesDegrees}deg)`;

  let hoursDegrees = calculateDegrees(hours, 12);
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

let calculateDegrees = (time, max) => ((time / max) * 360) + 90;

// Fix transition bug
let setTransitionBasedOnDegrees = (element, degrees) => {
  if (degrees === 90) {
    element.style.transition = "all 0s";
  } else {
    element.style.transition = "all 0.5s";
  }
}

setInterval(setDate, 1000);