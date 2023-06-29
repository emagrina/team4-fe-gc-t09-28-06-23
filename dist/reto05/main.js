"use strict";
let sala = new Array(10);
let cine1 = new Cine("transformers", 10);
let pel1 = new Peliculas("2", 120, 18, "Smith");
let esp1 = new Espectador("pedro", 18, 50);
let esp2 = new Espectador("javi", 20, 50);
let esp3 = new Espectador("maria", 25, 150);
sala[0] = esp1;
let asientosOcupados = 1;
if (sala[asientosOcupados] == undefined) {
    sala[asientosOcupados] = esp2;
    asientosOcupados++;
}
if (sala[0] != undefined) {
    console.log("Asiento ocupado.");
}
if (sala[1] != undefined) {
    console.log("Asiento ocupado.");
}
if (sala[asientosOcupados] != undefined) {
    console.log("Asiento ocupado.");
}
else {
    console.log("Asiento LIBRE.");
}
if (sala[asientosOcupados] == undefined) {
    sala[asientosOcupados] = esp3;
    asientosOcupados++;
}
console.log(sala);
