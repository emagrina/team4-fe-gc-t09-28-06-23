"use strict";
class Estudiante extends Persona {
    constructor(newNombre, newEdad, newSexo, newNota) {
        super(newNombre, newEdad, newSexo);
        this.Nota = newNota;
    }
    getNota() {
        return this.Nota;
    }
    asistirClase() {
        let asistir = Math.floor(Math.random() * 100);
        if (asistir < 50) {
            return false; //Asiste
        }
        else {
            return true;
        }
    }
}
