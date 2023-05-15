---
sidebar_position: 13
slug: /clases
---

# Clases

## ¿Qué es una clase?

Una clase es un plano para crear objetos. Define las propiedades y métodos que tendrán los objetos de esa clase.

## Cómo definir una clase

Para definir una clase, usa la palabra clave `class`. La sintaxis para definir una clase es la siguiente:

```jsx
class <name> = {
    <members>
}
```

Donde `nombre` es el nombre de la clase, y `miembros` son las propiedades y métodos de la clase.

## Miembros

Los miembros de una clase pueden ser propiedades o métodos. Las propiedades son variables que están asociadas con un objeto. Los métodos son funciones que están asociadas con un objeto.

## Propiedades
Las propiedades se definen usando la palabra clave de la variable. La sintaxis para definir una propiedad es la siguiente:

```jsx
    var <name>
```

Donde `nombre` es el nombre de la propiedad, y `tipo` es el tipo de propiedad.

## Métodos
Los métodos se definen usando la palabra clave `func`. La sintaxis para definir un método es la siguiente:

```jsx
func <name>(<parameters>) = {
    <statements>
}
```
Donde `name` es el nombre del método, `parámetros` son los parámetros del método, y `sentencias` son las sentencias en el cuerpo del método.

## Creando objetos


Para crear un objeto, utilice la nueva palabra clave. La sintaxis para crear un objeto es la siguiente:

```jsx
var <object_name> = new <class_name>();
```

Donde `object_name` es el nombre del objeto, y `class_name` es el nombre de la clase.

## Accediendo a propiedades y métodos

Las propiedades y métodos de un objeto pueden ser accedidos usando la notación de punto. Por ejemplo, para acceder al nombre de propiedad del objeto myObject, usaría el siguiente código:

```jsx
myObject.name
```

Para llamar al método `añadir` del objeto `myObject`, usaría el siguiente código:

```jsx
myObject.add(2, 6)
```

## Ejemplo
El siguiente código define una clase llamada `MathClass` y crea un objeto de esa clase:

```jsx
class MathClass {
    var num1: int
    var num2: int

    func add() {
        return this.num1 + this.num2
    }
}

var mathClass = new MathClass()
mathClass.num1 = 2
mathClass.num2 = 6
print(mathClass.add())
```

Este código imprimirá el valor 8.