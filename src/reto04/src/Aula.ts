class Aula{
    private Id:number;
    private NumMaxEst:number;

    constructor (newId:number,newNumMaxEst:number,newMateria:string){
        this.Id=newId;
        this.NumMaxEst=newNumMaxEst;
    }

    getId(){
        return this.Id;
    }
    getNumMaxEst(){
        return this.NumMaxEst;
    }

}