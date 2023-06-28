
let videojuego: Videojuego[] = [];
let serie: Serie[] = [];

videojuego[0].setTitulo("GTA");
videojuego[0].setHorasEstimadas(100);
videojuego[0].setCompania("Rockstar");
videojuego[0].setGenero("Accion");

videojuego[1].setTitulo("Pokemon");
videojuego[1].setHorasEstimadas(40);
videojuego[1].setCompania("Nintendo");
videojuego[1].setGenero("MMO");

videojuego[2].setTitulo("LoL");
videojuego[2].setHorasEstimadas(0);
videojuego[2].setCompania("Riot");
videojuego[2].setGenero("MOBA");

videojuego[3].setTitulo("Valorant");
videojuego[3].setHorasEstimadas(30);
videojuego[3].setCompania("Riot");
videojuego[3].setGenero("Shooter");

videojuego[4].setTitulo("Animal Crosing");
videojuego[4].setHorasEstimadas(50);
videojuego[4].setCompania("Mundo");
videojuego[4].setGenero("Nintendo");

serie[0].setTitulo("Prision break");
serie[0].setNumeroTemporada(5);
serie[0].setCreador("Picasso");
serie[0].setGenero("Accion");

serie[1].setTitulo("LQSA");
serie[1].setNumeroTemporada(15);
serie[1].setCreador("Manolo");
serie[1].setGenero("Comedia");

serie[2].setTitulo("Breaking Bad");
serie[2].setNumeroTemporada(4);
serie[2].setCreador("Walter");
serie[2].setGenero("Drugs");

serie[3].setTitulo("La casa de papel");
serie[3].setNumeroTemporada(5);
serie[3].setCreador("Berlin");
serie[3].setGenero("Accion");

videojuego[1].entregar();
videojuego[4].entregar();
serie[2].entregar();
serie[3].entregar();

let sEntregada = 0;
for (let i = 0; i < serie.length; i++) {
    if (serie[i].isEntregado()) {
        sEntregada++;
        serie[i].toString();
    }   
} 
console.log('Series entregadas: ' + sEntregada);

let vEntregados = 0;
for (let i = 0; i < videojuego.length; i++) {
    if (videojuego[i].isEntregado()) {
        vEntregados++;
        videojuego[i].toString();
    }
}
console.log('Videojuegos entregados: ' + vEntregados);

let vMasHoras: Videojuego | null = null;
let maxH = 0;

for (let i = 0; i < videojuego.length; i++) {
    if (videojuego[i].getHorasEstimadas() > maxH) {
        maxH = videojuego[i].getHorasEstimadas();
        vMasHoras = videojuego[i];
    } 
}

if (vMasHoras) {
    console.log("Videojuego con mas horas:");
    console.log(vMasHoras.toString());
} else {
    console.log("No hay videojuegos.");
}

let sMasTemp: Serie | null = null;
let maxTemp = 0;

for (let i = 0; i < serie.length; i++) {
    if (serie[i].getNumeroTemporada() > maxTemp) {
        maxTemp = serie[i].getNumeroTemporada();
        sMasTemp = serie[i];
    }
}

if (sMasTemp) {
    console.log("Serie con mas temporadas:");
    console.log(sMasTemp.toString());
} else {
    console.log("No hay series.");
}