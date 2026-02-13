// Condições Multiplas
// Estruturas para situações pontuais

var agora = new Date()
var diaSem = agora.getDay()

/*
    0 = domingo
    1 = segunda
    2 = terça
    4 = quarta
    5 = quinta
    6 = sábado
*/

console.log(diaSem)

switch(diaSem) {
    case 0:
        console.log('Domingo')
        break // finaliza nessa condição, pelo contrário ficará repetindo até o final
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('[ERRO] Dia Inválido!')
        break // Opcional
}