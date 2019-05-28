let randomNumber = (min, max) => (Math.round(Math.random() * (max - min) + min));

const arrayOfPromises = [];

for (let index = 0; index < randomNumber(1, 10); index++) {
    const promise = new Promise((resolve) => {
        let time = randomNumber(100, 1000);
        setTimeout(() => {
            console.log("function " + index + " time " + time);
            resolve("done")
        }, time)
    })
    arrayOfPromises.push(promise)
}

Promise.all(arrayOfPromises).then(values => {
    console.log("well done ")
})