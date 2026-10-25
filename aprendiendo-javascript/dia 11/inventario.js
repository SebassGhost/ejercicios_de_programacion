const libros = [
    { titulo: "Cien años de soledad", disponibles: 3 },
    { titulo: "Don Quijote de la Mancha", disponibles: 0 },
    { titulo: "El principito", disponibles: 5 }
];

function contarLibrosDisponibles(libros){
    let contador = 0;
    for(let i = 0; i < libros.length; i++){
        if(libros[i].disponibles  > 0){
            contador = contador + 1;
        }
    }
    return contador
}

const resultado = contarLibrosDisponibles(libros)
console.log("total de libros:", resultado)
