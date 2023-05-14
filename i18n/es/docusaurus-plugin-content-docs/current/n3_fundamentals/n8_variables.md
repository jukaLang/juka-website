---
sidebar_position: 8
slug: /variables
---

# Variables


## ¿Qué es una variable?

A variable is a named location in memory that can be used to store a value. Variables can be used to store any type of data, including numbers, strings, objects, and arrays.

## Definición de variables

Variables are defined using the `var` keyword. The syntax for defining a variable is as follows:

```jsx
var <name> = <value>;
```

For example, the following code defines a variable named `x` and sets it to the value 3:
```jsx
var x = 3;
```

## Reassigning Variables
The value of a variable can be changed by reassigning it. To reassign a variable, simply use the var keyword again, followed by the new value. For example, the following code reassigns the value of the variable x to 4:
```jsx
var x = 3;
x = 4;
```

## Deleting Variables
Variables can be deleted using the delete keyword. The syntax for deleting a variable is as follows:
```jsx
delete <name>;
```

For example, the following code deletes the variable `x`:

```jsx
delete x;
```

## Common Errors

There are a few common errors that can be made when working with variables. One common error is forgetting to declare a variable. If a variable is not declared, it will not be accessible in the program. Another common error is assigning a value to a variable that is not the correct type. For example, the following code will generate an error because the value "3" is a string, but the variable x is an integer:

```jsx
var x = "3";
```

Finally, it is important to remember that variables are scoped. This means that a variable can only be accessed from the scope where it is declared. If you try to access a variable from outside of its scope, you will get an error.