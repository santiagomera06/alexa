/*const numeros = () => {
    const num = [1, 2, 3, 4, 5];  
    const num1 = 2;  
    console.log(num.includes(num1));
}

numeros();

//includes: este es un metodo que devuelve un booleano(true o false)*/


const numeros = () => {
    const num = [1, 2, 3, 4, 5];  
    const num1 = 2;  
    let encontrado = false; 

    for (let i = 0; i < num.length; i++) {
        if (num[i] === num1) { 
            encontrado = true; 
            break; 
        }
    }

    console.log(encontrado); 
}

numeros(); 
