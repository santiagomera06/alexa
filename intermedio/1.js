/*const invertirArreglo = () => {
    const num = [1, 2, 3, 4, 5];  
    const invertido = num.reverse();
    console.log(invertido);

};
invertirArreglo();
// reverse es un metodo que invierte el orden de un elemento */


function invertir(num) {
    let invertir = []; 
    let longitud = num.length; 

    for (let i = longitud - 1; i >= 0; i--) {
        invertir.push(num[i]);
    }
    return invertir;
}
let miArreglo = [1, 2, 3, 4, 5];
let invertir = invertir(miArreglo);
console.log(invertir); 
// push:este es un metodo que añade elementos a un arreglo*/