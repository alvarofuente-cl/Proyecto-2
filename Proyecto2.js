function crearEncuestaPCGamers() {
  let encuestasPCGamers = [];

  for (let i = 0; i < 4; i++) {
      let preguntaEncuesta = {
          pregunta: "",
          opcion1: "",
          opcion2: ""
      };

      preguntaEncuesta.pregunta = prompt("Ingrese la pregunta número " + (i + 1) + " sobre marcas de PC Gamers:");
      preguntaEncuesta.opcion1 = prompt("Ingresa la primera opción:");
      preguntaEncuesta.opcion2 = prompt("Ingresa la segunda opción:");

      encuestasPCGamers.push(preguntaEncuesta);
  }

  return encuestasPCGamers;
}

function votarEncuestaPCGamers(encuesta) {
  for (let i = 0; i < encuesta.length; i++) {
      console.log(encuesta[i].pregunta);
      console.log("1. " + encuesta[i].opcion1);
      console.log("2. " + encuesta[i].opcion2);

      const voto = prompt("Ingrese el número de la opción que prefiera (1 o 2):");

      if (voto === "1" || voto === "2") {
          console.log("¡Gracias por votar!");
          encuesta[i].votoElegido = encuesta[i]["opcion" + voto];
      } else {
          console.log("Voto inválido. Por favor, ingrese 1 o 2.");
      }
  }
}

function mostrarResultadosEncuesta(encuesta) {
  encuesta.forEach((pregunta) => {
      console.log(`Resultado pregunta "${pregunta.pregunta}": ${pregunta.votoElegido}`);
  });
}

// Ejemplo de uso:
const encuestaPCGamers = crearEncuestaPCGamers();
votarEncuestaPCGamers(encuestaPCGamers);
mostrarResultadosEncuesta(encuestaPCGamers);
