---
sidebar_position: 3
---

# Funciones

## Función principal
Juka ejecuta automáticamente la función main().

```jsx
func main() = { printLine("Hola");}
```

NOTA: los scripts que no tienen función principal, pueden ser ejecutados llamando a la función misma. Por ejemplo:
```jsx
func x() = { printLine("Hello"); } x();
```

## Funciones
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
    string y = "Hola Mundo";
    printLine(y);
    printLine("¡Funciona! );
}
func y() = {
    printLine("==in the middle==");
    print("======");
}
x();
y();
x();

```