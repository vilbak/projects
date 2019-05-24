
    let textArea = document.querySelector(".textarea");

    let timer;
    textArea.addEventListener('keypress', (event) => {
        clearTimeout(timer);

        timer = setTimeout(() => {
            console.log(event.target.value);
        }, 1000)
    })
