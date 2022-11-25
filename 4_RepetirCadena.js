//cadena
let cadena = "Hola, soy una cadena";

const cantidad = 3;

function repetir(cadena, num){
    let aux="";
    for (let i = 0; i < num; i++) {
        aux+=cadena+" ";
    }
    return aux;
}

console.log(repetir(cadena, cantidad));