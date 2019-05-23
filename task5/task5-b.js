function anAsyncCall() {
    return doSomethingAsync.then((result) => {
        somethingComplicated();
    })
};