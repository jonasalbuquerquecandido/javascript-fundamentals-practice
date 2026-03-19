// Pegar a palavra do usuário
let palavra = String(prompt("Digite a palavra para verificarmos:"))

// Verificar se é palindromo
function palindromo(n) {

    let invertida = n.split("").reverse().join("")

    if(n === invertida) {
        alert(`A palavra ${n} é um PALÍNDROMO`)
    } else {
        alert(`A palavra ${n} NÃO é um PALÍNDROMO`)
    }
}
palindromo(palavra)

/* Criar a variável para a comparação 
.split("") - transforma uma string em um array
.reverse() - inverte a orde dos elementos de um array
.join("") - junta os elementos de um array em uma string
*/