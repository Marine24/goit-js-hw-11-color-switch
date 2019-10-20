const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548"
];
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const body = document.querySelector("body");
const btnStart = document.querySelector('[data-action="start"]');
const btnStop = document.querySelector('[data-action="stop"]');

const onClick = {
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }
    this.Timer = setInterval(() => {
      this.isActive = true;
      body.style.backgroundColor = colors[randomIntegerFromInterval(0, 6)];
    }, 1000);
  },
  stop() {
    clearInterval(this.Timer);
    this.isActive = false;
  }
};

btnStart.addEventListener("click", onClick.start.bind(onClick));
btnStop.addEventListener("click", onClick.stop.bind(onClick));
