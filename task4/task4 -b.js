let delayPromise = (duration, value) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value);
        }, duration)

    })
};

delayPromise(3000, 10).then((result) => {
    console.log(result);
    return result + 2;
}).then((result) => {
    console.log(result);
    return result + 2;
}).then((result) => {
    console.log(result);
    return delayPromise(2000, result + 2)
}).then((result) => {
    console.log(result);
})