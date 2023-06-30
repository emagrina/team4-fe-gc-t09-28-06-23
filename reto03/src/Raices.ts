class Raices {
  private a: number;
  private b: number;
  private c: number;

  constructor(newA: number, newB: number, newC: number) {
    this.a = newA;
    this.b = newB;
    this.c = newC;
  }

  getA(): number {
    return this.a;
  }
  getB(): number {
    return this.b;
  }
  getC(): number {
    return this.c;
  }
  //----
  getDiscriminante(): number {
    let numA = this.getA();
    let numB = this.getB();
    let numC = this.getC();
    //(b^2)-4*a*c
    return Math.pow(numB, 2) - 4 * numA * numC;
  }
  tieneRaices(): boolean {
    //2 soluciones
    let disc = this.getDiscriminante();
    if (disc >= 0) {
      return true;
    } else {
      return false;
    }
  }
  tieneRaiz(): boolean {
    //1 solucion
    let disc = this.getDiscriminante();
    if (disc == 0) {
      return true;
    } else {
      return false;
    }
  }
  obtenerRaices(): void {
    // mostrar 2 soluciones
    let numA = this.getA();
    let numB = this.getB();
    let numC = this.getC();
    console.log(((-numB + Math.sqrt(numB ^ (2 - 4 * numA * numC))) / 2) * numA);
    console.log(((-numB - Math.sqrt(numB ^ (2 - 4 * numA * numC))) / 2) * numA);

  }
  obtenerRaiz(): void {
    // mostrar 1 solucion
    let numA = this.getA();
    let numB = this.getB();
    let numC = this.getC();
    
    console.log(((-numB + Math.sqrt(numB ^ (2 - 4 * numA * numC))) / 2) * numA);
  }
  calcular(): void {
    let disc = this.getDiscriminante();
    let tiene1=this.tieneRaiz();
    let tiene2=this.tieneRaices();
    if (tiene2) {
        this.obtenerRaices();
    }else{
        if (tiene1) {
            this.obtenerRaiz();
        }else{
            console.log('NO tiene solucion');
            
        }
    }
  }
}
