const defaultHorasEstimadas = 10;

class Videojuego implements Entregable {
  //Declaramos variables
  private titulo: string;
  private horasEstimadas: number;
  private entregado: boolean;
  private genero: string;
  private compania: string;

  //Creamos constructor
  constructor(
    titulo: string,
    horasEstimadas: number,
    genero: string,
    compania: string
  ) {
    this.titulo = titulo;
    this.horasEstimadas = defaultHorasEstimadas;
    this.entregado = defaultEntregado;
    this.genero = genero;
    this.compania = compania;
  }

  //Getters
  public getTitulo(): string {
    return this.titulo;
  }

  public getHorasEstimadas(): number {
    return this.horasEstimadas;
  }

  public getGenero(): string {
    return this.genero;
  }

  public getCompania(): string {
    return this.compania;
  }

  //Setters
  public setTitulo(titulo: string): void {
    this.titulo = titulo;
  }

  public setHorasEstimadas(horasEstimadas: number): void {
    this.horasEstimadas = horasEstimadas;
  }

  public setGenero(genero: string): void {
    this.genero = genero;
  }

  public setCompania(compania: string): void {
    this.compania = compania;
  }

  public entregar(): void {
    this.entregado = true;
  }

  public devolver(): void {
    this.entregado = false;
  }

  public isEntregado(): boolean {
    return this.entregado;
  }

  public comparteTo(obj: any): number {
    if (obj instanceof Videojuego) {
      const videojuego = obj as Videojuego;
      return this.horasEstimadas - videojuego.horasEstimadas;
    }
    return 0;
  }

  // Metodo toString
  public toString(): string {
    return `Título: ${this.titulo}\nHoras estimadas: ${this.horasEstimadas}\nEntregado: ${this.entregado}\nGénero: ${this.genero}\nCompañía: ${this.compania}`;
  }
}