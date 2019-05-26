 (function () {
     let handle = document.querySelector(".task-c");

     let randomTimer;
     let getRandomValue = (min, max) =>
         Math.round(Math.random() * (max - min)) + min;

     let createRandomTimeout = (seconds) => {
         console.log(`You have waited ${seconds} seconds`);
         randomTimer = setTimeout(() => {
             clearTimeout(randomTimer);

         }, seconds * 1000)
     }
     handle.addEventListener('click', () => {
         if (randomTimer) {
             clearTimeout(randomTimer);

         } else {
             createRandomTimeout(getRandomValue(1, 4));
         }
     })
 })();