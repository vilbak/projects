let randomNumber = (min, max) => (Math.round(Math.random() * (max - min)));

let generateFunctions = (index,min,max) =>{
    new Promise((resolve ,reject) =>{
        let time =randomNumber(min,max);
        setTimeout(()=>{
            console.log("function" +index +"time" +time) ;

            resolve("all good")

        },time)
    })
}