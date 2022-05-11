# **Promise**
Las promesas son un concepto para resolver el problema de asincronía de una forma mucho más elegante y práctica que, por ejemplo, utilizando funciones callbacks directamente.

Como su propio nombre indica, una promesa es algo que, en principio pensamos que se cumplirá, pero en el futuro pueden ocurrir varias cosas:

![IMG1](https://lenguajejs.com/javascript/asincronia/promesas/promises.png)

- La promesa **se cumple** (promesa resuelta).
- La promesa **no se cumple** (promesa se rechaza).
- La promesa se queda en un **estado incierto** indefinidamente (promesa pendiente).

>[Concepto](https://lenguajejs.com/javascript/asincronia/promesas/)

### **Importancia**
JavaScript es "single threaded". Eso significa que sólo puede realizar una acción a la vez, desde el único hilo de ejecutación disponible.

Si tenemos una secuencia de operaciones, éstas operaciones se deben ejecutar una después de otra (ya que no es posible crear más hilos).

La implementación de JavaScript es distinta en cada navegador. Pero generalmente la ejecución de código JavaScript ocurre a la par con el proceso de pintar elementos, actualizar los estilos, y gestionar acciones del usuario (como resaltar texto o interactuar con los controles de un formulario). La actividad en una de estas cosas retrasa a las otras.

>[Importancia](https://programacionymas.com/blog/promesas-javascript/)

### **Promesas en Javascript**
Las promesas en Javascript se representan a través de un , y cada promesa estará en un estado concreto: pendiente, aceptada o rechazada. Además, cada promesa tiene los siguientes métodos, que podremos utilizar para utilizarla:

Métodos| Descripción
|--|--|
 .then(**function** resolve) | Ejecuta la función callback **resolve** cuando la promesa se cumple. |
 .catch(**function** reject) | Ejecuta la función callback **reject** cuando la promesa se rechaza. | 
 .then(**function** resolve, **function** reject)|Método equivalente a las dos anteriores en el mismo **.then()**.
.finally(**function** end)| Ejecuta la función callback **end** tanto si se cumple como si se rechaza.


### **Consumir una promesa** 
La forma general de consumir una promesa es utilizando el .then() con un sólo parámetro, puesto que muchas veces lo único que nos interesa es realizar una acción cuando la promesa se cumpla:

```html
fetch("/robots.txt").then(function(response) {
  /* Código a realizar cuando se cumpla la promesa */
});
```
Lo que vemos en el ejemplo anterior es el uso de la función fetch(), la cuál devuelve una promesa que se cumple cuando obtiene respuesta de la petición realizada. De esta forma, estaríamos preparando (de una forma legible) la forma de actuar de nuestro código a la respuesta de la petición realizada, todo ello de forma asíncrona.


>[Fuente](https://lenguajejs.com/javascript/asincronia/promesas/)
