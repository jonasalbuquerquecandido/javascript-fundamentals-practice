// 1. Número
let idade = 25;
console.log(typeof idade); // "number"

// 2. String
let nome = "Jonas";
console.log(typeof nome); // "string"

// 3. Boolean
let ativo = true;
console.log(typeof ativo); // "boolean"

// 4. Undefined
let indefinido;
console.log(typeof indefinido); // "undefined"

// 5. Null
let vazio = null;
console.log(typeof vazio); // "object" (peculiaridade do JS)

// 6. Objeto
let pessoa = { nome: "Ana", idade: 30 };
console.log(typeof pessoa); // "object"

// 7. Array
let lista = [1, 2, 3];
console.log(typeof lista); // "object"
console.log(Array.isArray(lista)); // true

// 8. Função
function saudacao() { return "Olá!"; }
console.log(typeof saudacao); // "function"

// 9. Symbol
let simbolo = Symbol("id");
console.log(typeof simbolo); // "symbol"

// 10. BigInt
let grandeNumero = 123456789012345678901234567890n;
console.log(typeof grandeNumero); // "bigint"

//conversão
// String para número
let str = "123";
let num = Number(str);
console.log(num);            // 123
console.log(typeof num);     // "number"

// Número para string
let valor = 456;
let strValor = String(valor);
console.log(strValor);       // "456"
console.log(typeof strValor);// "string"

// Boolean para número
let bool = true;
let numBool = Number(bool);
console.log(numBool);        // 1
console.log(typeof numBool); // "number"

