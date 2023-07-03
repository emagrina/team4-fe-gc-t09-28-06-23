class Cine{
    //Declaramos pelicula y precio
    protected precio:number;
    protected idPelicula:number;
    //Hacemos el contructor
    constructor(newPrecio:number, idPelicula:number){
        this.precio=newPrecio;
        this.idPelicula=idPelicula;
    }

    getPrecio():number{
        return this.precio;
    }

    getidPelicula():number{
        return this.idPelicula;
    }
}
