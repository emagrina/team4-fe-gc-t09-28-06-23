class Profesor extends Persona{
    private Materia:string;

    constructor(newNombre:string,newEdad:number,newSexo:string,newMateria:string){
        super(newNombre,newEdad,newSexo);
        this.Materia=newMateria;
    }

    getMateria(){
        return this.Materia;
    }


}