"use strict";
const defaultNumeroTemporada = 3;
const defaultEntregado = false;
class Serie {
    constructor(newTitulo, newCreador) {
        this.titulo = newTitulo;
        this.creador = newCreador;
        this.numeroTemporada = defaultNumeroTemporada;
        this.entregado = defaultEntregado;
<<<<<<< HEAD
        this.genero = "";
=======
        this.genero = '';
>>>>>>> 600b2ce0b5310855fa01bb0999d0e4f1b12fe299
    }
    //Getters
    getTitulo() {
        return this.titulo;
    }
    getNumeroTemporada() {
        return this.numeroTemporada;
    }
    getGenero() {
        return this.genero;
    }
    getCreador() {
        return this.creador;
    }
    //Setters
    setTitulo(titulo) {
        this.titulo = titulo;
    }
    setNumeroTemporada(numeroTemporada) {
        this.numeroTemporada = numeroTemporada;
    }
    setGenero(genero) {
        this.genero = genero;
    }
    setCreador(creador) {
        this.creador = creador;
    }
<<<<<<< HEAD
=======
    entregar() {
        this.entregado = true;
    }
    devolver() {
        this.entregado = false;
    }
    isEntregado() {
        return this.entregado;
    }
    comparteTo(obj) {
        if (obj instanceof Serie) {
            const serie = obj;
            return this.numeroTemporada - serie.numeroTemporada;
        }
        return 0;
    }
>>>>>>> 600b2ce0b5310855fa01bb0999d0e4f1b12fe299
    //Metodo toString
    toString() {
        return `Título: ${this.titulo}\nNúmero de temporadas: ${this.numeroTemporada}\nEntregado: ${this.entregado}\nGénero: ${this.genero}\nCreador: ${this.creador}`;
    }
}
