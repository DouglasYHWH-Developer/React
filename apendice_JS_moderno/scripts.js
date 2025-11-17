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

/**********************************Aula 4******************************************* */
// map
const products = [
    {name: "Camisa", price: 10.99, category: "Roupas"},
    {name: "Chaleira Elétrica", price: 99.99, category: "Eletro"},
    {name: "Fogão", price: 400, category: "Eletro"},
    {name: "Calça Jeans", price: 50.99, category: "Roupas"},
] 


products.map((product) => {
    if(product.category === "Roupas"){
        product.onsale = true
    }
})

console.log(products)

/**********************************Aula 5******************************************* */

//Template Literals
const userName = 'Matheus';
const age = 30;

console.log("teste")
console.log(`O nome do usuário é ${userName} e ele tem ${age} anos`)

/**********************************Aula 6******************************************* */
// Destructuring

const frutas = ["Maçã", "Laranja", "Mamão"];
const [f1, f2, f3] = frutas;
console.log(f1)
console.log(f2)
console.log(f3)

const produtosDetalhes = {
    name1: "Mouse",
    price: 99.99,
    category: "Periféricos",
    color: "Cinza",
}

const{name1: produtoNome, price, category: produtoCategoria, color} = produtosDetalhes;
console.log(`${produtoNome}, ${price}, ${produtoCategoria}, ${color}`)

/**********************************Aula 8******************************************* */
// Classe

class Product {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    productWithDiscount(discount){
        return this.price * ((100 - discount) / 100)
    }
}

const shirt = new Product("Camisa gola V", 20); 

console.log(shirt.name)     
console.log(shirt.productWithDiscount(10))
console.log(shirt.productWithDiscount(50))

const tenis = new Product("Tênis Nike", 120);
console.log(tenis.productWithDiscount(20))

/*********************************Aula  9******************************************** */

// Herança
class ProductWithAttributes extends Product {
    constructor (name, price, colors){
        super(name, price);
        this.colors = colors;
    }
    showColors(){
        console.log("As cores são: ")
        this.colors.forEach((color) => {
            console.log(color)
        })
    }
}

const hat = new ProductWithAttributes("Chapeu", 29.99, ["Preto", "Azul", "Verde"]);

console.log(hat.name)
console.log(hat.productWithDiscount(15))
hat.showColors()