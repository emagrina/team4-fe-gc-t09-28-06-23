class Serie {
    //Getters
    public getTitulo():string {
        return this.titulo;
    }
    
    public getNumeroTemporadas():number {
        return this.numeroTemporadas;
    }
    
    public getGenero():string {
        return this.genero;
    }
    
    public getCreador():string {
        return this.creador;
    }
    
    //Setters
    public setTitulo(titulo: string):void {
        this.titulo = titulo;
    }
    
    public setNumeroTemporadas(numeroTemporadas: number):void {
        this.numeroTemporadas = numeroTemporadas;
    }
    
    public setGenero(genero: string):void {
        this.genero = genero;
    }
    
    public setCreador(creador: string):void {
        this.creador = creador;
    }
    
    //Metodo toString
    public toString():string {
        return `Título: ${this.titulo}\nNúmero de temporadas: ${this.numeroTemporadas}\nEntregado: ${this.entregado}\nGénero: ${this.genero}\nCreador: ${this.creador}`;
    }
}
