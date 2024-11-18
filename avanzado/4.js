function personas () {
    let personas = [
        { nombre: 'Ana', edad: 25 },
        { nombre: 'Carlos', edad: 30 }
    ];
    const nuevaPersona = { nombre: 'sara', edad: 23 };  
    personas.push(nuevaPersona);
    console.log(personas);
}

personas();
/*push => agrega elementos a un arreglo*/