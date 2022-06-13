// 1. Declare uma variável de nome weight
let weight 
// 2. Que tipo de dado é a variável acima?
console.log(typeof weight)
/*
    3. Declare uma variável e atribua valores para cada um dos dados:
        * name: String
        * age: Number (interger)
        * stars: Number (float)
        * inSubscribed: Boolean
*/
let name = "Natan"
let age = 22
let stars = 4.8
let inSubscribed = true
/*
    4. A variável student abaixo é de que tipo de dados?
    4.1 Atributos a ela as mesmas propriedades e valores do exercício 3.
    4.2 Mostre no console a seguinte mensagem;
        <name> de idade <age> pesa <weight> kg.

        Atenção, substiua <name> <age> e <weight> pelos valores de cada propriedade do objeto
*/

let student = {
    name: "Natan",
    age: 22,
    weight: 66.8
}
console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg`)
/*
5. Declare uma variável do tipo Array, de nome students e atributa a ela nenhum valor, ou seja, somente o Array vazio
*/

// let students = []
/*
    6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)
    7. Coloque no console o valor da posição zero do Array acima
    8. Crie um novo student e coloque na posição 1 do Array students
*/
const jonh = {
    name: "Jonh",
    age:23,
    weight: 74.8,
    inSubscribed: true
}

let students = [student , jonh]
console.log(students[1])