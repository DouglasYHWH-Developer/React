/********************************Aula 1********************************************* */
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

//name = "teste"; // Uncaught TypeError: Assignment to constant variable.

/*********************************Aula  2******************************************** */

// 2- arrow function
const sum = function sum(a, b){ // função normal ex.: funciton sum(){}
    return a + b;
}

const arrowSum = (a, b) => { // pode ser resumida em (a, b) => a + b;
    return a+ b
}

console.log(sum(5,5));
console.log(arrowSum(5,5));

const greeting = (name) => {
    if(name){
        return `Olá ${name} !`
    }else{
        return 'Olá!'
    }
}
console.log(greeting('Douglas'))
console.log(greeting())

const testeArrow = () => console.log("testou!")
testeArrow();

// this na arrow function

//1 - → “Não tenho this, vou pegar o do meu pai.”
    const user1 = {
    name: "Theo",
    sayUserName(){
        setTimeout(() => {
            console.log(this)
            console.log(`Username: ${this.name}`)
        }, 500)
    }
}

//user1.sayUserName()

// 2- Self: “Copiei o this do meu pai numa variável e uso isso depois.”
const user2 = {
    name: "Theo",
    sayUserName(){
        var self = this
        setTimeout(function(){
            console.log(self)
            console.log(`Username: ${self.name}`)
        }, 500)
    }
}

//user2.sayUserName()

// 3- “Forço essa função a sempre ter esse this, independente de quem chamar.”

const user3 = {
    name: "Theo",
    sayUserName(){
        
        setTimeout(function(){
            console.log(this)
            console.log(`Username: ${this.name}`)
        }.bind(this), 500)
    }
}

//user3.sayUserName()

/**********************************Aula 3******************************************* */

// filter

const arr = [1, 2, 3, 4, 5];

console.log(arr)

const highNumbers = arr.filter((n) => {
    if(n >= 3){
        return n
    }
})
console.log(highNumbers)

const users = [
    {name:"Douglas", available: true},
    {name:"Pedro", available: false},
    {name:"João", available: false},
    {name:"Marcos", available: true},
]

const availableUser = users.filter((user) => user.available)
const notAvailableUser = users.filter((user) => !user.available)

console.log(availableUser)
console.log(notAvailableUser)