// ANOTAÇÕES PARA A FIXAÇÃO E CONFERÊNCIA

// 📘 Funções e métodos essenciais em JavaScript

// 🔎 Globais
isNaN(valor)        // Verifica se NÃO é número
parseInt(string)    // Converte string para número inteiro
parseFloat(string)  // Converte string para número decimal
typeof valor        // Retorna o tipo do dado
JSON.stringify(obj) // Converte objeto em string JSON
JSON.parse(string)  // Converte string JSON em objeto
Math.round(num)     // Arredonda para o inteiro mais próximo
Math.floor(num)     // Arredonda para baixo
Math.ceil(num)      // Arredonda para cima
Math.random()       // Gera número aleatório entre 0 e 1

// 📊 Strings
"texto".toLowerCase()       // Converte para minúsculas
"texto".toUpperCase()       // Converte para maiúsculas
" texto ".trim()            // Remove espaços extras no início/fim
"macarrao".includes("car")  // Verifica se contém trecho
"casa".split("")            // Quebra string em array → ["c","a","s","a"]
"casa".replace("a","o")     // Substitui parte da string
"casa".join("")             // Junta os elementos de um array em uma string

// 📚 Arrays
let numeros = [1,2,3]
numeros.push(4)             // Adiciona no fim
numeros.pop()               // Remove do fim
numeros.unshift(0)          // Adiciona no início
numeros.shift()             // Remove do início
numeros.forEach(x => x*2)   // Percorre todos os elementos
numeros.map(x => x*2)       // Cria novo array transformado
numeros.filter(x => x>1)    // Cria novo array filtrado
numeros.reduce((a,b)=>a+b)  // Reduz array a um único valor
numeros.find(x => x>2)      // Retorna o primeiro que atende condição
numeros.includes(2)         // Verifica se contém valor
numeros.sort()              // Ordena elementos
numeros.split()
numeros.reverse()           // Inverte a orde dos elementos de um array

// 🧩 Objetos
let obj = {nome:"Jonas", idade:30}
Object.keys(obj)            // Retorna todas as chaves → ["nome","idade"]
Object.values(obj)          // Retorna todos os valores → ["Jonas",30]
Object.entries(obj)         // Retorna pares chave-valor → [["nome","Jonas"],["idade",30]]
