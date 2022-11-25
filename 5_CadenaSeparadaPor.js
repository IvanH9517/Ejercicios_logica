//cadena
let cadena = "Hola! soy una cadena";

//caracter
let caracter = ",";

function separar(cadena, caracter){
    let aux = "";
    cadena.split("").forEach(letra => {
        aux+=letra+caracter;
    });
    return aux;
}

console.log(separar(cadena, caracter));