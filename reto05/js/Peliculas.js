"use strict";
class Peliculas extends Cine {
    constructor(newTitulo, newDuracion, newEdadMinima, newDirector) {
        super(Pelicula, Precio);
        this.Titulo = newTitulo;
        this.Duracion = newDuracion;
        this.EdadMinima = newEdadMinima;
        this.Director = newDirector;
    }
    getTitulo() {
        return this.Titulo;
    }
    getDuracion() {
        return this.Duracion;
    }
    getEdadMinima() {
        return this.EdadMinima;
    }
    getDirector() {
        return this.Director;
    }
}
