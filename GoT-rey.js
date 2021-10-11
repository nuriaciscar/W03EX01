import Personajes from "./GoT";
class PersonajeRey extends Personajes {
  reinado;

  constructor(reinado, nombre, familia, estado, edad) {
    super(nombre, familia, estado, edad);
    this.reinado = reinado;
  }

  comunicar() {
    return "El rey dice: 'Vais a morir todos'";
  }
}
