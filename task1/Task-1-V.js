Array.prototype.filter = function (array, funcFilter) {
    let newArr = [];
    for (let i = 0; i <array.length;i++) {
        let result = funcFilter(array[i]);
        if(result){
            newArr.push(array[i]);
        }
       
    }
    return newArr;
};

let arr = [5, 6, 7, 8];

let newArr = arr.filter(arr,num => num >6);

console.log(newArr);