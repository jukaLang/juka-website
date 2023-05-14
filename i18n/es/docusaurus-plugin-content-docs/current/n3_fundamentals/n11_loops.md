---
sidebar_position: 11
slug: /bucles
---

# Bucles

## Mientras bucle

Un bucle while es un comando de flujo de control que permite que el código se ejecute repetidamente basado en una condición booleana. La sintaxis de un bucle while es la siguiente:

```jsx
mientras <condition>
{
<statements>
}
```

Por ejemplo, el siguiente código imprimirá los números de 1 a 5:

```jsx
func foo() = {
    var x = 1;

    while e(x <= 5){
    printLine(x);
    x = x + 1;
}
}
```

## Romper

El comando break puede ser usado para salir de un bucle. La sintaxis del comando break es la siguiente:

```jsx
romper;
```

Por ejemplo, el siguiente código imprimirá los números de 1 a 5, pero saldrá del bucle cuando el valor de x alcance 3:

```jsx
func main() = {
    var x = 0;
    while (1){
    x = x + 1;
        if (x > 2) {
            break;
        }
    }
}
```
