const personas = [
    { nombre: "ana", edad: 25 },
    { nombre: "luis", edad: 30 },
    { nombre: "pedro", edad: 20 }
];

function eliminarPersonaPorNombre(arreglo, nombre) {
    const nuevoArreglo = arreglo.filter(persona => persona.nombre !== nombre);
    
    return nuevoArreglo;
}

const nuevoArreglo = eliminarPersonaPorNombre(personas, "pedro");
console.log(nuevoArreglo);
/*filter => filtra los elementos de un arreglo que cumplan una condición*/
