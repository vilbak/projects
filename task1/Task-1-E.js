//названия 
let getMaxNumber = (array) =>{
    let newArr = array;
 let filterTheArray = (arr) => (arr.reduce((max ,current) => max > current ? max : current )) ;
 
  return filterTheArray(newArr);
}

let ratings = [2,3,1,4,5];

console.log(getMaxNumber(ratings));