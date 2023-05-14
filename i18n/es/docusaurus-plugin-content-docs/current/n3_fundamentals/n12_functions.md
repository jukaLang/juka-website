---
sidebar_position: 12
slug: /funciones
---

# Funciones

## ¿Qué es una función?

Una función es un bloque de código que puede ser reutilizado varias veces. Las funciones se definen usando la palabra clave `func`.

## Síntesis

La sintaxis para definir una función es la siguiente:

```jsx
func <name>(<parameters>) {
<statements>
}
```

Por ejemplo, el siguiente código define una función llamada foo que no toma parámetros y no devuelve nada:

```jsx
func foo() = {
    printLine("Hola, mundo!");
}
```

## Llamando a una función

Una función puede ser llamada usando su nombre seguido de un par de paréntesis. Por ejemplo, el siguiente código llama a la función foo:
```jsx
foo()
```

## Parámetros
Una función puede tomar parámetros, que son variables que se pasan a la función cuando se llama. Los parámetros se declaran en los paréntesis después del nombre de la función. Por ejemplo, el siguiente código define una barra con nombre de función que toma dos parámetros, x y y:

```jsx
func bar(x, y) = {
    printLine("La suma de x e y es" + x + y);
}
```

Una función puede devolver un valor. El valor se declara después de los parámetros en los paréntesis. Por ejemplo, el siguiente código define una función llamada baz que devuelve la suma de dos números:

```jsx
func baz(x, y) = {
    return x + y;
}
```

## Función principal

Cada programa de Juka debe tener una función principal. La función principal es el punto de entrada del programa. La función principal se define como cualquier otra función, pero no tiene un nombre. Por ejemplo, el siguiente código define una función principal:

```jsx
func main()={
printLine("Hola, mundo!");
}
```


