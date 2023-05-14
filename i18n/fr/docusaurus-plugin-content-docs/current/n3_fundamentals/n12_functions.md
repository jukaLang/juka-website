---
sidebar_position: 12
slug: /fonctions
---

# Fonctions

## What is a function?

A function is a block of code that can be reused multiple times. Functions are defined using the `func` keyword.

## Syntax

The syntax for defining a function is as follows:

```jsx
func <name>(<parameters>) {
<statements>
}
```

For example, the following code defines a function named foo that takes no parameters and returns nothing:

```jsx
func foo() = {
    printLine("Hello, world!");
}
```

## Calling a function

A function can be called by using its name followed by a pair of parentheses. For example, the following code calls the foo function:
```jsx
foo()
```

## Parameters
A function can take parameters, which are variables that are passed to the function when it is called. The parameters are declared in the parentheses after the function name. For example, the following code defines a function named bar that takes two parameters, x and y:

```jsx
func bar(x, y) = {
    printLine("The sum of x and y is" + x + y);
}
```

A function can return a value. The value is declared after the parameters in the parentheses. For example, the following code defines a function named baz that returns the sum of two numbers:

```jsx
func baz(x, y) = {
    return x + y;
}
```

## Main function

Every Juka program must have a main function. The main function is the entry point for the program. The main function is defined like any other function, but it does not have a name. For example, the following code defines a main function:

```jsx
func main()={
printLine("Hello, world!");
}
```


