let button = document.querySelector(".task-a");

button.onclick = () => {
    let timer;
    timer && clearTimeout(timer);
    timer = setTimeout(() => {
        console.log("Hello world")
    }, 5000)
};