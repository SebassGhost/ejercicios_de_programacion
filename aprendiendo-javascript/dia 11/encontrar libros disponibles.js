const libros = [                                                    // array
    { titulo: "Cien años de soledad", disponibles: 3 },
    { titulo: "Don Quijote de la Mancha", disponibles: 0 },
    { titulo: "El principito", disponibles: 5 }
];

function mostrarLibrosDisponibles(libros){
    
    for(let i = 0; i < libros.length; i++){   // ciclo para recorrer el array
        if(libros[i].disponibles  > 0 ){
            console.log(libros[i].titulo)  // imprimir el titulo de los libros disponibles
        }
    }
}

mostrarLibrosDisponibles(libros) // llamar la funcion y obtener el resultado