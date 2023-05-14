---
sidebar_position: 10
slug: /condiciones
---

# Condiciones

## ¿Qué es una condición?

Una condición es una sentencia que puede ser evaluada para ser verdadera o falsa. Las condiciones se utilizan para controlar el flujo de ejecución de un programa.

## Síntesis

La sintaxis para una condición es la siguiente:

```jsx
if <condition>
{
<statements>
}
else
{
<statements>
}
```

Por ejemplo, el siguiente código imprimirá "¡Correcto!" si el valor de la suma variable es igual a 5, y "¡Incorrecto!" de lo contrario:


```jsx
func main()={

    var sum = 4+1;

    if (suma == 5)
    {
        printLine("¡Correcto! 4+1 = 5")
    }
    else
    {
        printLine("¡Incorrecto!")
    }
}
```

