class Cine {
  peliculaActual: Pelicula | null;
  precioEntrada: number;
  asientos: { [key: string]: Espectador | null };

  constructor(newPrecioEntrada: number) {
    this.peliculaActual = null;
    this.precioEntrada = newPrecioEntrada;
    this.asientos = {};
  }

  /**
   * Establece la pelicula que se va a reproducir
   * @param pelicula
   */
  reproducirPelicula(pelicula: Pelicula) {
    this.peliculaActual = pelicula;
  }

  /**
   * Genera todos los asientos de la sala
   */
  generarAsientos() {
    for (let fila = 1; fila <= 8; fila++) {
      for (let columna = 1; columna <= 9; columna++) {
        const letraColumna = String.fromCharCode(65 + (columna - 1));
        this.asientos[`${fila} ${letraColumna}`] = null;
      }
    }
  }

  /**
   * Camprueba si el asiento esta disponible el espectador 
   * se podra sentar, si esta ocupado no se sentara.
   * @param espectador
   * @returns true | false
   */
  sentarEspectador(espectador: Espectador) {
    if (
      this.peliculaActual === null ||
      espectador.edad < this.peliculaActual.edadMinima ||
      espectador.dinero < this.precioEntrada
    ) {
      return false;
    }

    let asientoEncontrado = false;
    for (const asiento in this.asientos) {
      if (this.asientos[asiento] === null) {
        this.asientos[asiento] = espectador;
        asientoEncontrado = true;
        break;
      }
    }

    if (!asientoEncontrado) {
      for (const asiento in this.asientos) {
        if (this.asientos[asiento] === null) {
          this.asientos[asiento] = espectador;
          asientoEncontrado = true;
          break;
        }
      }
    }

    return asientoEncontrado;
  }
}
