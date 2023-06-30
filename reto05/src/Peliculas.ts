class Peliculas extends Cine{
    private Titulo:string;
    private Duracion:number;
    private EdadMinima:number;
    private Director:string;

    constructor(newTitulo:string,newDuracion:number,newEdadMinima:number,newDirector:string){
        super(Pelicula,Precio);
        this.Titulo=newTitulo;
        this.Duracion=newDuracion;
        this.EdadMinima=newEdadMinima;
        this.Director=newDirector;
    }

    getTitulo():string{
        return this.Titulo;
    }
    getDuracion():number{
        return this.Duracion;
    }
    getEdadMinima():number{
        return this.EdadMinima;
    }
    getDirector():string{
        return this.Director;
    }
    
}