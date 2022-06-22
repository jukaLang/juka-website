---
sidebar_position: 3
---

# Funciones

## Función principal
Juka automatically executes main() function.

```jsx
func main() = { printLine("Hello");}
```

NOTE: the scripts that do not have main function, can be executed by calling the function itself. For example:
```jsx
func x() = { printLine("Hello"); } x();
```

## Funciones
Todas las funciones se definen con la función de la palabra. Las funciones pueden contener valores alfanuméricos (incluyendo _) y las funciones no pueden comenzar con un valor numérico. Las funciones son simplemente definidas:

```jsx
func foo() = {
   printLine("Hello Friend!");
}
foo();
```

Ejemplo:

```jsx
func x() = {
    string y = "Hello World";
    printLine(y);
    printLine("It works!");
}
func y() = {
    printLine("==in the middle==");
    print("======");
}
x();
y();
x();

```