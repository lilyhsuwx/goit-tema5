
import { alert, error, success } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';

const keyRef = document.getElementById("key");
const btnRef = document.querySelector(".btn");

const keys = ['a', 'm', 'h', 'f', 'i', 'p', 'e', 'z', 'x', 'l'];

let currentKeyIndex = 0;

keyRef.textContent = keys[currentKeyIndex];

document.addEventListener ("keydown", (a) => {
  const pressedKey = a.key.toLowerCase();

  if (pressedKey === keys[currentKeyIndex]) {
    currentKeyIndex += 1

    success ({
      text: `Ти натиснув правильну клавішу!`, 
      delay: 500,
      addClass: 'success'
    });
    

    if (currentKeyIndex === keys.length) {
    success ({
      text: `Ти виграв!`, 
      delay: 500,
      addClass: 'successWin'
    });
    return   
  }

  keyRef.textContent = keys[currentKeyIndex];

  } else {
    error ({
      text: `Неправильна клавіша!`,
      delay: 500,
      addClass: 'error'
      })
  }

});

document.addEventListener('keypress', (e) => {
  e.preventDefault();
});

btnRef.addEventListener ("click", () => {

  currentKeyIndex = 0;
  keyRef.textContent = keys[currentKeyIndex];


  alert({
    text: `Нова гра!`,
    delay: 500,
    addClass: 'alert'
  })

});



/* =================================================== */


import Chart from 'chart.js/auto';
import { readUsedSize } from 'chart.js/helpers';


const ctx = document.getElementById("sales-chart")

const chartData = {
  labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"],
  datasets: [
    {
      label: "Продажі за останній місяць",
      data: [150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350],
      backgroundColor: "#2196f3",
      borderColor: "#2196f3",
      borderWidth: 1,
    },
  ],
};

const config = {
  type: 'line',
  data: chartData,
  options: {}
};

const salesChart = new Chart(ctx, config);