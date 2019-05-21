let maxNumber = (array) =>{
    let newArr = array;
 let redu = (element) => (element.reduce((max ,current) => max > current ? max : current )) ;
 
  return redu(newArr);
}

let ratings = [2,3,1,4,5];

console.log(maxNumber(ratings));