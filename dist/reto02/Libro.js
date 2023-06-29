"use strict";
class Libro {
    constructor(newISBN, newTitulo, newAutor, newNumPaginas) {
        this.ISBN = newISBN;
        this.Titulo = newTitulo;
        this.Autor = newAutor;
        this.NumPaginas = newNumPaginas;
    }
    getISBN() {
        return this.ISBN;
    }
    getTitulo() {
        return this.Titulo;
    }
    getAutor() {
        return this.Autor;
    }
    getNumPaginas() {
        return this.NumPaginas;
    }
}
