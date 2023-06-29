"use strict";
class Aula {
    constructor(newId, newNumMaxEst, newMateria) {
        this.Id = newId;
        this.NumMaxEst = newNumMaxEst;
    }
    getId() {
        return this.Id;
    }
    getNumMaxEst() {
        return this.NumMaxEst;
    }
}
