Array.prototype.reduce = function (combiner, initialValue) {
  let accumulator = initialValue || this.shift();
  for (let i = 0; i < this.length; i++) {
      accumulator = combiner(accumulator, this[i]);
      
  }
  return accumulator;
}
let  ratings = [2, 3, 1, 4, 5];
    
let findMaxNumber = (function () {

    const max = (ratings) => ratings.reduce((max, current) => max > current ? max : current);

    return max;
}());

console.log(findMaxNumber(ratings));






