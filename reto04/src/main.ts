let aula1=new Aula(1,5,'fisica');
//---------
let prof1=new Profesor('Carlos',45,'Hombre','fisica');
//---------
let est1=new Estudiante("Raul",20,'Hombre',7);
let est2=new Estudiante("Carla",20,'Mujer',8);
let est3=new Estudiante("Pedro",21,'Hombre',4);
let est4=new Estudiante("Ana",22,'Mujer',9);
let est5=new Estudiante("Maria",24,'Mujer',1);
let arrayEstudiantes:Estudiante[]= [];
let chicas:Estudiante[]= [];
let chicos:Estudiante[]= [];
arrayEstudiantes[0]=est1;
arrayEstudiantes[1]=est2;
arrayEstudiantes[2]=est3;
arrayEstudiantes[3]=est4;
arrayEstudiantes[4]=est5;
//------------------------------------
let hoyClase:boolean=aula1.sePuedeDarClase(aula1,prof1,arrayEstudiantes);

if (hoyClase) {
    for (let i = 0; i < arrayEstudiantes.length; i++) {
        if (arrayEstudiantes[i].getNota()>=5) { //aprobado            
            if (arrayEstudiantes[i].getSexo()=='Hombre') {
                chicos.push(arrayEstudiantes[i]);
            }else{
                chicas.push(arrayEstudiantes[i]);
            }
        }        
    }
    console.log(chicos);
    console.log(chicas);    
}else{
    console.log('NO hay clase hoy');    
}
