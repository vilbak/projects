let defineName = function (name) {
    this.name = name;
     this.alertName  = function(method){
        console.log(this.name + ' '+ method);
    }
}

let name = new defineName('Walle');

console.log(name.alertName.call(name, 'call'));

console.log(name.alertName.apply(name, ['apply']));


 let newName = name.alertName.bind(name);

console.log(newName('bind'));


let outputTheName = function (name) {
    let that = this;
    that.name = name;
    that.alertName = function (method) {
        console.log(that.name + ' ' + method);
    }
}
let Newname = new outputTheName('Walle');

console.log(name.alertName.apply(name, ['apply'])); 
