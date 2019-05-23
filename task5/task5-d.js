doAsync().then((result) => {
    throw new Error('nope');
}).catch((err) => {
    console.log(err)
})