

const libros = [
    { titulo: "Cien años de soledad", disponibles: 3 },
    { titulo: "Don Quijote de la Mancha", disponibles: 0 },
    { titulo: "El principito", disponibles: 5 }
];

// Recibe el array de libros
function contarCopiasDisponibles(libros) {
    // Acumula la cantidad de copias disponibles
    let total = 0;

    // Recorre todos los libros del array
    for (let i = 0; i < libros.length; i++) {
        // Suma las copias del libro actual al total
        total = total + libros[i].disponibles;
    }

    // Devuelve la suma final
    return total;
}

// Guarda el valor que devuelve la función
const resultado = contarCopiasDisponibles(libros);

// Muestra el resultado en la consola
console.log("Total de copias disponibles:", resultado);