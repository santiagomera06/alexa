function reemplazarElemento ()  {
    let num = [1, 2, 3, 4, 5]; 
    const valorAReemplazar = 3;  
    const nuevoValor = 9;  
    num = num.map(num => num === valorAReemplazar ? nuevoValor : num);
    console.log(num);
}

reemplazarElemento();
/*
function reemplazar(arreglo, indice, nuevoValor) {
    arreglo[indice] = nuevoValor;
    return arreglo;
    
  }
  let arreglo = [1, 2, 3, 4, 5];
    let indice = 3;
    let nuevoValor = 9;
    reemplazar(arreglo, indice, nuevoValor);
  reemplazar();*/