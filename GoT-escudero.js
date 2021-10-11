import Personajes from ("./GoT");

class PersonajeEscudero extends Personajes{
personajeQueSirve;
pelotismo;

constructor(personajeQueSirve,pelotismo, nombre, familia, estado, edad) {
    super(arma, destreza, nombre, familia, estado, edad);
    this.personajeQueSirve = personajeQueSirve;
    this.pelotismo = pelotismo;
  }

  comunicar() {
    return "El escudero dice: 'Soy un loser'";
  }
}



