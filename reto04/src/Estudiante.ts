class Estudiante extends Persona{    
    private Nota:number;  

    constructor(newNombre:string,newEdad:number,newSexo:string,newNota:number){
        super(newNombre,newEdad,newSexo);
        this.Nota=newNota;
    }
    getNota():number{
        return this.Nota;
    }

    asistirClase():boolean{
        let asistir=Math.floor(Math.random()*100);
        if (asistir<50) {
            return false; //Asiste
        }else{
            return true;
        }         
    }
}
