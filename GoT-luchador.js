import Personajes from ("./GoT");

class PersonajeLuchador extends Personajes{
arma;
destreza;

constructor(reinado, nombre, familia, estado, edad) {
    super(arma, destreza, nombre, familia, estado, edad);
    this.arma = arma;
    this.destreza= destreza;
  }

  comunicar() {
    return "El luchador dice: 'Primero pego y luego pregunto'";
  }
}



