"use strict";
class Profesor extends Persona {
    constructor(newNombre, newEdad, newSexo, newMateria) {
        super(newNombre, newEdad, newSexo);
        this.Materia = newMateria;
    }
    getMateria() {
        return this.Materia;
    }
}
