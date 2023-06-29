 class Persona{
    protected Nombre:string;
    protected Edad:number;
    protected Sexo:string;

    constructor(newNombre:string,newEdad:number,newSexo:string){
        this.Nombre=newNombre;
        this.Edad=newEdad;
        this.Sexo=newSexo;
    }
    
    getNombre(){
        return this.Nombre;
    }
    getEdad(){
        return this.Edad;
    }
    getSexo(){
        return this.Sexo;
    }

}