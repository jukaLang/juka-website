---
sidebar_position: 13
slug: /classes
---

# Classes

## What is a class?

A class is a blueprint for creating objects. It defines the properties and methods that objects of that class will have.

## How to define a class

To define a class, use the `class` keyword. The syntax for defining a class is as follows:

```jsx
class <name> = {
<members>
}
```

Where `name` is the name of the class, and `members` are the properties and methods of the class.

## Members

The members of a class can be properties or methods. Properties are variables that are associated with an object. Methods are functions that are associated with an object.

## Properties
Properties are defined using the var keyword. The syntax for defining a property is as follows:

```jsx
var <name>;
```

Where `name` is the name of the property, and `type` is the type of the property.

## Methods
Methods are defined using the `func` keyword. The syntax for defining a method is as follows:

```jsx
func <name>(<parameters>) = {
<statements>
}
```
Where `name` is the name of the method, `parameters` are the parameters of the method, and `statements` are the statements in the method body.

## Creating objects


To create an object, use the new keyword. The syntax for creating an object is as follows:

```jsx
var <object_name> = new <class_name>();
```

Where `object_name` is the name of the object, and `class_name` is the name of the class.

## Accessing properties and methods

The properties and methods of an object can be accessed using the dot notation. For example, to access the property name of the object myObject, you would use the following code:

```jsx
myObject.name;
```

To call the method `add` of the object `myObject`, you would use the following code:

```jsx
myObject.add(2, 6);
```

## Example
The following code defines a class named `MathClass` and creates an object of that class:

```jsx
class MathClass {
var num1: int;
var num2: int;

func add() {
return this.num1 + this.num2;
}
}

var mathClass = new MathClass();
mathClass.num1 = 2;
mathClass.num2 = 6;
print(mathClass.add());
```

This code will print the value 8.