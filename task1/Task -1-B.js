Array.prototype.map = function (funcMap) {
    let mapArr = [];
    for (let i = 0; i < this.length; i++) {
        mapArr.push(funcMap(this[i], i));
    }
    return mapArr;
};
let newReleases = [{
    "id": 70111470,
    "title": "Die Hard",
    "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
    "url": "http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": [4.0],
    "bookmark": []
}];

let getId = (array) => {
    let newArray = array;

    let transformArray = (arr) => arr.map(({
        id,
        title
    }) => ({
        id,
        title
    }))
    return transformArray(newArray);

}
console.log(getId(newReleases));