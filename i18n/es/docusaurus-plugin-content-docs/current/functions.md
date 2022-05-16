---
sidebar_position: 3
---

# Funciones

## Función principal
Cada código o script de punto de entrada debe tener una función de entrada. Una función de entrada se define usando lo siguiente:

```jsx
func main() = { }
```

NOTA: los scripts que no tienen función principal pueden ser importados, pero no pueden ser ejecutados directamente. La función principal se llama automáticamente al entrar. Sin embargo, si es necesario, todavía puede llamar las funciones main() explícitamente.

## Funciones
Todas las funciones se definen con la función de la palabra. Las funciones pueden contener valores alfanuméricos (incluyendo _) y las funciones no pueden comenzar con un valor numérico. Las funciones son simplemente definidas:

```jsx
func foo() = {
   printLine("Hola amigo");
}
```

Ejemplo:

```jsx
func main() = {

    int y = 5;

    while ( (y == 3) && (y == 5) || (y > 6) ){
        printLine("loop");
    }

}


func foo() = {
    int x = 3;
    printLine(x);
    fart();
    return x;
}


func rock() = {
    bark();
    bark();
    printLine("rock");
}

func bark()={
    printLine("bark");
}
```