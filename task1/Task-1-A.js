
Array.prototype.map = function (funcMap) {
    let mapArr = [];
    for (let i = 0; i < this.length; i++) {
        mapArr.push(funcMap(this[i], i));
    }
    return mapArr;

};
const array = [1, 2, 3].map(x => x + 1);

console.log(JSON.stringify(array) === '[2,3,4]');