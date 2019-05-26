

let name = 'Walle';



function showName(name) {
    this.name = name
    setTimeout(() => {
        console.log(this.name)
       
    }, 0)
}




showName()