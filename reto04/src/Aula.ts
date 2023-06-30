class Aula {
  private Id: number;
  private NumMaxEst: number;
  private Destinada: string;

  constructor(newId: number, newNumMaxEst: number, newDestinada: string) {
    this.Id = newId;
    this.NumMaxEst = newNumMaxEst;
    this.Destinada = newDestinada;
  }

  getId(): number {
    return this.Id;
  }
  getNumMaxEst(): number {
    return this.NumMaxEst;
  }
  getDestinada(): string {
    return this.Destinada;
  }

  sePuedeDarClase(aula:Aula,profesor: Profesor, arrayEstudiantes: Estudiante[]): boolean {
    let profeEnClase = false;
    let minEnClase=false;
    let totalEnClase = 0;
    let minimoAsistencia=Math.floor(aula.getNumMaxEst()/2);     
    let disponible = profesor.asistirClase(); 
    //---------------------        
    if (disponible) {//hay profe
        profeEnClase = true;
        if (profesor.getMateria()!=aula.getDestinada()) {
            profeEnClase = false;
        }
    }        
    for (let i = 0; i < arrayEstudiantes.length; i++) {
        if (arrayEstudiantes[i].asistirClase()) {
            totalEnClase++;
        }     
    }    
    if (totalEnClase>=minimoAsistencia) {
        minEnClase= true;
    }
    if (profeEnClase && minEnClase) {       
        return true;
    } else {
        return false;
    }
  }
}
