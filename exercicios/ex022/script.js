// VARIÁVEIS SIMPLES
let num = document.getElementById('fnum') // Num recebe o conteúdo numérico do input
let lista = document.querySelector('select#flista') // lista recebe o conteudo do select
let res = document.querySelector('div#res') // res recebe o conteúdo do id res

// VETORES - VARIÁVEIS COMPOSTAS
let valores = [] // Análise de dados a partir de um vetor

// FUNÇÕES

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false 
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) { // Verificar se o valor esta em numero ou lista
        window.alert('Tudo ok!')
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
}