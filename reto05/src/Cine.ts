//Declaramos las constantes con los vaores default
const Pelicula="";
const Precio=0;
class Cine{
    //Declaramos pelicula y precio
    protected Pelicula:string;
    protected Precio:number;

    //Hacemos el contructor
    constructor(newPelicula:string,newPrecio:number){
        this.Pelicula=newPelicula;
        this.Precio=newPrecio;
    }

    //Getters
    getPelicula():string{
        return this.Pelicula;
    }
    getPrecio():number{
        return this.Precio;
    }
}
