const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".min-hand");
const secHand = document.querySelector(".second-hand");

function setDate() {
  const now = new Date();
  // Get current seconds, minutes, & hours
  let s = now.getSeconds();
  let m = now.getMinutes();
  let h = now.getHours();

  // Calculate the degree shift
  secHand.style.transform = `rotate(${s * 6}deg)`;
  minHand.style.transform = `rotate(${m * 6 + s / 10}deg)`; // 1/10 = 6 deg / 60sec
  hourHand.style.transform = `rotate(${h * 30 + m / 2}deg)`; // 1/2 = 30 deg / 60min
}
setInterval(setDate, 1000);
