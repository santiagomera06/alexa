/*const calcularPromedio = () => {
    const num = [10, 20, 30, 40, 50];  
    const suma = num.reduce((acumulado, num) => acumulado + num, 0);
    const promedio = suma / num.length;
    console.log(promedio);
}

calcularPromedio();*/
const calcularPromedio = () => {
    const inputNumeros = document.getElementById('numeros').value;
    
    const num = inputNumeros.split(',').map(Number);
    
    const suma = num.reduce((acumulado, numero) => acumulado + numero, 0);
    const promedio = suma / num.length;
    
    
    document.getElementById('resultado').textContent = promedio;
}

 