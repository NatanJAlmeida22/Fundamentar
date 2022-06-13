/*
    Fuction() constructor

    * expressão new
    * criar um novo objeto
    * this keyword
*/

function Person(name){
    this.name = name
    this.walk = function () {
        return this.name + " está andando"
    }
}

const natan = new Person("Natan")
const joao = new Person("João")
console.log(natan.walk())
console.log(joao.walk())

let date = new Date("2022-06-13")
console.log(date)