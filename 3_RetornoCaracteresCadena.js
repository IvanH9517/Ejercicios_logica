//cadena
let cadena = "Hola, soy una cadena";
//Caracteres a retornar
let cantidad = 11;

function retornoCaracteres(texto, num) {
  let cadenaRetorno = "";
  texto.split("").forEach((letra, index) => {
    if (index <= num - 1) {
      cadenaRetorno += letra;
    }
  });
  return cadenaRetorno;
}

retornoCaracteres(cadena, cantidad);
