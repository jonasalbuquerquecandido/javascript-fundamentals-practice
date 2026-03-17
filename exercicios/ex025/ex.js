// POSSO DIRIGIR?
const idade = (Number(prompt("Digite a sua idade:")))
const cnh = (prompt("Se você tem Habilitação digite [S] ou [N] para não: "))

if((idade >= 18) && (cnh.toUpperCase() === "S")) { // .toUpperCase aceita tao maiúscula quanto minúscula
    console.log("Pode dirigir!") 
} else {
    console.log("Não pode dirigir.")
}



