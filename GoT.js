class Personajes {
  nombre;
  familia;
  edad;
  estado = "vivo";
  serie = "Juego de Tronos";

  constructor(nombre, familia, estado, edad, serie) {
    this.nombre = nombre;
    this.familia = familia;
    this.edad = edad;
    this.estado = estado;
    this.serie = serie;
  }

  comunicar() {
    return "";
  }

  morir() {
    this.estado = "muerto";
    return;
  }
}

export default Personajes;
