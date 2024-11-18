function mayores  ()  {
    const personas = [
        { nombre: 'Ana', edad: 25 },
        { nombre: 'Carlos', edad: 17 },
        { nombre: 'sara', edad: 22 },
        { nombre: 'Pedro', edad: 15 }
    ];
    const mayoresDeEdad = personas.filter(persona => persona.edad > 18);
    console.log(mayoresDeEdad);
}

mayores();
/*filter => filtra los elementos de un arreglo que cumplan una condición*/