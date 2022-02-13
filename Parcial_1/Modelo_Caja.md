# **Modelo de caja**
El modelo de cajas (Box Model) es seguramente la característica más importante del lenguaje de hojas de estilos CSS, ya que condiciona el diseño de todas las páginas web. 

El modelo de cajas es el comportamiento de CSS que hace que todos los elementos de las páginas se representen mediante cajas rectangulares.

>[Concepto](https://uniwebsidad.com/libros/css/capitulo-4)

#### **Representación básica del modelo de cajas**
1. **El borde** (Border), en negro, es el límite que separa el interior del exterior del elemento.

2. **El márgen** (Margin), en naranja, es la parte exterior del elemento, por fuera del borde.

3. **El relleno** (Padding), en verde, es la parte interior del elemento, entre el contenido y el borde.

4. **El contenido**, en azul, es la parte interior del elemento, excluyendo el relleno.

![Partes](../Partes.png)

>[Partes](https://lenguajecss.com/css/modelo-de-cajas/que-es/)

#### **Ejemplos de código**
Un modelo de caja cuenta con dos propiedades principales para definirla, height y width, que definirán el ancho y alto de nuestra caja.
```css
div{
  background: #5DEAA8;
  height: 100px;
  width: 200px;
}
```
 Tenemos el Margin, Padding y Border que nos brindaran mayor control al momento de organizar los elementos.

```css
div{
  border: 10px solid #3EC483;
  background: #5DEAA8;
  height: 100px;
  width: 200px;
  padding: 10px;
  margin: 10px;
}
```
>[Códigos](https://devcode.la/tutoriales/modelo-caja-css/)

#### **Posicionamiento**
CSS permite al diseñador modificar la posición en la que se muestra cada caja.

El estándar de CSS define cinco modelos diferentes para posicionar una caja:

1. **Posicionamiento normal o estático:** Se trata del posicionamiento que utilizan los navegadores si no se indica lo contrario.

2. **Posicionamiento relativo:** Variante del posicionamiento normal que consiste en posicionar una caja según el posicionamiento normal y después desplazarla respecto de su posición original.

3. **Posicionamiento absoluto:** La posición de una caja se establece de forma absoluta respecto de su elemento contenedor y el resto de elementos de la página ignoran la nueva posición del elemento.


4. **Posicionamiento fijo:** Variante del posicionamiento absoluto que convierte una caja en un elemento inamovible, de forma que su posición en la pantalla siempre es la misma independientemente del resto de elementos e independientemente de si el usuario sube o baja la página en la ventana del navegador.

5. **Posicionamiento flotante:** se trata del modelo más especial de posicionamiento, ya que desplaza las cajas todo lo posible hacia la izquierda o hacia la derecha de la línea en la que se encuentran.

>[Posición](https://uniwebsidad.com/libros/css/capitulo-5/posicionamiento)