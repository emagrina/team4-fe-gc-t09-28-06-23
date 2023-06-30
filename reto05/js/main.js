"use strict";
let cine1 = new Cine("Transformers", 20);
let pel1 = new Peliculas("2", 120, 18, "Smith");
//--------------------------
let esp1 = new Espectador("Pedro", 18, 50);
let esp2 = new Espectador("Javi", 20, 60);
let esp3 = new Espectador("Maria", 19, 40);
let esp4 = new Espectador("Sofia", 32, 20);
let esp5 = new Espectador("Ramon", 18, 35);
let esp6 = new Espectador("Luis", 33, 100);
let esp7 = new Espectador("Jaime", 22, 50);
let esp8 = new Espectador("Vanesa", 26, 21);
let esp9 = new Espectador("Bea", 40, 100);
let esp10 = new Espectador("David", 50, 50);
//---------------------------
let todosEspect = [];
todosEspect[0] = esp1;
todosEspect[1] = esp2;
todosEspect[2] = esp3;
todosEspect[3] = esp4;
todosEspect[4] = esp5;
todosEspect[5] = esp6;
todosEspect[6] = esp7;
todosEspect[7] = esp8;
todosEspect[8] = esp9;
todosEspect[9] = esp10;
let sala = [];
let asientosTotales = 20;
//-------------------------------
for (let i = 0; i < asientosTotales; i++) {
    sala[i] = "";
}
//-------------------------------
console.log(todosEspect.length);
let i = 0;
while (i < todosEspect.length) {
    let rnd = Math.floor(Math.random() * asientosTotales);
    if (sala[rnd] == "") {
        if (todosEspect[i].getDinero() >= cine1.getPrecio()) {
            if (todosEspect[i].getEdad() >= pel1.getEdadMinima()) {
                sala[rnd] = todosEspect[i];
                i++;
            }
            else {
                i++;
            }
        }
        else {
            i++;
        }
    }
}
console.log(sala);
