"use strict";
let libro1 = new Libro('978-0486298238', 'Meditaciones', 'Marco Aurelio', 256);
let libro2 = new Libro('978-8476004139', 'Cartas a Lucilio', 'Lucio Anneo Séneca', 352);
console.log(libro1.toString());
console.log(libro2.toString());
let libroConMasPaginas = libro1.getNumeroDePaginas() > libro2.getNumeroDePaginas() ? libro1 : libro2;
console.log("El libro con más páginas es:", libroConMasPaginas.getTitulo());
