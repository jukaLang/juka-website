---
sidebar_position: 13
slug: /clases
---

# Clases

## ¿Qué es una clase?

Una clase es un plano para crear objetos. Define las propiedades y métodos que tendrán los objetos de esa clase.

## Cómo definir una clase

To define a class, use the class keyword. La sintaxis para definir una clase es la siguiente:

```jsx
class <name> = {
<members>
}
```

Where name is the name of the class, and members are the properties and methods of the class.

## Miembros

Los miembros de una clase pueden ser propiedades o métodos. Las propiedades son variables que están asociadas con un objeto. Los métodos son funciones que están asociadas con un objeto.

## Propiedades
Las propiedades se definen usando la palabra clave de la variable. La sintaxis para definir una propiedad es la siguiente:

```jsx
    var <name>;
```

Where name is the name of the property, and type is the type of the property.

## Métodos
Methods are defined using the func keyword. La sintaxis para definir un método es la siguiente:

```jsx
func <name>(<parameters>) = {
<statements>
}
```
Where name is the name of the method, parameters are the parameters of the method, and statements are the statements in the method body.

## Creando objetos


Para crear un objeto, utilice la nueva palabra clave. La sintaxis para crear un objeto es la siguiente:

```jsx
var <object_name> = new <class_name>();
```
Where object_name`is the name of the object, and class_name is the name of the class.

## Accediendo a propiedades y métodos

Las propiedades y métodos de un objeto pueden ser accedidos usando la notación de punto. Por ejemplo, para acceder al nombre de propiedad del objeto myObject, usaría el siguiente código:

```jsx
myObject.name;
```
To call the method add`of the object myObject, you would use the following code:

```jsx
myObject.add(2, 6);
```

## Ejemplo
The following code defines a class named MathClass and creates an object of that class:

```jsx
class MathClass {
    var num1: int
    var num2: int

    func add() = {
        return this.num1 + this.num2
    }
}
var mathClass = new MathClass()
mathClass.num1 = 2
mathClass.num2 = 6
print(mathClass.add())
```

Este código imprimirá el valor 8.