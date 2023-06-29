class Espectador extends Cine{
    private Nombre:string;
    private Edad:number;
    private Dinero:number;

    constructor(newNombre:string,newEdad:number,newDinero:number){
        super(Pelicula,Precio);
        this.Nombre=newNombre;
        this.Edad=newEdad;
        this.Dinero=newDinero;
    }

    getNombre():string{
        return this.Nombre;
    }
    getEdad():number{
        return this.Edad;
    }
    getDinero():number{
        return this.Dinero;
    }
    
}