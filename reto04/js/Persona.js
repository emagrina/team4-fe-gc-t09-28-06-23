"use strict";
class Persona {
    constructor(newNombre, newEdad, newSexo) {
        this.Nombre = newNombre;
        this.Edad = newEdad;
        this.Sexo = newSexo;
    }
    getNombre() {
        return this.Nombre;
    }
    getEdad() {
        return this.Edad;
    }
    getSexo() {
        return this.Sexo;
    }
}
