Array.prototype.filter = function (funcFilter) {
    let newArr = [];
    for (let i = 0; i <this.length;i++) {
        funcFilter(this[i],i) && newArr.push(this[i]);
    }
    return newArr;
};

let arr = [5, 6, 7, 8];

const filteredArray = [1, 2, 3].filter(x => x > 2);

    console.log(JSON.stringify(filteredArray) === "[3]");
