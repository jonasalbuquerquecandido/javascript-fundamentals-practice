// Pegar o número do usuário
let fatnum = Number(window.prompt("Digite um número"));

// Chamar a função
function fatorial(n) { // n = fatnum
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * fatorial(n - 1); 
    }
}

// Chamar a função e exibir o resultado
console.log(fatorial(fatnum)); 
alert("O fatorial é: " + fatorial(fatnum));
