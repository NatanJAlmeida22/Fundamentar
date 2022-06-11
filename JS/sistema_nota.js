/* ### Transformar notas escolares
Crie um algoritmo que transforme as notas do sistema númerico para sistema de notas em caracteres tipo A B C

* de 90 para cima   A
* entre 80 - 89     B
* entre 70 - 79     C
* entre 60 - 69     D
* menor que 60      F
*/

function getScoreFinal(score) {
    var scoreFinal = " "
    if (score >= 90 && score <= 100) {
        scoreFinal = "A"
    } else if (score >= 80 && score <= 89) {
        scoreFinal = "B"
    } else if (score >= 70 && score <= 79) {
        scoreFinal = "C"
    } else if (score >= 60 && score <= 69) {
        scoreFinal = "D"
    } else if (score < 60 && score >= 0) {
        scoreFinal = "F"
    } else {
        scoreFinal = "Nota Inválida"
    }
    return scoreFinal
}

console.log(getScoreFinal(101))
console.log(getScoreFinal(-1))
console.log(getScoreFinal(0))
console.log(getScoreFinal(1))
console.log(getScoreFinal(45))
console.log(getScoreFinal(60))
console.log(getScoreFinal(61))
console.log(getScoreFinal(75))
console.log(getScoreFinal(85))
console.log(getScoreFinal(95))