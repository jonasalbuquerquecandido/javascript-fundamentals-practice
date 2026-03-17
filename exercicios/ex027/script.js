let nota = (Number.trim().prompt("Digite a nota de (0 a 10): "))
let frequencia = (Number.trim().replace("%", "").prompt("Digite a frequência de (0% a 100%):"))

if((nota > 10) || (nota < 0)) {
    alert("NOTA INVÁLIDA! Digite novamente.")
}

if((isNaN(frequencia) > 100) || (frequencia < 0)) {
    alert("FREQUENCIA INVÁLIDA! Digite novamente.")
}

if((nota >= 6) && (frequencia >= 75)) { 
    alert("APROVADO!")
} else {
    alert("REPROVADO")
}

/* 

entrada.trim() → tira espaços extras.

.replace("%", "") → remove o % se o usuário digitou e o espaço vazio.

Number(valor) → transforma em número.

isNaN(frequencia) → garante que não foi digitado algo como "abc%".

*/