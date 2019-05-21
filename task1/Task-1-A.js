
function map(array, funcMap) {
    let mapArr = [];
    for (let i = 0; i < array.length; i++) {
        let result = funcMap(array[i],i,array);
        mapArr.push(result);
    }
    return mapArr;

};
JSON.stringify([1,2,3].map(function(x) { return x + 1; })) === [2,3,4];
