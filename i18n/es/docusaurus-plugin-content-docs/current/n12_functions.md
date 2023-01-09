---
sidebar_position: 12
slug: /funciones
---

# Funciones

## Ejecutando funciones

Cada script debería tener una función principal. Los scripts se pueden ejecutar llamando a la función dentro de la función principal

# Ejemplos de uso

```jsx
func x() = {
    printLine("Hello");
}
func main() ={
    x();
}
```

Todas las funciones se definen con la función de la palabra. Las funciones son simplemente definidas: Functions can contain alphanumeric values (including \_) and functions cannot start with numeric value.

```jsx
func foo() = {
   printLine("Hola amigo!");
}
func main() = {
    foo();
}
```

# Ejemplo de uso

```jsx
func x() = {
    var = "Hola Mundo";
    printLine(y);
    printLine("¡Funciona! );
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
