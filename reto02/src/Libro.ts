class Libro {
  private ISBN: string;
  private titulo: string;
  private autor: string;
  private numeroDePaginas: number;

  constructor(
    ISBN: string,
    titulo: string,
    autor: string,
    numeroDePaginas: number
  ) {
    this.ISBN = ISBN;
    this.titulo = titulo;
    this.autor = autor;
    this.numeroDePaginas = numeroDePaginas;
  }

  public getISBN(): string {
    return this.ISBN;
  }

  public getTitulo(): string {
    return this.titulo;
  }

  public getAutor(): string {
    return this.autor;
  }

  public getNumeroDePaginas(): number {
    return this.numeroDePaginas;
  }

  public setISBN(ISBN: string): void {
    this.ISBN = ISBN;
  }

  public setTitulo(titulo: string): void {
    this.titulo = titulo;
  }

  public setAutor(autor: string): void {
    this.autor = autor;
  }

  public setNumeroDePaginas(numeroDePaginas: number): void {
    this.numeroDePaginas = numeroDePaginas;
  }

  

  public toString(): string {
    return `El libro ${this.titulo} con ISBN ${this.ISBN} creado por ${this.autor} tiene ${this.numeroDePaginas} páginas`;
  }
}
