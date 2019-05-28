let promise = () => {
    let time = Math.round(Math.random() * 3000);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            (time < 2000) ? resolve('ok'): reject(new Error());
        })
    })
};

let newPromise = promise();
newPromise.then((result) => {
    console.log(result);
}).catch((err) => {
    console.log('Error', err);
})