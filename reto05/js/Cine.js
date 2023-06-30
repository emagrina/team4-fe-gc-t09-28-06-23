"use strict";
const Pelicula = "";
const Precio = 0;
class Cine {
    constructor(newPelicula, newPrecio) {
        this.Pelicula = newPelicula;
        this.Precio = newPrecio;
    }
    getPelicula() {
        return this.Pelicula;
    }
    getPrecio() {
        return this.Precio;
    }
}
