---
sidebar_position: 5
---

# Funciones

## Ejecutando funciones

Los scripts se pueden ejecutar llamando a la función misma. Por ejemplo:
```jsx
func x() = { printLine("Hello"); } x();
```

Todas las funciones se definen con la función de la palabra. Las funciones pueden contener valores alfanuméricos (incluyendo _) y las funciones no pueden comenzar con un valor numérico. Las funciones son simplemente definidas:

```jsx
func foo() = {
   printLine("Hola amigo!");
}
foo();
```

Ejemplo:

```jsx
func x() = {
    var = "Hello World";
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