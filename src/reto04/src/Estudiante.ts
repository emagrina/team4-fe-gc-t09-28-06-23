class Estudiante extends Persona{    
    private Nota:number;  

    constructor(newNombre:string,newEdad:number,newSexo:string,newNota:number){
        super(newNombre,newEdad,newSexo);
        this.Nota=newNota;
    }
    getNota(){
        return this.Nota;
    }
}
