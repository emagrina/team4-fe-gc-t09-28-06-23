"use strict";
class Espectador extends Cine {
    constructor(newNombre, newEdad, newDinero) {
        super(Pelicula, Precio);
        this.Nombre = newNombre;
        this.Edad = newEdad;
        this.Dinero = newDinero;
    }
    getNombre() {
        return this.Nombre;
    }
    getEdad() {
        return this.Edad;
    }
    getDinero() {
        return this.Dinero;
    }
}
