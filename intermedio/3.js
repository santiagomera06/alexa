
function nombresMayusculas(nombres) {
    const resultado = [];
    for (let i = 0; i < nombres.length; i++) {
      resultado.push(nombres[i].toUpperCase());
    }
    return resultado;
}
const nombres = ['Ana', 'Luis', 'Pedro'];
const resultado = nombresMayusculas(nombres);
console.log(resultado); 


nombresMayusculas();
