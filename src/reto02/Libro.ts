class Libro {
    private ISBN:number;
    private Titulo:string;
    private Autor:string;
    private NumPaginas:number;

    constructor (newISBN:number,newTitulo:string,newAutor:string,newNumPaginas:number){
        this.ISBN=newISBN;
        this.Titulo=newTitulo;
        this.Autor=newAutor;
        this.NumPaginas=newNumPaginas;
    }

    getISBN():number{
        return this.ISBN;
    }
    getTitulo():string{
        return this.Titulo
    }
    getAutor():string{
        return this.Autor;
    }
    getNumPaginas():number{
        return this.NumPaginas;
    }

}