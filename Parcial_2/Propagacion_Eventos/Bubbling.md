# **Bubbling**
El burbujeo de eventos es un término se encuentra en JavaScript. Se relaciona con el orden en que se llama a los controladores de eventos cuando un elemento está anidado dentro de un segundo elemento, y ambos elementos han registrado un agente de escucha para el mismo evento (un clic, por ejemplo).
>[Concepto](https://www.sitepoint.com/event-bubbling-javascript/)

### **Propagación**
El principio de propagación es simple.

Cuando un evento ocurre en un elemento, este primero ejecuta los manejadores que tiene asignados, luego los manejadores de su padre, y así hasta otros ancestros.
```html
<form onclick="alert('form')">FORM
  <div onclick="alert('div')">DIV
    <p onclick="alert('p')">P</p>
  </div>
</form>
```
Un clic en el elemento del interior ```<p>``` primero ejecuta onclick:
1. En ese ```<p>```.
2. Luego en el ```<div>``` de arriba.
3. Luego en el ```<form>``` de más arriba.
4. Y así sucesivamente hasta el objeto document.
Así si hacemos clic en ```<p>```, entonces veremos 3 alertas: ```<p>``` → ```<div>``` → ```<form>```.

![Burbujeo](https://miro.medium.com/max/724/0*xx90C4a2Np_gz0w8.png)

>[Fuente](https://es.javascript.info/bubbling-and-capturing)

### **Ejemplo visual**
![Ejemplo](https://miro.medium.com/max/724/1*ePPmZzDbI9fJSHSmDKODqg.jpeg)