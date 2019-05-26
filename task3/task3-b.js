(function () {
    let taskB = document.querySelector(".task-b");

    let timer;

    taskB.addEventListener('click', () => {
        if (timer) {
            clearInterval(timer);
        } else {
            timer = setInterval(() => {
                console.log("You are welcome")
            }, 3000)
        }
    })
})();