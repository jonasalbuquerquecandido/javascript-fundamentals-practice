// Estruturas Condiçionais aninhadas

var agora = new Date()
var horas = agora.getHours() // PEgar as horas atuais que estão rodando no sistema
console.log(`Agora são exatamente ${horas} horas.`)

if (horas > 12) {
    console.log(`Bom dia.`) 
} else if (horas <= 18) {
    console.log(`Boa tarde`)
} else {
    console.log(`Boa noite.`)
}
