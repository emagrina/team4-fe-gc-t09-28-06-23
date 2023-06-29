"use strict";
const defaultNumeroTemporada = 3;
const defaultEntregado = false;
class Serie {
    constructor(newTitulo, newCreador) {
        this.titulo = newTitulo;
        this.creador = newCreador;
        this.numeroTemporada = defaultNumeroTemporada;
        this.entregado = defaultEntregado;
        this.genero = '';
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
    //Metodo toString
    toString() {
        return `Título: ${this.titulo}\nNúmero de temporadas: ${this.numeroTemporada}\nEntregado: ${this.entregado}\nGénero: ${this.genero}\nCreador: ${this.creador}`;
    }
}
