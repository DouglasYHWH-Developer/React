// 1 - var, let e const
var x = 10;
var y = 15;

if(y > 10){// var vaz informações pois te escopo global
    var x = 5
    console.log(x)
}

console.log(x)

let a = 10;
let b = 15;

if(b > 10){// let tem escopo de bloco, pode ser alterada, mas é mais seguro do que var
    let a = 5 
    console.log(a)
}

console.log(a)

let i = 100

for(let i = 0; i < 5; i++){
    console.log(i)
}
console.log(i)

function logName(){
    const name = "Douglas";
    console.log(name)
}

const name = "Pedro";

logName()
console.log(name)

name = "teste"; // Uncaught TypeError: Assignment to constant variable.