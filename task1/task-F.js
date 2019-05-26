Array.prototype.reduce = function (combiner, initialValue) {
    let accumulator = initialValue || this.shift();
    for (let i = 0; i < this.length; i++) {
        accumulator = combiner(accumulator, this[i]);
    }
    return accumulator;
}
const sum1 = [1, 2, 3].reduce((memo, item) => memo + item);
const sum2 = [1, 2, 3].reduce((memo, item) => memo + item, 10);

console.log(sum1 === 6);
console.log(sum2 === 16);