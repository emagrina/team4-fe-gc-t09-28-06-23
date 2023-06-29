const Pelicula="";
const Precio=0;
class Cine{
    protected Pelicula:string;
    protected Precio:number;

    constructor(newPelicula:string,newPrecio:number){
        this.Pelicula=newPelicula;
        this.Precio=newPrecio;
    }

    getPelicula():string{
        return this.Pelicula;
    }
    getPrecio():number{
        return this.Precio;
    }
}