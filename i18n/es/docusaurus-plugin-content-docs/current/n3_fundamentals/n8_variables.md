---
sidebar_position: 8
slug: /variables
---

# Variables


## ¿Qué es una variable?

Una variable es una ubicación con nombre en la memoria que puede ser usada para almacenar un valor. Las variables se pueden utilizar para almacenar cualquier tipo de datos, incluyendo números, cadenas, objetos y arrays.

## Definición de variables

Las variables se definen usando la palabra clave `var`. La sintaxis para definir una variable es la siguiente:

```jsx
var <name> = <value>;
```

Por ejemplo, el siguiente código define una variable llamada `x` y la establece en el valor 3:
```jsx
var x = 3;
```

## Razando variables
El valor de una variable se puede cambiar reasignándola. Para reasignar una variable, simplemente utilice la palabra clave de var de nuevo, seguido por el nuevo valor. Por ejemplo, el siguiente código reasigna el valor de la variable x a 4:
```jsx
var x = 3;
x = 4;
```

## Borrando variables
Las variables pueden ser eliminadas usando la palabra clave de eliminación. La sintaxis para eliminar una variable es la siguiente:
```jsx
<name> = null
```

Por ejemplo, el siguiente código elimina la variable `x`:

```jsx
x = null
```

## Errores comunes

Existen algunos errores comunes que se pueden cometer al trabajar con variables. Otro error común es asignar un valor a una variable que no es el tipo correcto. Por ejemplo, el siguiente código generará un error porque el valor "3" es una cadena, pero la variable x es un entero:

```jsx
var x = "3";
```
