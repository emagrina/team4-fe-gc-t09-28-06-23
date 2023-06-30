class Profesor extends Persona{
    private Materia:string; //matematicas, filosofia y fisica

    constructor(newNombre:string,newEdad:number,newSexo:string,newMateria:string){
        super(newNombre,newEdad,newSexo);
        this.Materia=newMateria;
    }

    getMateria():string{
        return this.Materia;
    }
    asistirClase():boolean{
        let asistir=Math.floor(Math.random()*100);
        if (asistir<20) {
            return false; //NO Asiste
        }else{
            return true; //Asiste
        }         
    }
}