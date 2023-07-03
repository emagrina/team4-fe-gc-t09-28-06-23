class Espectador extends Cine{
    //Declaramos las variables
    private Nombre:string;
    private Edad:number;
    private Dinero:number;

    //Creamos el constructor
    constructor(newNombre:string,newEdad:number,newDinero:number){
        super(Pelicula,Precio);
        this.Nombre=newNombre;
        this.Edad=newEdad;
        this.Dinero=newDinero;
    }

    //Getters
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
