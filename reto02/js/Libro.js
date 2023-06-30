"use strict";
class Libro {
    constructor(ISBN, titulo, autor, numeroDePaginas) {
        this.ISBN = ISBN;
        this.titulo = titulo;
        this.autor = autor;
        this.numeroDePaginas = numeroDePaginas;
    }
    getISBN() {
        return this.ISBN;
    }
    getTitulo() {
        return this.titulo;
    }
    getAutor() {
        return this.autor;
    }
    getNumeroDePaginas() {
        return this.numeroDePaginas;
    }
    setISBN(ISBN) {
        this.ISBN = ISBN;
    }
    setTitulo(titulo) {
        this.titulo = titulo;
    }
    setAutor(autor) {
        this.autor = autor;
    }
    setNumeroDePaginas(numeroDePaginas) {
        this.numeroDePaginas = numeroDePaginas;
    }
    toString() {
        return `El libro ${this.titulo} con ISBN ${this.ISBN} creado por ${this.autor} tiene ${this.numeroDePaginas} páginas`;
    }
}
