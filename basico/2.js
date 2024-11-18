let boton = document.querySelector('#ok');
boton.addEventListener('click', () => {
    let inicio = document.querySelector('#inicio').value;
    let fin = document.querySelector('#fin').value;
    llenarArreglo(inicio,fin)
})

function llenarArreglo(inicio,fin) {
    let numeros = [];
    for (let i = inicio; i <= fin; i++){
        numeros.push(i);//numeros[i]=i
    }
    recorrerArreglo(numeros);
}
function recorrerArreglo(numeros) {
    numeros.forEach(numero => {
        console.log(numero)
    })
}
llenarArreglo();
/*function pares() {
    const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];  
    let contador = 0;
    for (let i = 0; i < num.length; i++) {
        if (num[i] % 2 === 0) {
            contador++;
        }
    }
    console.log(contador);
}
pares();*/