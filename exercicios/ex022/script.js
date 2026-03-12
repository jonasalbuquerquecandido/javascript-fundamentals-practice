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
            valores.push(Number(num.value))
            let item = document.createElement('option')
            item.text = `Valor ${num.value} adicionado`
            lista.appendChild(item)
            res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = '' // zera o conteúdo do input após executar a ação
    num.focus() // Faz o ponteiro voltar para o espaço apos realizar a ação
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        // Analisar qual é maior e menor e colocar no console
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadrastados.</p>`
        res.innerHTML += `<p>O maior valor adicionado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor adicionado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A media de todos os valores adicionados é ${media}.</p>`
    }
}