/* Validador de email
    includes() -- verifica se existe tal elemento
    indexOf() -- verifica a posição de tal elemento
    lastIndexOf() -- verifica somente o ponto depois do arroba
*/

function validarEmail(email) {
    if(email.includes("@") && email.includes(".")) {  

        let posicaoArroba = email.indexOf("@"); 
        let posicaoPonto = email.lastIndexOf(".");

        if (posicaoArroba < posicaoPonto) {
            return  true;
        } 

    }

    return false;
}
console.log(validarEmail("user@gmail.com"))
console.log(validarEmail("jonasalbuquerque.c@gmail.com"))
console.log(validarEmail("user@gmailm"))
console.log(validarEmail("usergmail.@gmailcom"))