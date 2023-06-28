"use strict";
const defaultHorasEstimadas = 10;
class Videojuego {
    //Creamos constructor
    constructor(titulo, horasEstimadas, genero, compania) {
        this.titulo = titulo;
        this.horasEstimadas = defaultHorasEstimadas;
        this.entregado = defaultEntregado;
        this.genero = genero;
        this.compania = compania;
    }
    //Getters
    getTitulo() {
        return this.titulo;
    }
    getHorasEstimadas() {
        return this.horasEstimadas;
    }
    getGenero() {
        return this.genero;
    }
    getCompania() {
        return this.compania;
    }
    //Setters
    setTitulo(titulo) {
        this.titulo = titulo;
    }
    setHorasEstimadas(horasEstimadas) {
        this.horasEstimadas = horasEstimadas;
    }
    setGenero(genero) {
        this.genero = genero;
    }
    setCompania(compania) {
        this.compania = compania;
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
        if (obj instanceof Videojuego) {
            const videojuego = obj;
            return this.horasEstimadas - videojuego.horasEstimadas;
        }
        return 0;
    }
    // Metodo toString
    toString() {
        return `Título: ${this.titulo}\nHoras estimadas: ${this.horasEstimadas}\nEntregado: ${this.entregado}\nGénero: ${this.genero}\nCompañía: ${this.compania}`;
    }
}
