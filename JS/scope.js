/*
Scope:
    Escopo determina a visiblidade de alguma variável no JS
    Nem sempre as variáveis estão visíveis para o JS
Block statement
    Vamos iniciar um bloco
    {
        Aqui dentro é um bloco e posso colocar qualquer código
    } Aqui fechamos o bloco


O bloco, também criará um novo escopo. Chamamos de "block-scoped"
*/

// var é global e, também local
// hoisting
console.log("> existe x antes do bloco? ", x)
{
    var x = 0
}
console.log("> existe x antes do bloco? ", x)

// let e const
// const e let são locais e só funcionam no escopo onde foi criada
const y = 1
{
    const y = 0
    console.log("> existe y", y)
}
console.log("> existe y antes do bloco? ", y)