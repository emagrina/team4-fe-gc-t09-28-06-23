const defaultNumeroTemporada = 3;
const defaultEntregado = false;

class Serie implements Entregable {
  private titulo: string;
  private numeroTemporada: number;
  private entregado: boolean;
  private genero: string;
  private creador: string;

  constructor(newTitulo: string, newCreador: string) {
    this.titulo = newTitulo;
    this.creador = newCreador;
    this.numeroTemporada = defaultNumeroTemporada;
    this.entregado = defaultEntregado;
    this.genero = '';
  }
  //Getters
  public getTitulo(): string {
    return this.titulo;
  }

  public getNumeroTemporada(): number {
    return this.numeroTemporada;
  }

  public getGenero(): string {
    return this.genero;
  }

  public getCreador(): string {
    return this.creador;
  }

  //Setters
  public setTitulo(titulo: string): void {
    this.titulo = titulo;
  }

  public setNumeroTemporada(numeroTemporada: number): void {
    this.numeroTemporada = numeroTemporada;
  }

  public setGenero(genero: string): void {
    this.genero = genero;
  }

  public setCreador(creador: string): void {
    this.creador = creador;
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
    if (obj instanceof Serie) {
        const serie = obj as Serie;
        return this.numeroTemporada - serie.numeroTemporada;
    }
    return 0;
  }

  //Metodo toString
  public toString(): string {
    return `Título: ${this.titulo}\nNúmero de temporadas: ${this.numeroTemporada}\nEntregado: ${this.entregado}\nGénero: ${this.genero}\nCreador: ${this.creador}`;
  }
}
