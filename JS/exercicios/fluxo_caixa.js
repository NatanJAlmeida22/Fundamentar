let family = {
    // Rendimentos
    incomes: [2500, 3200, 250, 360.45],
    // Despesas
    expenses: [320.34, 128, 176.87, 1450.00]
}

function sum(array) {
    let total = 0
    for (let i in array) {
        total += array[i]
    }

    return total
}

function calcBalance(tot1, tot2) {
    let balance = 0
    balance = tot1 - tot2

    const difference = balance > 0 ? `O saldo da famíla é de ${balance} é positivo` : `O saldo da família é de ${balance} é negativo`

    return difference
    
}



let totIncomes = sum(family.incomes)
let totExpenses = sum(family.expenses)

console.log(calcBalance(totIncomes, totExpenses));