"use strict";
class Profesor extends Persona {
    constructor(newNombre, newEdad, newSexo, newMateria) {
        super(newNombre, newEdad, newSexo);
        this.Materia = newMateria;
    }
    getMateria() {
        return this.Materia;
    }
    asistirClase() {
        let asistir = Math.floor(Math.random() * 100);
        if (asistir < 20) {
            return false; //NO Asiste
        }
        else {
            return true; //Asiste
        }
    }
}
