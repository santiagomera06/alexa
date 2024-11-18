/*function contarPalabras() {
    const cadena = "Hola mundo ";  
    const palabras = cadena.split(' ');
    console.log(palabras.length);
}
contarPalabras();
//split: es una funcion la cual esta divide una cadena de texto en un arreglo */

function contarPalabras() {
    const cadena = "Hola mundo ";  
    let contador = 0;              
    let palabra = false;

    // Recorremos cada carácter de la cadena
    for (let i = 0; i < cadena.length; i++) {
        const caracter = cadena[i];

        // Si encontramos un espacio
        if (caracter === ' ') {
            if (palabra) {
                contador++;
                palabra = false;  
            }
        } else {
            palabra = true; 
        }
    }

    if (palabra) {
        contador++;
    }
    console.log(contador);  
}
contarPalabras();  

