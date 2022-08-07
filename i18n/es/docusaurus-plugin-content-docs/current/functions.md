---
sidebar_position: 5
---

# Funciones

## Ejecutando funciones
Every script should have a main function. Scripts can be executed by calling the function within main function

# Usage Examples

```jsx
func x() = { 
    printLine("Hello"); 
}
func main() ={
    x();
}
```

Todas las funciones se definen con la función de la palabra. Las funciones pueden contener valores alfanuméricos (incluyendo _) y las funciones no pueden comenzar con un valor numérico. Las funciones son simplemente definidas:

```jsx
func foo() = {
   printLine("Hello Friend!");
}
func main() = {
    foo();
}
```

# Usage Example

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

func main() = {
    x();
    y();
    x();
}
```