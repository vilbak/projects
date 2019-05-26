Array.prototype.reduce = function (combiner, initialValue) {
    let accumulator = initialValue || this.shift();
    for (let i = 0; i < this.length; i++) {
        accumulator = combiner(accumulator, this[i]);
    }
    return accumulator;
}

let videos = [{
        "id": 65432445,
        "title": "The Chamber"
    },
    {
        "id": 675465,
        "title": "Fracture"
    },
    {
        "id": 70111470,
        "title": "Die Hard"
    },
    {
        "id": 654356453,
        "title": "Bad Boys"
    }
];

let convertArray = (function () {
    let convert = (arr) => (
        arr.reduce((result, {
            id,
            title
        }) => ({
            ...result,
            [id]: title
        }), {})
    );

    return convert;
}());

console.log(convertArray(videos));