class Personajes {
  nombre;
  familia;
  edad;
  estado = "vivo";
  serie = "Juego de Tronos";

  constructor(nombre, familia, estado, edad) {
    this.nombre = nombre;
    this.familia = familia;
    this.edad = edad;
    this.estado = estado;
  }

  comunicar() {
    return " ";
  }

  morir() {
    this.estado = "muerto";
    return;
  }
}

export default Personajes;
