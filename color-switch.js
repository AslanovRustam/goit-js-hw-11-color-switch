const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
  '#765268',
  '#658463',
  '#235856',
  '#234567',
];
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');
const bodyEl = document.querySelector('body');
let switchInterval = '';

startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);

function swither() {
    bodyEl.style.backgroundColor = colors[randomIntegerFromInterval(0,colors.length - 1)]
}

function onStartBtnClick() {
    startBtn.disabled = true;
    stopBtn.disabled = false;
    switchInterval = setInterval(swither, 1000)
}

function onStopBtnClick() {
    startBtn.disabled = false;
      stopBtn.disabled = true;
    clearInterval(switchInterval)
}