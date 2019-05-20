 //Task 1-A
 /*Array.prototype.ma = function (array, funcMap) {
     let mapArr = [];
     for (let i = 0; i < array.length; i++) {
         let result = funcMap(array[i]);
         mapArr.push(result);
     }
     return mapArr;

 };

 let arr = [5, 6, 7, 8];

 let newArr = arr.ma(arr, num => num ** 2);

 console.log(newArr);*/
 //////////////////////////////

 //Task 1-Б
 /*let newReleases = [{
     "id": 70111470,
     "title": "Die Hard",
     "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
     "url": "http://api.netflix.com/catalog/titles/movies/70111470",
     "rating": [4.0],
     "bookmark": []
 }];

 function transform(arr) {
     let transformArray = arr.map((id,title) =>{id,title});
         return transformArray
     };   
 
 console.log(transform(newReleases));*/

 //Task 1-В
 /*Array.prototype.filte = function (array, funcFilter) {
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

 let newArr = arr.filte(arr,num => num >6);

 console.log(newArr);*/

 //Task 1-Г

 /*let  newReleases = [
        {
            "id": 70111470,
            "title": "Die Hard",
            "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": [4.0],
            "bookmark": []
        },
        {
            "id": 654356453,
            "title": "Bad Boys",
            "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": [5.0],
            "bookmark": [{ id: 432534, time: 65876586 }]
        },
        {
            "id": 65432445,
            "title": "The Chamber",
            "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": [4.0],
            "bookmark": []
        },
        {
            "id": 675465,
            "title": "Fracture",
            "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": [5.0],
            "bookmark": [{ id: 432534, time: 65876586 }]
        }
    ];

    function rating(elements){
        //let getId = (elements) => (elements.filter(({rating}) => rating.every(score => score >5)).map(({ id }) => id))

        let getId = (elements) =>(elements.filter(({rating}) => rating.every(score => score > 5).map(({id}) => id)));
        return getId;
    }

    console.log(rating(newReleases)); */

 // Task 1-D
 /*Array.prototype.red = function (array, funcRed) {
     let accumulator = 0;
     for (i = 0; i < array.length; i++) {
         accumulator = funcRed(accumulator, arr[i]);
         return accumulator;
     }
 } */

 //Task 1-E

 
 let ratings = [2,3,1,4,5];

 let find = function (){
     let max = (ratings) => ratings.reduce((curr,max) => max > curr)
 }