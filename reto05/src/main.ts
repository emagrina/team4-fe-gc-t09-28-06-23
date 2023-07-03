//Creamos una pelicula, un cine y varios espectadores
let pel1 = new Peliculas(20, 1, 'HelloKity', 120, 18, "Smith");

let esp: Espectador[] = [];

esp[0] = new Espectador("Jose", 22, 1000);
esp[1] = new Espectador("Ian", 18, 300);
esp[2] = new Espectador("Carol", 25, 1333);
esp[3] = new Espectador("Julia", 15, 10);
esp[4] = new Espectador("Ramon", 55, 5730);
esp[5] = new Espectador("Elon", 99, 100000);

let cols = 'ABCDEFGHI';

let asientos = [
    ['8 A', '8 B', '8 C', '8 D', '8 E', '8 F', '8 G', '8 H', '8 I'],
    ['7 A', '7 B', '7 C', '7 D', '7 E', '7 F', '7 G', '7 H', '7 I'],
    ['6 A', '6 B', '6 C', '6 D', '6 E', '6 F', '6 G', '6 H', '6 I'],
    ['5 A', '5 B', '5 C', '5 D', '5 E', '5 F', '5 G', '5 H', '5 I'],
    ['4 A', '4 B', '4 C', '4 D', '4 E', '4 F', '4 G', '4 H', '4 I'],
    ['3 A', '3 B', '3 C', '3 D', '3 E', '3 F', '3 G', '3 H', '3 I'],
    ['2 A', '2 B', '2 C', '2 D', '2 E', '2 F', '2 G', '2 H', '2 I'],
    ['1 A', '1 B', '1 C', '1 D', '1 E', '1 F', '1 G', '1 H', '1 I']
];
let complete;
for (let i = 0; i < esp.length; i++) {  
    for (let f = 0; f < asientos.length; f++) {     
        for (let c = 0; c < asientos[f].length; c++) {
            complete = false;
            while(!complete){
                let fila = Math.floor(Math.random() * (8 - 0 + 1));
                let col = cols.charAt(Math.floor(Math.random() * cols.length));           
                if(asientos[f][c] != 'X' && asientos[f][c] == `${fila} ${col}`){
                  if ((esp[i].getDinero() >= pel1.getPrecio()) || (esp[i].getEdad() >= pel1.getEdadMinima())) {
                    console.log(esp[i].getNombre() + ' se sienta en: ' + asientos[f][c]);
                    asientos[f][c] = 'X';
                    complete = true;
                }
            }
            
        }        
    }
  }
}

//Damos por consola como queda la sala
console.log(asientos);
