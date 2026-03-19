// 🔑 FÓRMULAS DECORAR

// 1. Operações básicas
let a = 10, b = 3
console.log(a + b) // Soma
console.log(a - b) // Subtração
console.log(a * b) // Multiplicação
console.log(a / b) // Divisão
console.log(a % b) // Módulo (resto)

// 2. Fatorial
function fatorial(n) {
  if (n <= 1) return 1
  return n * fatorial(n - 1)
}
console.log(fatorial(5)) // 120

// 3. Fibonacci
function fibonacci(n) {
  if (n < 2) return n
  return fibonacci(n-1) + fibonacci(n-2)
}
console.log(fibonacci(6)) // 8

// 4. Média aritmética
let valores = [10, 20, 30]
let media = valores.reduce((a,b)=>a+b) / valores.length
console.log(media) // 20

// 5. Pitágoras
let a2 = 3, b2 = 4
let c = Math.sqrt(a2**2 + b2**2)
console.log(c) // 5

// 6. Potenciação
console.log(2**3) // 8 → 2^3

// 📘 CONSULTAR

// Combinações
function combinacao(n,k){
  return fatorial(n) / (fatorial(k) * fatorial(n-k))
}
console.log(combinacao(5,2)) // 10

// Logaritmo
console.log(Math.log10(100)) // log base 10 → 2

// Média ponderada
let notas = [7, 8, 9]
let pesos = [2, 3, 5]
let mediaPonderada = notas.map((n,i)=>n*pesos[i]).reduce((a,b)=>a+b) / pesos.reduce((a,b)=>a+b)
console.log(mediaPonderada) // 8.2

// Probabilidade
let favoraveis = 2, possiveis = 8
console.log(favoraveis/possiveis) // 0.25 → 25%

// Trigonometria
console.log(Math.sin(Math.PI/2)) // sen(90°) = 1
console.log(Math.cos(Math.PI))   // cos(180°) = -1
