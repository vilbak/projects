let defineName = function (name) {
    this.name = name;
}

function add(op1, op2) {
    this.name = this.name || "Human";
    return this.name + " can count to " + (op1 + op2);
}

let voltron = new Robot("Voltron");

console.log(add.call(voltron,1,2));