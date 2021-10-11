import Personajes from ("./GoT");

class PersonajeAsesor extends Personajes{
personajeQueAsesora;

constructor(personajeQueAsesora, nombre, familia, estado, edad) {
    super(arma, destreza, nombre, familia, estado, edad);
    this.personajeQueAsesora= personajeQueAsesora;
  }

  comunicar() {
    return "El asesor dice: 'No sé por qué, pero creo que voy a morir pronto'";
  }
}



