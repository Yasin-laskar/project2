
let button=document.querySelector("#btn");
button.style.borderRadius='10px';
button.style.width='200px';
button.style.height='50px';




button.addEventListener("click" , function(){

let h1=document.querySelector("h1");
let randomColor=randomCOlor();

h1.innerText=randomColor;
h1.style.color=randomColor;

let div=document.querySelector("div");
div.style.background=randomColor;
console.log("color updated");
});
    

  


function randomCOlor(){

    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let color=`rgb( ${red} ,${green} ,${blue})`;
    return color;
}
