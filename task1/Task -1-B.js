let newReleases = [{
    "id": 70111470,
    "title": "Die Hard",
    "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
    "url": "http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": [4.0],
    "bookmark": []
}];

let ids = (array) => {
    let transformArray = array;

    let newArray = (element) => element.map(({
        id,
        title
    }) => ({
        id,
        title
    }))
    return newArray(transformArray);

}
console.log(ids(newReleases));