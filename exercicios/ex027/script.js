let nota = Number(prompt("Digite a nota de (0 a 10):").trim());
let frequencia = Number(prompt("Digite a frequência de (0% a 100%):").trim().replace("%", ""));

if ((nota > 10) || (nota < 0) || isNaN(nota)) {
    console.log("NOTA INVÁLIDA! Digite novamente.");
} else if ((frequencia > 100) || (frequencia < 0) || isNaN(frequencia)) {
    console.log("FREQUÊNCIA INVÁLIDA! Digite novamente.");
} else if ((nota >= 6) && (frequencia >= 75)) { 
    console.log("APROVADO!");
} else {
    console.log("REPROVADO");
}



/* 

entrada.trim() → tira espaços extras.

.replace("%", "") → remove o % se o usuário digitou e o espaço vazio.

Number(valor) → transforma em número.

isNaN(frequencia) → garante que não foi digitado algo como "abc%".

*/