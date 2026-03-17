// VALIDADOR DE USUÁRIO E SENHA
let usuario = (prompt("Digite o nome de usuário:"))
let senha = (prompt("Digite a senha: "))

if((usuario == "admin") && (senha == "1234")){
    window.alert("Acesso liberado")
} else {
    window.alert("Acesso negado!")
}