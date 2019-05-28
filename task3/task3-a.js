 let button = document.querySelector("button");

 button.onclick  = () =>{
     let timer;
     timer &&clearTimeout(timer);
     timer = setTimeout(()=>{console.log("Hello world")},5000)
 };                             