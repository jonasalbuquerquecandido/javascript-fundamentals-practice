// 📘 Exercícios de fixação JS

// 🔎 Globais
console.log(isNaN("abc"))          // true → não é número
console.log(parseInt("123"))       // 123 → converte para inteiro
console.log(parseFloat("12.34"))   // 12.34 → converte para decimal
console.log(typeof true)            // "number"
console.log(JSON.stringify({a:1})) // '{"a":1}' → objeto em string
console.log(JSON.parse('{"a":1}')) // {a:1} → string em objeto
console.log(Math.round(4.9))       // 5 → arredonda
console.log(Math.floor(4.6))       // 4 → arredonda para baixo
console.log(Math.ceil(4.1))        // 5 → arredonda para cima
console.log(Math.random())         // número aleatório entre 0 e 1

// 📊 Strings
let comida = " Macarrão "
console.log(comida.toLowerCase())  // " macarrao "
console.log(comida.toUpperCase())  // " MACARRAO "
console.log(comida.trim())         // "Macarrao" 
console.log(comida.includes("car"))// true → contém "car"
console.log("casa".split(""))      // ["c","a","s","a"]
console.log("casa".replace("a","o")) // "cosa"

// 📚 Arrays
let numeros = [1,2,3,4]
numeros.push(5,6,7,8)                    // adiciona 5 → [1,2,3,4,5]
numeros.pop()                      // remove último → [1,2,3,4]
numeros.unshift(0)                 // adiciona no início → [0,1,2,3,4]
numeros.shift()                    // remove primeiro → [1,2,3,4]
numeros.forEach(x => console.log(x)) // imprime cada número
console.log(numeros.map(x => x*2)) // [2,4,6,8] → dobra cada número
console.log(numeros.filter(x => x>2)) // [3,4] → maiores que 2
console.log(numeros.reduce((a,b)=>a+b)) // 10 → soma todos
console.log(numeros.find(x => x>2)) // 3 → primeiro maior que 2
console.log(numeros.includes(2))   // true → contém 2
console.log(numeros.sort())        // [1,2,3,4] → ordena

// 🧩 Objetos
let pessoa = {nome:"Jonas", idade:30}
console.log(Object.keys(pessoa))   // ["nome","idade"]
console.log(Object.values(pessoa)) // ["Jonas",30]
console.log(Object.entries(pessoa))// [["nome","Jonas"],["idade",30]]
