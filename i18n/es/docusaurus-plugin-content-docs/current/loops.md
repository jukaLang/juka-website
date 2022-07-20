---
sidebar_position: 8
---

# Bucles

## Mientras bucle

En Juka, mientras que el bucle se define de forma similar a la mayoría de los demás lenguajes de programación.

Un ejemplo simple del bucle while :

```jsx
int x = 0;
while e(x < 2) {
    x = x+1;
}
```

En este ejemplo x se establece en 0. El comando **mientras** comprueba y ve que x debe ser menor que 2 y devuelve verdadero. El bucle **mientras se ejecuta el bucle**. El valor de x se incrementa en 1. Esta es una forma de Juka de aumentar los valores. El bucle **mientras que** solo se ejecuta dos veces.

## Romper
Se le permite ejecutar un bucle infinito. Sin embargo, debería tener una sentencia break para salir del bucle

Un ejemplo simple de ruptura:

```jsx
int x = 0;
while e( 1 ){
    x = x + 1;
    if ( x > 2) {
        break;
    }
}
```

Aunque no se recomienda el uso de **break** , proporciona una forma cómoda y fácil de **romper** un **mientras** bucle.