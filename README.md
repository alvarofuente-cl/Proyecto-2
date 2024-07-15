# Proyecto-2

# Proyecto2 Módulo 2 sistema de Votación en JavaScript
Hola!! Bienvenidos a este proyecto 2 que tiene como objetivo desarrollar un programa en JavaScript que permita a los usuarios crear encuestas, votar y ver los resultados aplicando comandos en terminal. Este programa se podrá ejecutar en el navegador, para visualizarse a través de la consola, enlazado a un archivo HTML.


## EJERCICIO:
El objetivo principal de este proyecto es construir un programa en JavaScript que fortalezca las siguientes habilidades y conocimientos:

- Aplicación de conceptos básicos de programación en JavaScript.
- Uso de variables, constantes, operadores aritméticos y de comparación.
- Implementación de control de flujo mediante condiciones y bucles.
- Manipulación de estructuras de datos, como objetos y arrays.
- Uso de funciones, funciones de flecha y funciones anónimas.
- Implementación de programación orientada a objetos (POO) o programación funcional (PF).
- Uso de Git como sistema de control de versiones y colaborar en GitHub.


Crearé una encuesta relacionada con la elección de un PC Gamer

A continuación, se detallan los pasos a seguir:

## 1. PASO A PASO:
### Paso 1: Lo primero que hice fue crear la funcion que permita al usuario crear la encuesta:

  ```scss
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
  ```

- Se declara una función llamada crearEncuestaPCGamers().
- Dentro de la función, se inicia un bucle for que se ejecutará 8 veces, ya que nos pidieron crear al menos 8 preguntas para la encuesta.
- En cada iteración del bucle, se crea un objeto llamado preguntaEncuesta, que contiene tres propiedades: pregunta, opcion1 y opcion2.
- Se solicita al usuario que ingrese la pregunta sobre PC's Gamers usando el método prompt() y se guarda en la propiedad pregunta del objeto preguntaEncuesta.
- Se solicita al usuario que ingrese dos opciones de respuesta para la pregunta, las cuales se guardan en las propiedades opcion1 y opcion2 respectivamente.
- Una vez que se han ingresado la pregunta y las opciones de respuesta, el objeto preguntaEncuesta se agrega al array encuestasPCGamers utilizando el método push().
- La función termina después de que se completan las 8 iteraciones del bucle y se han creado todas las preguntas para la encuesta.
  
En resumen, esta función permite al usuario crear una encuesta sobre PC Gamers mediante la entrada de preguntas y opciones de respuesta, y luego almacena estas encuestas en un array llamado encuestasPCGamers.

  
### Paso 2: Creé una función que permite que el usuario pueda votar:

```scss
function votarEncuestaPCGamers(encuesta) {
    // Se muestra la pregunta de la encuesta
    for (let i = 0; i < encuesta.length; i++) {
    console.log(encuesta[i].pregunta);

    // Mostrar las opciones disponibles
    console.log("1. " + encuesta[i].opcion1);
    console.log("2. " + encuesta[i].opcion2);

    // Pedir al usuario que ingrese su voto
    const voto = prompt("Ingrese el número de la opción que prefiera (1 o 2):");

    // Verificar si el voto es válido
   if (voto === "1" || voto === "2") {
            console.log("¡Gracias por votar!");
            encuesta[i].votoElegido = encuesta[i]["opcion" + voto];
        } else {
            console.log("Voto inválido. Por favor, ingrese 1 o 2.");
        }
    }
}
  ```

- Dentro de la función, hay un bucle for que recorre todas las encuestas almacenadas en la variable encuesta. Este bucle itera desde i = 0 hasta i < encuesta.length, lo que significa que se recorrerán todas las encuestas una por una.

- Dentro del bucle, primero se muestra la pregunta de la encuesta actual utilizando console.log(encuesta[i].pregunta). Esto imprimirá en la consola la pregunta de la encuesta actual.

- Luego, se muestran las opciones disponibles para esa pregunta utilizando console.log("1. " + encuesta[i].opcion1) y console.log("2. " + encuesta[i].opcion2). Estas líneas mostrarán las dos opciones de respuesta disponibles para la pregunta actual.

- Después, se solicita al usuario que ingrese su voto mediante const voto = prompt("Ingrese el número de la opción que prefiera (1 o 2):"). El valor ingresado por el usuario se almacenará en la variable voto.

- Se verifica si el voto ingresado es válido. Si el voto es "1" o "2", se imprime "¡Gracias por votar!" y se asigna la opción elegida a la propiedad votoElegido de la encuesta actual. Esto se hace con la línea encuesta[i].votoElegido = encuesta[i]["opcion"+voto].

- Si el voto no es válido (no es "1" ni "2"), se imprime "Voto inválido. Por favor, ingrese 1 o 2.".

 En resumen, esta función permitirá a los usuarios votar en todas las encuestas almacenadas en encuesta, mostrando cada pregunta y sus opciones de respuesta, y registrando el voto del usuario en la encuesta correspondiente.


##  Paso 3: Se creó una función para mostrar los resultados:

```scss
function mostrarResultadosEncuesta(encuesta) {
    encuesta.forEach((pregunta) => {
        console.log(`Resultado pregunta "${pregunta.pregunta}": ${pregunta.votoElegido}`);
    });
}
  ```
Esta función muestra los resultados de las encuestas. Utilice el método forEach para recorrer todas las encuestas en encuesta y mostrar la pregunta junto con la opción elegida por cada votante.

##  Paso 4 Se crea la función mostrarResultadosEncuesta.
Ésta tiene como objetivo mostrar los resultados de una encuesta:

```scss
 function mostrarResultadosEncuesta(encuesta) {
    encuesta.forEach((pregunta) => {
        console.log(`Resultado pregunta "${pregunta.pregunta}": ${pregunta.votoElegido}`);
    });
}

  ```
La función mostrarResultadosEncuesta tiene como objetivo mostrar los resultados de una encuesta. Aquí está lo que hace:

Recibe un parámetro llamado encuesta, que debe ser un arreglo de objetos. Cada objeto representa una pregunta de la encuesta y contiene las siguientes propiedades:
pregunta: La pregunta en sí.
votoElegido: La opción elegida por los votantes (ya sea la opción 1 o la opción 2).
Utiliza el método forEach para iterar sobre cada elemento del arreglo encuesta.
Dentro del bucle, muestra en la consola el resultado de cada pregunta junto con la opción elegida. El formato es: "Resultado pregunta [pregunta]: [votoElegido]".
Por ejemplo, si tuvieras una encuesta sobre marcas de PC Gamers con dos preguntas (“¿Cuál es tu marca favorita?” y “¿Prefieres AMD o Intel?”), la función mostrarResultadosEncuesta mostraría los resultados de la siguiente manera:

Resultado pregunta "¿Cuál es tu marca favorita?": ASUS
Resultado pregunta "¿Prefieres AMD o Intel?": AMD
