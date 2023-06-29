"use strict";
let series = [];
let videojuegos = [];

series[0] = new Serie("Narcos", "Pablo");
series[1] = new Serie("LQSA", "Jesus"),
series[2] = new Serie("Breaking Bad", "Walter"),
series[3] = new Serie("Walking dead",  "Sam"),
series[4] = new Serie("La casa de papel",  "Berlin");

videojuegos[0] = new Videojuego("Pokemon", 50, "Aventura", "Nintendo");
videojuegos[1] = new Videojuego("Age of titans", 20, "Estrategia", "Sony");
videojuegos[2] = new Videojuego("Fifa", 8, "Deportes", "EA");
videojuegos[3] = new Videojuego("WoW", 70, "RPG", "Wizard");
videojuegos[4] = new Videojuego("Valorant", 2, "Shooter", "Riot");

videojuegos[3].entregar();
videojuegos[4].entregar();
series[0].entregar();
series[1].entregar();
series[2].entregar();

let videojuegosE = 0;
let seriesE = 0;

for (let i = 0; i < series.length; i++) {
    series[i].setNumeroTemporada(Math.floor(Math.random() * 15) + 1);
}

for (let i = 0; i < videojuegos.length; i++) {
    if(videojuegos[i].isEntregado()){
        videojuegosE++;
    }
}

for (let i = 0; i < series.length; i++) {
    if(series[i].isEntregado()){
        seriesE++;
    }
}

console.log(`Series entregadas: ${seriesE}`);
console.log(`Videojuegos entregados: ${videojuegosE}`);

let numS;
let maxTemp = 0;
for (let i = 0; i < series.length; i++) {
    if (series[i].getNumeroTemporada() > maxTemp) {
        numS = i;
        maxTemp = series[i].getNumeroTemporada();
    }    
}

let numV;
let maxH = 0;
for (let i = 0; i < videojuegos.length; i++) {
    if (videojuegos[i].getHorasEstimadas() > maxH) {
        numV = i;
        maxH = videojuegos[i].getHorasEstimadas();
    }    
}

console.log(`Serie con mas temporadas: ${series[numS].getTitulo()}`);
console.log(`Juego con mas horas: ${videojuegos[numV].getTitulo()}`);