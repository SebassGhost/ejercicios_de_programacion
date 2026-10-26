const libros = [
    { titulo: "Cien años de soledad", disponibles: 3 },
    { titulo: "Don Quijote de la Mancha", disponibles: 0 },
    { titulo: "El principito", disponibles: 5 }
];

function buscarLibro(libros, tituloBuscado) {
    let encontrado = false;

    // El for recorre todos los libros
    for (let i = 0; i < libros.length; i++) {
        
        if (libros[i].titulo === tituloBuscado) {           // Este if comprueba si el título coincide
            encontrado = true;
            console.log(libros[i].titulo, libros[i].disponibles);
        }
    } // Aquí termina el for
    
    if (encontrado === false) {                 // Este if se ejecuta después de revisar todos los libros
        console.log("Libro no encontrado");
    }

} // Aquí termina la función

buscarLibro(libros, "El principito");