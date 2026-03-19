// Pegar o número do usuário
let fnum = Number(prompt("Digite um número:"))

// Chamar a função
function fatorial(n){
    if(n < 0 || isNaN(n)) {
        return "Valor inválido"
    } 
    if(n === 1 || n === 0){
        return 1
    } else {
        return n * fatorial(n - 1)
    }
}

// Chamar a função e exibir o resultado
console.log(`Fatorial de ${fnum} é: ${fatorial(fnum)}`)





