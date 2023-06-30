"use strict";
class Aula {
    constructor(newId, newNumMaxEst, newDestinada) {
        this.Id = newId;
        this.NumMaxEst = newNumMaxEst;
        this.Destinada = newDestinada;
    }
    getId() {
        return this.Id;
    }
    getNumMaxEst() {
        return this.NumMaxEst;
    }
    getDestinada() {
        return this.Destinada;
    }
    sePuedeDarClase(aula, profesor, arrayEstudiantes) {
        let profeEnClase = false;
        let minEnClase = false;
        let totalEnClase = 0;
        let minimoAsistencia = Math.floor(aula.getNumMaxEst() / 2);
        let disponible = profesor.asistirClase();
        //---------------------        
        if (disponible) { //hay profe
            profeEnClase = true;
            if (profesor.getMateria() != aula.getDestinada()) {
                profeEnClase = false;
            }
        }
        for (let i = 0; i < arrayEstudiantes.length; i++) {
            if (arrayEstudiantes[i].asistirClase()) {
                totalEnClase++;
            }
        }
        if (totalEnClase >= minimoAsistencia) {
            minEnClase = true;
        }
        if (profeEnClase && minEnClase) {
            return true;
        }
        else {
            return false;
        }
    }
}
