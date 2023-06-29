"use strict";
class Estudiante extends Persona {
    constructor(newNombre, newEdad, newSexo, newNota) {
        super(newNombre, newEdad, newSexo);
        this.Nota = newNota;
    }
    getNota() {
        return this.Nota;
    }
}
