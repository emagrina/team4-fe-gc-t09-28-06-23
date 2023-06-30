 abstract class Persona{
    protected Nombre:string;
    protected Edad:number;
    protected Sexo:string;

    constructor(newNombre:string,newEdad:number,newSexo:string){
        this.Nombre=newNombre;
        this.Edad=newEdad;
        this.Sexo=newSexo;
    }
    
    getNombre():string{
        return this.Nombre;
    }
    getEdad():number{
        return this.Edad;
    }
    getSexo():string{
        return this.Sexo;
    }

}